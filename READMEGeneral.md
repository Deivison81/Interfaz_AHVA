# Módulo de Autenticación y Perfil de Usuario (CEPLAN)

Solución web funcional que integra un backend robusto basado en capas y un frontend modular e interactivo en React.

## 🛠️ Decisiones Técnicas y Arquitectura

### Backend (Capa de Servidor)
- **Clean Architecture:** Separación estricta de responsabilidades en 3 proyectos principales (Web, Application y Persistence) para garantizar mantenibilidad y escalabilidad.
- **Auditoría Automatizada:** Implementación mediante la sobreescritura de `SaveChangesAsync` en Entity Framework Core. El sistema captura e intercepta de forma transparente campos críticos de auditoría (`FechaCreacion`, `CreadoPor`, etc.) sin intervención manual del desarrollador.
- **Seguridad:** Control estricto de intentos fallidos. Al alcanzar el tercer intento erróneo, la cuenta es bloqueada automáticamente en la base de datos por un periodo de 15 minutos (`BloqueadoHasta`).

### Frontend (Capa de Cliente)
- **Stack:** React, TypeScript y Bootstrap.
- **Optimización UX (Client-side Tabs):** La navegación por las pestañas del perfil ("Información básica", "Responsabilidades", "Historial") se gestiona mediante el estado nativo de React. Esto evita recargas innecesarias de página y parpadeos visuales, ofreciendo una experiencia fluida.
- **Control de Inactividad:** Un Custom Hook en TypeScript monitorea constantemente los eventos del DOM (mouse, teclado). Al cumplir 1 minuto de inactividad, despliega un modal reactivo con una cuenta regresiva visible de 49 segundos. Si el contador llega a cero, la sesión se destruye por seguridad.

## 🏃‍♂️ Instrucciones de Ejecución Rápida

1. **Base de Datos:** Ejecutar el script SQL proporcionado para crear las tablas `Usuarios` y `LogsAuditoria`.
2. **Backend:** Abrir la solución en Visual Studio y ejecutar el proyecto Web principal. (Nota: Se incluye Seed Data para inicializar automáticamente al usuario de prueba *July Camila Mendoza Quispe*).
3. **Frontend:**
   ```bash
   cd CNPE_FRONTEND
   npm install
   npm run dev
## TIpo de Documento = 1 DNI 2 CPE
## Usuario: 07079879

##Observaciones en la capeta documentos encontra scrit de sql para cerar las tablas de base detaos y el poyecto backend an el appsenting la configuracion de los datos de base de datos
normalmente estaria en el git ignore este archivo pero para que puedan porbar la aplicacoin lo deje, adiconal tambien coloque CNPE el proyecto .net y en CNPE Froented encontrar todo lo referente al forntend 

## Contraseña: 12345678
