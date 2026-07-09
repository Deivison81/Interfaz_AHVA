using AutoMapper;
using CNPE.APLICATION.Interfaz_Services;
using CNPE.APLICATION.Mapping;
using CNPE.APLICATION.Services;
using CNPE.APLICATION.Validation;
using CNPE.MODELS.Models;
using CNPE.PERSITENCE.Dbcontext;
using CNPE.PERSITENCE.Implents;
using CNPE.PERSITENCE.Interfaz;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Injection de dependencias
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IAuthRepository, AuthRepository>(); 
builder.Services.AddScoped<IAuthService, AuthService>();

//fluent validation
 builder.Services.AddValidatorsFromAssemblyContaining<LoginRequestValidator>();

// automapper - register profiles from application assembly
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

//Conexion a la Base de datos
builder.Services.AddDbContext<CnpeBdContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CadenaSQL"))
);

builder.Services.AddCors(options => {
    options.AddPolicy("PermiteReact", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
          .AllowAnyHeader()
          .AllowAnyMethod()
          .AllowCredentials();
     });
    

});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("PermiteReact");

app.UseAuthorization();

app.MapControllers();

app.Run();
