import React, { createContext, useState, ReactNode, useCallback } from 'react';
import type { LanguageContextType } from '../types/portfolio';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * LanguageProvider Component
 * Manages language state and provides translation functions
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<'es' | 'en'>(() => {
    const stored = localStorage.getItem('language');
    return (stored as 'es' | 'en') || 'es';
  });

  const setLanguage = useCallback((lang: 'es' | 'en') => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  }, [i18n]);

  const t = useCallback((key: string, options?: Record<string, unknown>) => {
    return i18n.t(key, options);
  }, [i18n]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
};
