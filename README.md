# CV Portfolio Bilingüe Profesional

Portafolio profesional interactivo para **Marco Antonio Rodríguez Torres** construido con **React 19 + TypeScript + Vite + Tailwind CSS**.

## 🚀 Features

- ✅ **Interfaz bilingüe** (Español/Inglés) con persistencia en localStorage
- ✅ **Tema oscuro profesional** con design system completo en Tailwind
- ✅ **Diseño responsive mobile-first** con breakpoints semánticos (xs → 2xl)
- ✅ **Animaciones suaves** con Framer Motion (scroll reveal, stagger, viewport once)
- ✅ **Descarga de CV en PDF** generado dinámicamente (html2pdf.js)
- ✅ **Componentes reutilizables** y composables (Button, Card, Badge, TechIcon, Timeline)
- ✅ **TypeScript strict mode** con tipado exhaustivo en `/src/types`
- ✅ **Testing framework integrado**: Vitest (unit + snapshot) + Playwright (e2e)
- ✅ **Lazy loading de secciones** pesadas con React.Suspense + code splitting
- ✅ **Filtro interactivo** de tecnologías por categoría (backend, frontend, database, tools, infrastructure)
- ✅ **CI/CD automatizado** con GitHub Actions → GitHub Pages + Vercel ready

## 📦 Stack Tecnológico

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend Framework** | React 19.3.0 + TypeScript 7.0.2 |
| **Build Tool** | Vite 8.3.0 + @vitejs/plugin-react |
| **Styling** | Tailwind CSS 3.4.19 + PostCSS + Autoprefixer |
| **Animations** | Framer Motion 13.2.0 |
| **Internacionalización** | i18next 26.4.2 + react-i18next 17.0.13 |
| **Iconos** | React Icons 5.7.0 |
| **Utilidades** | classnames 2.5.1 |
| **PDF Generation** | html2pdf 0.0.11 |
| **Testing Unitario** | Vitest 5.0.0 + @testing-library/react + jsdom |
| **Testing E2E** | Playwright 1.63.0 |
| **Linting** | ESLint (configurado en scripts) |
| **Minificación** | Terser (drop_console, drop_debugger) |
| **Deploy** | GitHub Actions + Vercel |

## 🛠️ Setup Local

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (puerto 5173, auto-open)
npm run dev

# Build para producción (type-check + vite build + terser)
npm run build

# Preview del build de producción
npm run preview

# Verificar tipos TypeScript (sin emitir)
npm run type-check

# Ejecutar tests unitarios + snapshots
npm run test

# Ejecutar tests con UI visual
npm run test:ui

