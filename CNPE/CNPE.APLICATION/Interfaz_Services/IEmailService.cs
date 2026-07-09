

namespace CNPE.APLICATION.Interfaz_Services
{
    public interface IEmailService
    {
        Task SendBlockNotificationAsync(string correoUsuario, string nombreUsuario);
    }
}
