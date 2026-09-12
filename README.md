# CV Portfolio Bilingüe Profesional

Portafolio profesional interactivo para Marco Antonio Rodríguez Torres construido con **React 18 + TypeScript + Vite + Tailwind CSS**.

## 🚀 Features

- ✅ Interfaz bilingüe (Español/Inglés)
- ✅ Tema oscuro profesional
- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves con Framer Motion
- ✅ Descarga de CV en PDF
- ✅ Componentes reutilizables
- ✅ TypeScript strict mode
- ✅ Testing framework integrado (Vitest + Playwright)

## 📦 Stack Tecnológico

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **i18n**: react-i18next
- **Testing**: Vitest, Playwright
- **PDF Generation**: html2pdf

## 🛠️ Setup Local

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Verificar tipos TypeScript
npm run type-check

# Ejecutar tests
npm run test

# Ejecutar e2e tests
npm run test:e2e
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── layout/         # Header, Footer, Navigation
│   ├── sections/       # Hero, About, Experience, etc.
│   └── common/         # Button, Card, Badge, etc.
├── data/               # Datos estáticos (CV info, projects, etc.)
├── i18n/               # Configuración de idiomas
│   └── locales/        # JSON de traducciones (ES, EN)
├── hooks/              # Custom React hooks
├── utils/              # Funciones auxiliares
├── types/              # Definiciones de TypeScript
├── contexts/           # React contexts (Language)
├── styles/             # CSS global y configuración
└── assets/             # Imágenes, iconos, CVs en PDF
```

## 🌍 Idiomas Soportados

- **Español** (es) - Idioma por defecto
- **Inglés** (en)

El idioma se persiste en localStorage.

## 🎨 Tema de Colores

El proyecto usa una paleta profesional de tema oscuro:

- **Primary Background**: #0f172a (Almost black)
- **Secondary Background**: #1e293b (Dark blue-gray)
- **Accent Primary**: #3b82f6 (Blue)
- **Accent Secondary**: #8b5cf6 (Purple)
- **Text Primary**: #f1f5f9 (Almost white)

## 📋 Status de Tareas

### Wave 0: Configuración Base ✅
- [x] 1.1 Crear proyecto Vite + React + TypeScript
- [x] 1.2 Configurar dependencias
- [x] 1.3 Configurar Tailwind CSS
- [x] 1.4 Configurar TypeScript
- [x] 1.5 Crear estructura de directorios
- [x] 2.1 Crear definiciones de tipos

### Wave 1-15: Desarrollo
- [ ] Próximas fases: Datos, Componentes, Secciones, Testing, Deploy

## 🚀 Deployment

El proyecto está configurado para deployar en:

- **GitHub Pages**: Base path configurado en vite.config.ts
- **Vercel**: vercel.json configurado

```bash
# Deploy a GitHub Pages
npm run build
# Luego hacer push a git (GitHub Actions maneja el deployment)

# Deploy a Vercel
vercel
```

## 📝 Notas de Desarrollo

- Todos los imports de módulos TypeScript usan rutas relativas para compatibilidad
- Path aliases (@components, @hooks, etc.) están configurados en vite.config.ts y tsconfig.json
- Los estilos globales se importan en main.tsx
- El contexto de idioma se inicializa automáticamente en App.tsx
- Las traducciones se cargan desde src/i18n/locales/

## 🐛 Troubleshooting

### Puerto 5173 en uso
El servidor de Vite automáticamente usa el próximo puerto disponible (5174, 5175, etc.)

### Errores de TypeScript
Ejecutar: `npm run type-check` para verificar tipos

### CSS no se carga
Asegurar que `src/styles/globals.css` está importado en `src/main.tsx`

## 📞 Contacto

- Email: mrc5622@gmail.com
- GitHub: https://github.com/Marco-Rod
- LinkedIn: https://www.linkedin.com/in/marco-antonio-rodriguez-torres-10a61242/

---

**Construido con ❤️ usando React + Vite + Tailwind CSS**
