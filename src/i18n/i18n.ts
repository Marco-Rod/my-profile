import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';
import { i18nConfig } from './config';

/**
 * i18n Configuration and Initialization
 * Sets up i18next with Spanish and English translations
 */

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: localStorage.getItem('language') || i18nConfig.defaultLanguage,
    fallbackLng: i18nConfig.fallbackLanguage,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
