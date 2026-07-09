using CNPE.MODELS.Models;
using CNPE.PERSITENCE.Dbcontext;
using CNPE.PERSITENCE.Interfaz;
using Microsoft.EntityFrameworkCore;

namespace CNPE.PERSITENCE.Implents
{
    public class AuthRepository: IAuthRepository
    {
        private readonly CnpeBdContext _context;

        public AuthRepository(CnpeBdContext context)
        {
            _context = context;
        }
        
        // Base
        public async Task<Usuario> GetbyIdAsync(int id) => await _context.Usuarios.FindAsync(id);

        public void Update(Usuario entity) => _context.Usuarios.Update(entity);

        public async Task InsertAsync(Usuario entity) => await _context.Usuarios.AddAsync(entity);

        public async Task SaveChangesAsync() => await _context.SaveChangesAsync();

        //Metodo Espeficio del Area de Autenticacion

        public async Task<Usuario> GetUserByDocument(string document)
        {
            return await _context.Usuarios.FirstOrDefaultAsync(x => x.NumeroDocumento == document);
                 
        }

        public async Task RegisterLogAsync(LogsAuditorium log)
        {
            await _context.LogsAuditoria.AddAsync(log);
        }

      

       
    }
}
