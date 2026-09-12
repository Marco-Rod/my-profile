# GitHub Actions Workflows

Este directorio contiene los workflows de GitHub Actions para el proyecto.

## Deploy to GitHub Pages

El workflow `deploy.yml` se ejecuta automáticamente cuando se hace push a la rama `main` y despliega el sitio en GitHub Pages.

### Configuración Requerida

Para activar GitHub Pages en tu repositorio:

1. Ve a **Settings** > **Pages** en tu repositorio de GitHub
2. En **Source**, selecciona **GitHub Actions**
3. El workflow se ejecutará automáticamente en el siguiente push a `main`
4. Una vez completado, el sitio estará disponible en: `https://<tu-usuario>.github.io/my-profile/`

### Ejecución Manual

También puedes ejecutar el workflow manualmente:

1. Ve a la pestaña **Actions** en tu repositorio
2. Selecciona el workflow **Deploy to GitHub Pages**
3. Haz clic en **Run workflow**

### ¿Qué hace el workflow?

1. **Build job**: 
   - Clona el repositorio
   - Instala Node.js 20
   - Instala dependencias con `npm ci`
   - Construye el proyecto con `npm run build`
   - Sube el directorio `dist/` como artefacto

2. **Deploy job**:
   - Despliega el artefacto a GitHub Pages
   - Configura el entorno de GitHub Pages

### Permisos

El workflow tiene los siguientes permisos configurados:
- `contents: read` - Para leer el código del repositorio
- `pages: write` - Para escribir en GitHub Pages
- `id-token: write` - Para autenticación con GitHub Pages

### Troubleshooting

Si el deployment falla:

1. Verifica que GitHub Pages esté habilitado en la configuración del repositorio
2. Asegúrate de que la rama `main` existe y tiene los cambios más recientes
3. Revisa los logs del workflow en la pestaña **Actions**
4. Verifica que el build local funcione correctamente: `npm run build`
