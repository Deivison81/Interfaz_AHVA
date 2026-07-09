
using CNPE.APLICATION.Interfaz_Services;

namespace CNPE.APLICATION.Services
{
    public class EmailService : IEmailService
    {
        public Task SendBlockNotificationAsync(string correoUsuario, string nombreUsuario)
        {
            Console.WriteLine($"[EMAIL] Enviando correo a {correoUsuario}. Mensaje: Estimado(a) {nombreUsuario}, su cuenta ha sido bloqueada temporalmente por 15 minutos debido a exceso de intentos fallidos.");
            return Task.CompletedTask;
        }
    }
}
