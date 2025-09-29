# Cartilla Frontend

Frontend de autenticación multi-tenant con Azure AD para obras sociales (Medifé y OSDE).

## Descripción

Esta aplicación React permite a los usuarios autenticarse mediante Azure Active Directory utilizando diferentes configuraciones de tenant según la obra social seleccionada. El frontend se comunica con un backend que gestiona el proceso de autenticación OAuth2 y proporciona tokens JWT para mantener la sesión del usuario.

## Características

- Autenticación con Azure AD multi-tenant
- Soporte para múltiples obras sociales (Medifé, OSDE)
- Gestión de sesiones con JWT
- Renovación automática de tokens
- Interfaz simple y responsive

## Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- Backend configurado y ejecutándose

## Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd cartilla-frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Edita el archivo `.env` y configura la URL del backend:
```
VITE_API_URL=http://localhost:3001
```

Para producción, usa la URL del backend desplegado:
```
VITE_API_URL=https://cartilla-backend.onrender.com
```

## Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173`. La aplicación se recargará automáticamente cuando realices cambios.

### Compilación
```bash
npm run build
```
Compila la aplicación para producción en la carpeta `dist`.

### Vista Previa
```bash
npm run preview
```
Sirve la versión compilada de producción localmente para pruebas.

## Estructura del Proyecto

```
cartilla-frontend/
├── src/
│   ├── App.jsx          # Componente principal con lógica de autenticación
│   ├── main.jsx         # Punto de entrada de la aplicación
│   └── index.css        # Estilos globales
├── public/              # Assets estáticos
├── .env.example         # Plantilla de variables de entorno
├── vite.config.js       # Configuración de Vite
├── package.json         # Dependencias y scripts
└── README.md           # Este archivo
```

## Flujo de Autenticación

1. El usuario selecciona su obra social (Medifé u OSDE)
2. Se redirige al endpoint de login del backend con la clave de la obra social
3. El backend redirige a Azure AD para autenticación
4. Tras autenticación exitosa, Azure AD redirige de vuelta al backend
5. El backend genera un JWT y redirige al frontend con el token
6. El frontend almacena el token y obtiene información del usuario

## Configuración de Producción

### Despliegue en Vercel

1. Conecta tu repositorio con Vercel
2. Configura la variable de entorno `VITE_API_URL` en el panel de Vercel
3. El build command es `npm run build` y el output directory es `dist`

### Otros Servicios

La aplicación puede desplegarse en cualquier servicio que soporte aplicaciones estáticas (Netlify, GitHub Pages, etc.).

## Tecnologías Utilizadas

- **React 18** - Framework de UI
- **Vite** - Build tool y servidor de desarrollo
- **React Router DOM** - Navegación (preparado para rutas futuras)

## Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_URL` | URL del backend API | `http://localhost:3001` |

## Desarrollo

### Añadir nuevas obras sociales

Para agregar soporte para una nueva obra social:

1. El backend debe tener configurado el nuevo tenant en Azure AD
2. Agrega un nuevo botón en `App.jsx` con la clave correspondiente:

```jsx
<button onClick={() => handleLogin('nueva_os')}>
  Iniciar sesión con Microsoft (Nueva OS)
</button>
```

### Personalización de estilos

Los estilos se encuentran en `src/index.css`. La aplicación utiliza CSS vanilla para mantener la simplicidad.

## Solución de Problemas

### Error de CORS
Si encuentras errores de CORS, verifica que:
- La URL del backend en `.env` es correcta
- El backend está configurado para aceptar peticiones desde tu dominio frontend

### Token expirado
La aplicación intenta renovar automáticamente los tokens expirados. Si el problema persiste, cierra sesión y vuelve a autenticarte.

### Variables de entorno no funcionan
Asegúrate de:
- Reiniciar el servidor de desarrollo después de cambiar `.env`
- Usar el prefijo `VITE_` para todas las variables de entorno en Vite

## Licencia

[Especifica tu licencia aquí]

## Contacto

[Información de contacto del equipo]