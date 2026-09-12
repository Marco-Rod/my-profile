import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { LanguageContextType } from '../types/portfolio';

/**
 * useLanguage Hook
 * Custom hook to access the language context
 * 
 * @returns {LanguageContextType} The language context containing:
 *   - language: Current selected language ('es' | 'en')
 *   - setLanguage: Function to change the language
 *   - t: Translation function
 * 
 * @throws {Error} If used outside of LanguageProvider
 * 
 * @example
 * ```tsx
 * const { language, setLanguage, t } = useLanguage();
 * 
 * // Get current language
 * console.log(language); // 'es' or 'en'
 * 
 * // Change language
 * setLanguage('en');
 * 
 * // Translate a key
 * const title = t('hero.title');
 * ```
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
