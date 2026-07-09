

namespace CNPE.PERSITENCE.Interfaz
{
    public interface IGenericRpository<TEntity> where TEntity : class
    {
        Task<TEntity> GetbyIdAsync(int id);
        void Update(TEntity entity);

        Task InsertAsync(TEntity entity);

        Task SaveChangesAsync();

    }
}