# Ejecutar tests e2e (Playwright)
npm run test:e2e

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React organizados por responsabilidad
│   ├── common/         # Componentes base reutilizables
│   │   ├── Badge.tsx           # Etiquetas con variantes (primary/secondary/default)
│   │   ├── Button.tsx          # Botones con variantes y estados
│   │   ├── Card.tsx            # Contenedor con hover effects
│   │   ├── LoadingSpinner.tsx  # Spinner animado
│   │   ├── SectionTitle.tsx    # Título de sección numerado + subtitle
│   │   ├── TechIcon.tsx        # Icono de tecnología + badge de proficiency
│   │   └── Timeline.tsx        # Línea de tiempo vertical para experiencia
│   ├── layout/         # Componentes de layout global
│   │   ├── Header.tsx          # Header fijo con logo + navigation
│   │   ├── Footer.tsx          # Footer con links sociales + copyright
│   │   ├── Navigation.tsx      # Nav responsive (desktop + mobile drawer)
│   │   ├── LanguageSelector.tsx# Selector ES/EN con flags
│   │   └── ScrollToTop.tsx     # Botón scroll-to-top con IntersectionObserver
│   └── sections/       # Secciones principales del portfolio
│       ├── HeroSection.tsx     # Hero con nombre, rol, CTA, animaciones
│       ├── AboutSection.tsx    # About me + skills highlights
│       ├── TechnologiesSection.tsx # Grid filtrable de 42 tecnologías
│       ├── ExperienceTimeline.tsx  # Timeline de 8 experiencias laborales
│       ├── ProjectsSection.tsx   # Grid de proyectos con links
│       ├── EducationSection.tsx  # Educación + certificaciones
│       └── ContactSection.tsx    # Formulario + info contacto + PDF download
├── contexts/
│   └── LanguageContext.tsx     # Context API: language state + i18n bridge
├── data/               # Datos estáticos tipados (single source of truth)
│   ├── contact.ts            # Email, GitHub, LinkedIn, location
│   ├── education.ts          # 4 entradas: grado, institución, año, descripción
│   ├── experience.ts         # 8 experiencias: company, role, dates, tech[], summary
│   ├── projects.ts           # Proyectos: name, description, tech[], links
│   └── technologies.ts       # 42 tecnologías: id, name, category, icon, proficiency, years
├── hooks/              # Custom React hooks
│   ├── useIntersectionObserver.ts  # Hook para scroll reveal animations
│   ├── useLanguage.ts            # Wrapper tipado para useTranslation
│   └── useScrollPosition.ts      # Hook para scroll position + direction
├── i18n/               # Configuración de internacionalización
│   ├── locales/
│   │   ├── en.json             # 200+ keys: nav, sections, common, meta
│   │   └── es.json             # 200+ keys: nav, sections, common, meta
│   ├── config.ts               # Config: defaultLang, fallback, namespaces
│   └── i18n.ts                 # Inicialización i18next + resources
├── styles/
│   └── globals.css         # Tailwind directives + CSS variables + utilities
├── types/              # Definiciones TypeScript centralizadas
│   ├── components.ts         # Props interfaces para componentes comunes
│   ├── context.ts            # LanguageContextType
│   ├── portfolio.ts          # Experience, Technology, Project, Education, Contact
│   └── timeline.ts           # TimelineItem, TimelineProps
├── utils/              # Funciones auxiliares puras
│   ├── constants.ts          # Rutas, breakpoints, config constants
│   ├── helpers.ts            # formatDate, classNames, scroll utils, etc.
│   └── pdf-generator.ts      # Generación PDF del CV (html2pdf)
├── App.tsx               # Root component: providers + lazy-loaded sections
├── main.tsx              # Entry point: LanguageProvider + StrictMode + globals.css
└── vite-env.d.ts         # Vite type declarations
```

## 🌍 Idiomas Soportados

| Código | Idioma | Estado |
|--------|--------|--------|
| `es` | Español | **Default** |
| `en` | Inglés | Completo |

- Detección automática: `localStorage` → `navigator.language`
- Persistencia en `localStorage` (key: `language`)
- 200+ claves de traducción por idioma (nav, sections, common, meta, technologies)

## 🎨 Tema de Colores (Dark Theme)

```css
/* Backgrounds */
--bg-primary:   #0f172a  /* Almost black (slate-900) */
--bg-secondary: #1e293b  /* Dark blue-gray (slate-800) */
--bg-tertiary:  #334155  /* Medium blue-gray (slate-700) */

/* Accents */
--accent-primary:   #3b82f6  /* Blue-500 */
--accent-secondary: #8b5cf6  /* Violet-500 */
--accent-tertiary:  #06b6d4  /* Cyan-500 */

/* Text */
--text-primary:   #f1f5f9  /* Slate-100 */
--text-secondary: #cbd5e1  /* Slate-300 */
--text-tertiary:  #94a3b8  /* Slate-400 */

/* Borders */
--border:       #475569  /* Slate-600 */
--border-light: #64748b  /* Slate-500 */

