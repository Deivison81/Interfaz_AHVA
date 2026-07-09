USE [CNPE_BD];
GO

-- Limpiar si existía antes para evitar conflictos
DELETE FROM [Usuarios] WHERE [NumeroDocumento] = '07079879';

INSERT INTO [Usuarios] (
    [NumeroDocumento], [TipoDocumento], [PasswordHash], [IntentosFallidos], [BloqueadoHasta], [EsActivo],
    [Nombres], [PrimerApellido], [SegundoApellido], [Cargo], [Entidad], [FechaNacimiento], 
    [Nacionalidad], [Sexo], [CorreoPrincipal], [CorreoSecundario], [TelefonoMovil], 
    [TelefonoSecundarioTipo], [TelefonoSecundario], [TipoContratacion], [FechaContratacion], 
    [CreadoPor], [FechaCreacion] -- Campos de auditoría incluidos
) VALUES (
    '07079879', -- NumeroDocumento (Usuario en Figma)
    'DNI',      -- TipoDocumento
    '12345678', -- PasswordHash (Contraseña de prueba)
    0,          -- IntentosFallidos
    NULL,       -- BloqueadoHasta
    1,          -- EsActivo (true)
    'July Camila', 
    'Mendoza', 
    'Quispe', 
    'Administrador de Recursos', 
    '011 Ministerio de Salud', 
    '1944-04-01', -- FechaNacimiento
    'Peruana', 
    'Femenino', 
    'test@minsa.gob.pe', 
    NULL, 
    '+51 999 999 999', 
    NULL, 
    NULL, 
    'CAS', 
    '2015-03-09', -- FechaContratacion
    'Sistema/SeedManual', -- CreadoPor (Soluciona el error 515)
    GETDATE()     -- FechaCreacion
);
GO