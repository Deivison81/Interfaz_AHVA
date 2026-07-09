using System;
using System.Collections.Generic;

namespace CNPE.MODELS.Models;

public partial class Usuario
{
    public int UsuarioId { get; set; }

    public string NumeroDocumento { get; set; } = null!;

    public string TipoDocumento { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public int? IntentosFallidos { get; set; }

    public DateTime? BloqueadoHasta { get; set; }

    public bool? EsActivo { get; set; }

    public string Nombres { get; set; } = null!;

    public string PrimerApellido { get; set; } = null!;

    public string SegundoApellido { get; set; } = null!;

    public string Cargo { get; set; } = null!;

    public string Entidad { get; set; } = null!;

    public DateOnly FechaNacimiento { get; set; }

    public string Nacionalidad { get; set; } = null!;

    public string Sexo { get; set; } = null!;

    public string CorreoPrincipal { get; set; } = null!;

    public string? CorreoSecundario { get; set; }

    public string TelefonoMovil { get; set; } = null!;

    public string? TelefonoSecundarioTipo { get; set; }

    public string? TelefonoSecundario { get; set; }

    public string TipoContratacion { get; set; } = null!;

    public DateOnly FechaContratacion { get; set; }

    public string CreadoPor { get; set; } = null!;

    public DateTime FechaCreacion { get; set; }

    public string? ModificadoPor { get; set; }

    public DateTime? FechaModificacion { get; set; }

    public virtual ICollection<LogsAuditorium> LogsAuditoria { get; set; } = new List<LogsAuditorium>();
}
