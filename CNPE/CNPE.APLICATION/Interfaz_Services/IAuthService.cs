
using CNPE.MODELS.DTOs.request;
using CNPE.MODELS.DTOs.response;
using CNPE.MODELS.Models;

namespace CNPE.APLICATION.Interfaz_Services
{
    public interface IAuthService
    {
        Task<UserPerfillDto> ProcessAuthenticationAsync(LoginRequestDto request, string ipAddress);
    }
}
