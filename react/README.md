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
- `/perfil`: plantilla protegida; redirige a `/login` sin sesión.

La sesión es local y vive en memoria. `AuthProvider` y `useAuth` son el punto de integración para conectar un proveedor o API de autenticación real. No se validan credenciales ni se persisten sesiones.

Las vistas se encuentran en `src/pages/`; el router y el guard de perfil, en `src/App.tsx`.
