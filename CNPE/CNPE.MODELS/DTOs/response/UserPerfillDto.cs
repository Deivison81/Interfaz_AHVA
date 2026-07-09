

namespace CNPE.MODELS.DTOs.response
{
    public class UserPerfillDto
    {
        public int UsuarioId { get; set; }
        public string NumeroDocumento { get; set; } = string.Empty;
        public string TipoDocumento { get; set; } = string.Empty;
        public string Nombres { get; set; } = string.Empty;
        public string PrimerApellido { get; set; } = string.Empty;
        public string SegundoApellido { get; set; } = string.Empty;
        public string Cargo { get; set; } = string.Empty;
        public string Entidad { get; set; } = string.Empty;
        public DateOnly FechaNacimiento { get; set; }
        public string Nacionalidad { get; set; } = string.Empty;
        public string Sexo { get; set; } = string.Empty;
        public string CorreoPrincipal { get; set; } = string.Empty;
        public string? CorreoSecundario { get; set; }
        public string TelefonoMovil { get; set; } = string.Empty;
        public string? TelefonoSecundarioTipo { get; set; }
        public string? TelefonoSecundario { get; set; }
        public string TipoContratacion { get; set; } = string.Empty;
        public DateOnly FechaContratacion { get; set; }
    }
}
