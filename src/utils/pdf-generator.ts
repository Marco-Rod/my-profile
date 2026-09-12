/**
 * PDF Generator Utilities
 * Functions for handling CV download functionality
 */

/**
 * Downloads the CV file for the specified language
 * 
 * @param {('es' | 'en')} language - The language of the CV to download
 * 
 * @example
 * ```tsx
 * <button onClick={() => downloadCV('en')}>
 *   Download CV
 * </button>
 * ```
 */
export const downloadCV = (language: 'es' | 'en'): void => {
  const filenames = {
    es: 'MarcoCV2026_ES.pdf',
    en: 'MarcoCV2026.pdf',
  } as const;

  // Create temporary anchor element
  const link = document.createElement('a');
  
  // Set the href to the CV file path
  link.href = `${import.meta.env.BASE_URL}${filenames[language]}`;
  
  // Set download attribute with filename
  link.download = filenames[language];
  
  // Append to body (required for Firefox)
  document.body.appendChild(link);
  
  // Trigger download
  link.click();
  
  // Cleanup: remove the link from the DOM
  document.body.removeChild(link);
};

/**
 * Opens the CV file in a new browser tab for the specified language
 * 
 * @param {('es' | 'en')} language - The language of the CV to open
 * 
 * @example
 * ```tsx
 * <button onClick={() => openCV('es')}>
 *   View CV
 * </button>
 * ```
 */
export const openCV = (language: 'es' | 'en'): void => {
  const filenames = {
    es: 'MarcoCV2026_ES.pdf',
    en: 'MarcoCV2026.pdf',
  } as const;
  const cvPath = `${import.meta.env.BASE_URL}${filenames[language]}`;
  window.open(cvPath, '_blank', 'noopener,noreferrer');
};
