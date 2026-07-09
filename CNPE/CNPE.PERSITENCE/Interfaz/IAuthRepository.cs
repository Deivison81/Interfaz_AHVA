
using CNPE.MODELS.Models;

namespace CNPE.PERSITENCE.Interfaz
{
    public interface IAuthRepository : IGenericRpository<Usuario>
    {
        Task<Usuario> GetUserByDocument(string document);

        Task RegisterLogAsync(LogsAuditorium log);
    }
}
