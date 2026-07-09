

using CNPE.MODELS.constantes;
using CNPE.MODELS.DTOs.request;
using FluentValidation;

namespace CNPE.APLICATION.Validation
{
    public class LoginRequestValidator: AbstractValidator<LoginRequestDto>
    {
        public LoginRequestValidator()
        {
            RuleFor(x => x.NumeroDocumento)
                .NotEmpty().WithMessage("El número de documento (usuario) es requerido.");
            RuleFor(x => x.Password)
                .NotEmpty().WithMessage("La contraseña es requerida.");
            RuleFor(x=> x.TipoDocumento)
                .IsInEnum().WithMessage("El tipo de documento seleccionado no es válido.");

            When(x => x.TipoDocumento == TipoDocumentoEnum.DNI, () =>
            {
                RuleFor(x=> x.NumeroDocumento)
                    .Length(8).WithMessage("El DNI debe tener exactamente 8 dígitos.")
                    .Matches(@"^[0-9]+$").WithMessage("El DNI solo debe contener caracteres numéricos.");
            });

            When(x => x.TipoDocumento == TipoDocumentoEnum.CE, () =>
            {
                RuleFor(x => x.NumeroDocumento)
                    .MinimumLength(9).WithMessage("El Carné de Extranjería (CE) debe tener al menos 9 caracteres.")
                    .MaximumLength(12).WithMessage("El Carné de Extranjería (CE) no puede superar los 12 caracteres.")
                    .Matches(@"^[a-zA-Z0-9]+$").WithMessage("El CE solo permite caracteres alfanuméricos.");
            });
        }
    }
}
