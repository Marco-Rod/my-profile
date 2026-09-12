/**
 * i18n Configuration
 * Defines language settings and supported locales
 */

export const i18nConfig = {
  defaultLanguage: 'es' as const,
  languages: ['es', 'en'] as const,
  fallbackLanguage: 'es' as const,
  resources: {
    es: {
      translation: {},
    },
    en: {
      translation: {},
    },
  },
};

export type Language = (typeof i18nConfig.languages)[number];
