
using CNPE.MODELS.constantes;

namespace CNPE.MODELS.DTOs.request
{
    public class LoginRequestDto
    {
        public TipoDocumentoEnum TipoDocumento { get; set; } // 'DNI' o 'CE'
        public string NumeroDocumento { get; set; } = string.Empty; // El valor del input 'Usuario'
        public string Password { get; set; } = string.Empty;
    }
}
