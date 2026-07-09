using AutoMapper;
using CNPE.APLICATION.Interfaz_Services;
using CNPE.MODELS.DTOs.request;
using CNPE.MODELS.DTOs.response;
using CNPE.MODELS.Models;
using CNPE.PERSITENCE.Interfaz;
using FluentValidation;

namespace CNPE.APLICATION.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _repository;
        private readonly IMapper _mapper;
        private readonly IValidator<LoginRequestDto> _validator;
        private readonly IEmailService _emailService;
        private const int MaxIntentos = 3;
        private const int MinutosBloqueo = 15;

        public AuthService(IAuthRepository repository, IMapper mapper, IValidator<LoginRequestDto> validator, IEmailService emailService)
        {
            _repository = repository;
            _mapper = mapper;
            _validator = validator;
            _emailService = emailService;
        }

        public async Task<UserPerfillDto?> ProcessAuthenticationAsync(LoginRequestDto request, string ipAddress)
        {
            // Formatos y Estructuras de Validación (FluentValidation)
            var validationResult = await _validator.ValidateAsync(request);
            if (!validationResult.IsValid)
            {
                string errors = string.Join(", ", validationResult.Errors.Select(e => e.ErrorMessage));
                throw new ValidationException(errors);
            }

            // Validacion de Existencia de Usuario
            var usuario = await _repository.GetUserByDocument(request.NumeroDocumento);
            if (usuario == null)
            {
                await GenerarLogAuditoriaAsync(null, "LOGIN_FALLIDO", $"Intento de acceso con documento no registrado: {request.NumeroDocumento}", ipAddress);
                return null;
            }

            //  Validacion de Ventana de Bloqueo Temporal
            if (usuario.BloqueadoHasta.HasValue && usuario.BloqueadoHasta.Value > DateTime.Now)
            {
                await GenerarLogAuditoriaAsync(usuario.UsuarioId, "LOGIN_RECHAZADO", "Intento de acceso en cuenta bloqueada.", ipAddress);
                throw new InvalidOperationException("Has excedido el número máximo de intentos fallidos. Por seguridad, tu cuenta ha sido bloqueada durante 15 minutes.");
            }

            //  Validacion de Password
            bool esPasswordValid = (usuario.PasswordHash == request.Password);
            if (!esPasswordValid)
            {
                usuario.IntentosFallidos = (usuario.IntentosFallidos ?? 0) + 1;
                string accion = "LOGIN_FALLIDO";
                string detalle = $"Intento fallido {usuario.IntentosFallidos}/{MaxIntentos}";

                if (usuario.IntentosFallidos >= MaxIntentos)
                {
                    usuario.BloqueadoHasta = DateTime.Now.AddMinutes(MinutosBloqueo);
                    accion = "BLOQUEO_CUENTA";
                    detalle = $"Cuenta bloqueada por {MinutosBloqueo} minutos debido a superar intentos fallidos.";

                    try
                    {
                        await _emailService.SendBlockNotificationAsync(usuario.CorreoPrincipal, $"{usuario.Nombres} {usuario.PrimerApellido}");
                    }
                    catch (Exception)
                    {
                        // Resiliencia para que no rompa el hilo principal
                    }
                }

                _repository.Update(usuario);
                await GenerarLogAuditoriaAsync(usuario.UsuarioId, accion, detalle, ipAddress);
                await _repository.SaveChangesAsync();
                return null;
            }

            // Caso de Autenticación Exitosa (VA FUERA DEL IF DE ERROR)
            usuario.IntentosFallidos = 0;
            usuario.BloqueadoHasta = null;

            _repository.Update(usuario);
            await GenerarLogAuditoriaAsync(usuario.UsuarioId, "LOGIN_EXITOSO", "Autenticación correcta en el sistema.", ipAddress);
            await _repository.SaveChangesAsync();

            // Retorno mapeado
            return _mapper.Map<UserPerfillDto>(usuario);
        }

        private async Task GenerarLogAuditoriaAsync(int? usuarioId, string accion, string detalle, string ipAddress)
        {
            var log = new LogsAuditorium
            {
                UsuarioId = usuarioId,
                Accion = accion,
                Detalle = detalle,
                DireccionIp = ipAddress,
                FechaRegistro = DateTime.Now
            };
            await _repository.RegisterLogAsync(log);
        }
    }
}