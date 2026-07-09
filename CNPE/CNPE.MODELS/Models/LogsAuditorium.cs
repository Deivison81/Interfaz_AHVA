using System;
using System.Collections.Generic;

namespace CNPE.MODELS.Models;

public partial class LogsAuditorium
{
    public long LogId { get; set; }

    public int? UsuarioId { get; set; }

    public string Accion { get; set; } = null!;

    public string Detalle { get; set; } = null!;

    public string DireccionIp { get; set; } = null!;

    public DateTime FechaRegistro { get; set; }

    public virtual Usuario? Usuario { get; set; }
}
