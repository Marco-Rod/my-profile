/**
 * Application Constants
 * Centralized configuration and constant values
 */

/**
 * Navigation section identifiers and labels
 */
export const NAVIGATION_SECTIONS = [
  { id: 'home', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'technologies', label: 'nav.technologies' },
  { id: 'education', label: 'nav.education' },
  { id: 'contact', label: 'nav.contact' },
] as const;

/**
 * Color palette for the application
 */
export const COLORS = {
  primary: '#3b82f6', // blue-500
  secondary: '#8b5cf6', // violet-500
  accent: '#06b6d4', // cyan-500
  bg: {
    dark: '#0f172a', // slate-900
    light: '#ffffff',
    card: '#1e293b', // slate-800
  },
  text: {
    primary: '#f8fafc', // slate-50
    secondary: '#cbd5e1', // slate-300
    muted: '#64748b', // slate-500
  },
  border: '#334155', // slate-700
  success: '#10b981', // green-500
  warning: '#f59e0b', // amber-500
  error: '#ef4444', // red-500
} as const;

/**
 * Responsive breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  mobile: 640, // sm
  tablet: 768, // md
  desktop: 1024, // lg
  wide: 1280, // xl
  ultrawide: 1536, // 2xl
} as const;

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

/**
 * Easing functions for animations
 */
export const EASING = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

/**
 * Framer Motion animation variants
 */
export const ANIMATION_VARIANTS = {
  // Fade in
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
  
  // Slide up
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  
  // Slide in from left
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  
  // Slide in from right
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  
  // Scale in
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  },
  
  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
} as const;

/**
 * Viewport configuration for scroll animations
 */
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.3,
} as const;

/**
 * Z-index layers for consistent stacking
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;

/**
 * Scroll behavior configuration
 */
export const SCROLL_CONFIG = {
  offset: 80, // Header height offset for scroll-to-section
  smooth: true,
  behavior: 'smooth' as ScrollBehavior,
} as const;

/**
 * Intersection Observer default configuration
 */
export const INTERSECTION_OBSERVER_CONFIG = {
  threshold: 0.1,
  rootMargin: '0px 0px -10% 0px',
} as const;

/**
 * API endpoints (if needed for future features)
 */
export const API_ENDPOINTS = {
  contact: '/api/contact',
  analytics: '/api/analytics',
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  github: 'https://github.com/Marco-Rod',
  linkedin: 'https://www.linkedin.com/in/marco-antonio-rodriguez-torres-10a61242/',
  twitter: 'https://twitter.com',
  email: 'mailto:mrc5622@gmail.com',
} as const;

/**
 * Feature flags
 */
export const FEATURES = {
  darkMode: true,
  analytics: false,
  contactForm: true,
  downloadCV: true,
  animations: true,
} as const;
