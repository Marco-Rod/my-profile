/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Custom responsive breakpoints
    screens: {
      'xs': '320px',    // Extra small devices
      'sm': '640px',    // Mobile landscape
      'md': '768px',    // Tablet
      'lg': '1024px',   // Desktop
      'xl': '1280px',   // Wide desktop
      '2xl': '1536px',  // Ultra wide
      
      // Named breakpoints for better semantics
      'mobile': '640px',
      'tablet': '768px',
      'desktop': '1024px',
      'wide': '1280px',
    },
    extend: {
      colors: {
        // Base colors (dark theme)
        'bg-primary': '#0f172a',      // Almost black (900)
        'bg-secondary': '#1e293b',    // Dark blue-gray
        'bg-tertiary': '#334155',     // Medium blue-gray

        // Accent colors
        'accent-primary': '#3b82f6',  // Blue
        'accent-secondary': '#8b5cf6', // Purple
        'accent-tertiary': '#06b6d4', // Cyan

        // Text colors
        'text-primary': '#f1f5f9',    // Almost white
        'text-secondary': '#cbd5e1',  // Light gray
        'text-tertiary': '#94a3b8',   // Medium gray

        // Status colors
        'success': '#10b981',
        'warning': '#f59e0b',
        'danger': '#ef4444',

        // Border colors
        'border': '#475569',
        'border-light': '#64748b',

        // Dark theme aliases (for component compatibility)
        'dark-bg': '#0f172a',
        'dark-card': '#1e293b',
        'dark-border': '#334155',
        'dark-text': '#f1f5f9',
        'dark-text-secondary': '#cbd5e1',
        'dark-text-tertiary': '#94a3b8',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      },
      // Responsive spacing utilities
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      // Responsive container configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          mobile: '1.5rem',
          tablet: '2rem',
          desktop: '2.5rem',
          wide: '3rem',
        },
      },
      // Responsive grid utilities
      gridTemplateColumns: {
        'auto-fill-xs': 'repeat(auto-fill, minmax(150px, 1fr))',
        'auto-fill-sm': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-md': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fill-lg': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-fit-xs': 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-md': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-lg': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      // Responsive typography
      fontSize: {
        'xs-mobile': ['0.75rem', { lineHeight: '1rem' }],
        'sm-mobile': ['0.875rem', { lineHeight: '1.25rem' }],
        'base-mobile': ['1rem', { lineHeight: '1.5rem' }],
        'lg-mobile': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl-mobile': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl-mobile': ['1.5rem', { lineHeight: '2rem' }],
        '3xl-mobile': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl-mobile': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      // Animation utilities
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      // Z-index utilities
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};
