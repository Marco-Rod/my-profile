/**
 * Helper Utility Functions
 * General-purpose utility functions for common operations
 */

/**
 * Formats a date string according to the specified language
 * 
 * @param {string} dateString - The date string to format (ISO format or parseable date)
 * @param {string} language - The language code ('es' or 'en')
 * @returns {string} Formatted date string
 * 
 * @example
 * ```ts
 * formatDate('2023-01-15', 'en') // 'January 2023'
 * formatDate('2023-01-15', 'es') // 'Enero 2023'
 * ```
 */
export const formatDate = (dateString: string, language: string): string => {
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    return dateString;
  }
  
  const locale = language === 'es' ? 'es-ES' : 'en-US';
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
  }).format(date);
};

/**
 * Smoothly scrolls to an element by its ID
 * 
 * @param {string} elementId - The ID of the element to scroll to (without '#')
 * @param {number} offset - Offset in pixels from the top (default: 80 for header)
 * 
 * @example
 * ```ts
 * scrollToElement('about') // Scrolls to element with id="about"
 * scrollToElement('contact', 100) // Scrolls with 100px offset
 * ```
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

/**
 * Calculates the duration between two dates in a human-readable format
 * 
 * @param {string} start - Start date string (ISO format or parseable date)
 * @param {string | null} end - End date string or null for "Present"
 * @returns {string} Duration string (e.g., "2 años 3 meses")
 * 
 * @example
 * ```ts
 * calculateDuration('2021-01-01', '2023-06-01') // '2 años 5 meses'
 * calculateDuration('2022-01-01', null) // 'Calculated duration to present'
 * ```
 */
export const calculateDuration = (
  start: string,
  end: string | null
): string => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return '';
  }
  
  const months = 
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  return `${years} años ${remainingMonths} meses`;
};

/**
 * Calculates experience duration in Spanish format
 * 
 * @param {string} startDate - Start date (YYYY-MM format)
 * @param {string | null} endDate - End date or null for present
 * @returns {string} Duration in Spanish (e.g., "2 años 3 meses")
 */
export const calculateExperienceDuration = (
  startDate: string,
  endDate: string | null
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1;
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years === 0) {
    return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  }
  
  if (months === 0) {
    return `${years} ${years === 1 ? 'año' : 'años'}`;
  }
  
  return `${years} ${years === 1 ? 'año' : 'años'} ${months} ${months === 1 ? 'mes' : 'meses'}`;
};

/**
 * Calculates experience duration in English format
 * 
 * @param {string} startDate - Start date (YYYY-MM format)
 * @param {string | null} endDate - End date or null for present
 * @returns {string} Duration in English (e.g., "2 years 3 months")
 */
export const calculateExperienceDurationEn = (
  startDate: string,
  endDate: string | null
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1;
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years === 0) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  
  if (months === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  
  return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`;
};

/**
 * Gets the appropriate duration label based on language
 * 
 * @param {string} startDate - Start date
 * @param {string | null} endDate - End date or null
 * @param {string} language - Language code ('es' or 'en')
 * @returns {string} Localized duration string
 */
export const getExperienceDurationLabel = (
  startDate: string,
  endDate: string | null,
  language: string
): string => {
  return language === 'es'
    ? calculateExperienceDuration(startDate, endDate)
    : calculateExperienceDurationEn(startDate, endDate);
};

/**
 * Merges multiple class names, filtering out falsy values
 * 
 * @param {...(string | boolean | undefined | null)[]} classes - Class names to merge
 * @returns {string} Merged class name string
 * 
 * @example
 * ```ts
 * classNameMerge('base', isActive && 'active', 'text-white')
 * // 'base active text-white' (if isActive is true)
 * ```
 */
export const classNameMerge = (
  ...classes: (string | boolean | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object)
 * 
 * @param {unknown} value - Value to check
 * @returns {boolean} True if value is empty
 * 
 * @example
 * ```ts
 * isEmpty('') // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(null) // true
 * isEmpty('text') // false
 * ```
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

/**
 * Creates a debounced function that delays execution until after a wait period
 * 
 * @param {Function} func - Function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} Debounced function
 * 
 * @example
 * ```ts
 * const debouncedSearch = debounce((term) => search(term), 300);
 * debouncedSearch('query'); // Only executes after 300ms of inactivity
 * ```
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Creates a throttled function that executes at most once per time period
 * 
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 * 
 * @example
 * ```ts
 * const throttledScroll = throttle(() => handleScroll(), 100);
 * window.addEventListener('scroll', throttledScroll);
 * ```
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Truncates text to a maximum length and adds ellipsis
 * 
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text with ellipsis if needed
 * 
 * @example
 * ```ts
 * truncateText('This is a long text', 10) // 'This is a...'
 * truncateText('Short', 10) // 'Short'
 * ```
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};
