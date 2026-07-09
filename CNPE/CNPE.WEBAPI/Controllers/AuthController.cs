using CNPE.APLICATION.Interfaz_Services;
using CNPE.MODELS.DTOs.request;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CNPE.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _service;

        public AuthController(IAuthService service)
        {
            _service = service;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto request) 
        {
            if (request == null) 
            { 
                return BadRequest(new { message = "Los datos de autenticación no son válidos." });
            }

            string ipAddress = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "127.0.0.1";

            try
            {
                var result = await _service.ProcessAuthenticationAsync(request, ipAddress);

                if (result == null)
                {
                    return BadRequest(new { mensaje = "Usuario o contraseña incorrecta." });
                }

                return Ok(result);

            }
            catch (ValidationException ex) 
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (InvalidOperationException ex) 
            {
                return BadRequest(new { message = ex.Message });
            }catch (Exception ex) 
            {
                return StatusCode(500, new { mensaje = "Ocurrió un inconveniente interno en el servidor.", 
                                              errorReal = ex.Message,
                                              detalle = ex.InnerException?.Message});
            }
        }
    }
}
