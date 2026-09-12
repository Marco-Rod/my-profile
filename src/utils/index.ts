/**
 * Utils Export Barrel
 * Exports all utility functions and constants
 */

// PDF utilities
export { downloadCV, openCV } from './pdf-generator';

// Constants
export {
  NAVIGATION_SECTIONS,
  COLORS,
  BREAKPOINTS,
  ANIMATION_DURATIONS,
  EASING,
  Z_INDEX,
  SCROLL_CONFIG,
  INTERSECTION_OBSERVER_CONFIG,
  API_ENDPOINTS,
  SOCIAL_LINKS,
  FEATURES,
} from './constants';

// Helper functions
export {
  formatDate,
  classNameMerge,
  calculateExperienceDuration,
  calculateExperienceDurationEn,
  getExperienceDurationLabel,
  scrollToElement,
  isEmpty,
  debounce,
  throttle,
  truncateText,
} from './helpers';
