# Folio / Equipo

Plantilla React + TypeScript para un directorio de equipo con landing, acceso y perfil.

## Desarrollo

```sh
npm install
npm run dev
```

Otros comandos disponibles: `npm run build` y `npm run lint`.

## Rutas

- `/`: landing y directorio del equipo.
- `/login`: formulario de acceso de demostración.
- `/perfil/:username`: perfil protegido; redirige a `/login` sin sesión y compara el username de la URL con la sesión.
- `/perfil`: ruta compatible que redirige al perfil del usuario autenticado.

El login solicita nombre, username y correo. La sesión es local y vive en memoria: `AuthProvider` y `useAuth` son el punto de integración para conectar un proveedor o API real. No se validan credenciales ni se persisten sesiones.

`ProfilePage` conserva la tarjeta de Javier y agrega la tarjeta del proyecto del Laboratorio 1 de Fabián, que solo se muestra en `/perfil/fabian`. Cada tarjeta mantiene su propio contador de likes. El perfil de Fabián guarda su última visita en `localStorage` con la clave `perfil:<username>:ultimaVisita`; el componente de Javier conserva su clave existente.

Las vistas se encuentran en `src/pages/`; el router y el guard de perfil, en `src/App.tsx`.