/* Status */
--success: #10b981  /* Emerald-500 */
--warning: #f59e0b  /* Amber-500 */
--danger:  #ef4444  /* Red-500 */
```

**Tipografías:** Inter (sans), Fira Code (mono)
**Breakpoints:** xs(320), sm(640), md(768), lg(1024), xl(1280), 2xl(1536) + semánticos (mobile, tablet, desktop, wide)

## ⚙️ Configuraciones Clave

### TypeScript (`tsconfig.json`)
```json
{
  "strict": true,
  "target": "ES2020",
  "module": "ESNext",
  "moduleResolution": "bundler",
  "jsx": "react-jsx",
  "paths": {
    "@components/*": ["./src/components/*"],
    "@hooks/*": ["./src/hooks/*"],
    "@utils/*": ["./src/utils/*"],
    "@types/*": ["./src/types/*"],
    "@data/*": ["./src/data/*"],
    "@i18n/*": ["./src/i18n/*"],
    "@contexts/*": ["./src/contexts/*"],
    "@styles/*": ["./src/styles/*"],
    "@assets/*": ["./src/assets/*"]
  }
}
```

### Vite (`vite.config.ts`)
- **Plugins:** `@vitejs/plugin-react`
- **Build:** manualChunks (vendor, icons, i18n), terser minification
- **Optimizaciones:** drop_console, drop_debugger, cssCodeSplit, assetsInlineLimit: 4kb
- **Dev Server:** puerto 5173, auto-open en desarrollo

### Tailwind (`tailwind.config.js`)
- Content: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- Theme extendido: colors, spacing, container, grid, fontSize, transitions, zIndex
- Plugins: ninguno (utilidades nativas)

## 🧩 Patrones de Código

| Patrón | Implementación |
|--------|----------------|
| **Lazy Loading** | `React.lazy()` + `Suspense` en `App.tsx` para 5 secciones |
| **Context API** | `LanguageProvider` en `main.tsx` → `useLanguageContext()` hook |
| **Custom Hooks** | Separación de lógica: `useIntersectionObserver`, `useScrollPosition` |
| **Data-Driven UI** | `/data` tipado → consumido por secciones (single source of truth) |
| **Component Composition** | Common components reutilizados across sections |
| **TypeScript Strict** | Interfaces centrales en `/types` + strict mode |
| **Testing** | Unit + snapshot tests per component (`__snapshots__/`) |
| **Responsive** | Mobile-first, breakpoints semánticos, container queries |

## 📦 Datos del CV (Tipados en `src/types/portfolio.ts`)

- **Experiencia:** 8 entradas (2015-2026) con company, role, dates, description, technologies[], location, summary
- **Tecnologías:** 42 items categorizados:
  - **Backend:** Python, Django, FastAPI, Flask, Node.js, PHP, Laravel
  - **Frontend:** React, Vue.js, Angular
  - **Database:** PostgreSQL, MySQL, Oracle, MongoDB
  - **Infrastructure:** AWS, GCP
  - **Tools:** Docker, Git, CI/CD, Kafka, Celery, OAuth, JWT
- **Proyectos:** 6+ proyectos con tech stack, descripción, links
- **Educación:** 4 entradas (grado, institución, año, descripción)
- **Contacto:** Email, GitHub, LinkedIn, ubicación

## 🚀 Deployment

### GitHub Pages (Automático via GitHub Actions)
```yaml
# .github/workflows/deploy.yml
# Trigger: push to main
# Jobs: build (ubuntu-latest, node 20) → deploy to github-pages environment
```
```bash
npm run build  # Genera ./dist
git push origin main  # GitHub Actions hace el resto
```

### Vercel (Configurado)
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```
```bash
vercel  # Deploy directo
```

## 📝 Notas de Desarrollo

- **Path aliases** configurados en `vite.config.ts` y `tsconfig.json` (`@components`, `@hooks`, etc.)
- **Estilos globales** importados en `main.tsx` (`./styles/globals.css`)
- **i18n** se inicializa automáticamente en `main.tsx` (import side-effect)
- **Traducciones** en `src/i18n/locales/{es,en}.json` (200+ keys cada una)
- **Lazy loading** reduce bundle inicial ~60% (vendor/icons/i18n chunks separados)
- **Terser** elimina console.log/debug en producción
- **Testing:** `npm run test` (Vitest + jsdom), `npm run test:e2e` (Playwright)

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| Puerto 5173 en uso | Vite usa automáticamente 5174, 5175, etc. |
| Errores TypeScript | `npm run type-check` para diagnosticar |
| CSS no carga | Verificar import `./styles/globals.css` en `main.tsx` |
| Tests fallan | `npm run test:ui` para debug visual |
| i18n no cambia | Verificar `localStorage.language` + recargar |
| Build lento | Verificar chunk splitting en `vite.config.ts` |

## 📋 Estado del Proyecto

| Fase | Estado | Detalles |
|------|--------|----------|
| **Wave 0: Config Base** | ✅ Completa | Vite + React + TS + Tailwind + i18n + Testing |
| **Wave 1: Types & Data** | ✅ Completa | Types portfolio + 42 tecnologías + 8 experiencias |
| **Wave 2: Common Components** | ✅ Completa | Button, Card, Badge, TechIcon, Timeline, LoadingSpinner |
| **Wave 3: Layout Components** | ✅ Completa | Header, Footer, Navigation, LanguageSelector, ScrollToTop |
| **Wave 4: Sections** | ✅ Completa | Hero, About, Technologies, Experience, Projects, Education, Contact |
| **Wave 5: Polish & Deploy** | 🔄 En progreso | PDF generation, animations, CI/CD, optimizations |

## 📞 Contacto

- **Email:** mrc5622@gmail.com
- **GitHub:** https://github.com/Marco-Rod
- **LinkedIn:** https://www.linkedin.com/in/marco-antonio-rodriguez-torres-10a61242/

---

**Construido con ❤️ usando React 19 + Vite 8 + Tailwind CSS 3 + TypeScript 7**