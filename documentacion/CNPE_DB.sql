-- Crear la base de datos (puedes llamarla CNPE_DB o usar una existente)
CREATE DATABASE CNPE_DB;
GO

USE CNPE_DB;
GO

-- 1. Tabla de Usuarios e Información de Perfil
CREATE TABLE Usuarios (
    UsuarioId INT IDENTITY(1,1) PRIMARY KEY,
    -- Credenciales y Seguridad
    NumeroDocumento VARCHAR(12) UNIQUE NOT NULL,
    TipoDocumento VARCHAR(3) NOT NULL, -- 'DNI', 'CE'
    PasswordHash VARCHAR(255) NOT NULL,
    IntentosFallidos INT DEFAULT 0,
    BloqueadoHasta DATETIME NULL,
    EsActivo BIT DEFAULT 1,

    -- Información de Perfil (Campos requeridos para Figma)
    Nombres VARCHAR(100) NOT NULL,
    PrimerApellido VARCHAR(100) NOT NULL,
    SegundoApellido VARCHAR(100) NOT NULL,
    Cargo VARCHAR(100) NOT NULL, -- 'Administrador de Recursos'
    Entidad VARCHAR(150) NOT NULL, -- '011 Ministerio de Salud'
    FechaNacimiento DATE NOT NULL,
    Nacionalidad VARCHAR(50) NOT NULL,
    Sexo VARCHAR(20) NOT NULL,
    CorreoPrincipal VARCHAR(150) NOT NULL,
    CorreoSecundario VARCHAR(150) NULL,
    TelefonoMovil VARCHAR(20) NOT NULL,
    TelefonoSecundarioTipo VARCHAR(20) NULL,
    TelefonoSecundario VARCHAR(20) NULL,
    TipoContratacion VARCHAR(50) NOT NULL, -- 'CAS'
    FechaContratacion DATE NOT NULL,
    
    -- Campos de Auditoría Base
    CreadoPor VARCHAR(100) NOT NULL,
    FechaCreacion DATETIME NOT NULL DEFAULT GETDATE(),
    ModificadoPor VARCHAR(100) NULL,
    FechaModificacion DATETIME NULL
);
GO

-- 2. Tabla de Auditoría Estricta (Logs de Accesos y Cambios Históricos)
CREATE TABLE LogsAuditoria (
    LogId BIGINT IDENTITY(1,1) PRIMARY KEY,
    UsuarioId INT NULL, -- ID del usuario que ejecuta la acción
    Accion VARCHAR(100) NOT NULL, -- 'LOGIN_EXITOSO', 'LOGIN_FALLIDO', 'BLOQUEO_CUENTA'
    Detalle VARCHAR(MAX) NOT NULL, -- Detalles descriptivos o formato JSON
    DireccionIP VARCHAR(45) NOT NULL,
    FechaRegistro DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (UsuarioId) REFERENCES Usuarios(UsuarioId)
);
GO