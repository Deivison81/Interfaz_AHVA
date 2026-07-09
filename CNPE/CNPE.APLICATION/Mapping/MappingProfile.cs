using AutoMapper;
using CNPE.MODELS.DTOs.request;
using CNPE.MODELS.DTOs.response;
using CNPE.MODELS.Models;


namespace CNPE.APLICATION.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //consultas pefil
            CreateMap<Usuario, UserPerfillDto>();

            //login
            CreateMap<LoginRequestDto, Usuario>();
        }
    }
}
