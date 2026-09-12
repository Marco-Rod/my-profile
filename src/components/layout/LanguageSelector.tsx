import React from 'react';
import { useLanguageContext } from '../../contexts/LanguageContext';
import classnames from 'classnames';

interface LanguageSelectorProps {
  className?: string;
}

/**
 * LanguageSelector Component
 * - Toggle buttons ES / EN
 * - useLanguageContext to change language
 * - Visual indicator (background color) for active language
 * - Small buttons in dark card with border
 */
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className,
}) => {
  const { language, setLanguage } = useLanguageContext();

  const containerClasses = classnames(
    'inline-flex items-center gap-0.5 p-1 bg-primary-800 rounded-lg border border-accent-primary border-opacity-30 hover:border-opacity-50 transition-all duration-200',
    className,
  );

  const buttonClasses = (isActive: boolean) =>
    classnames(
      'px-3 py-1 text-sm font-semibold transition-all duration-200 rounded',
      isActive
        ? 'bg-gradient-to-r from-accent-primary to-accent-primary-light text-white shadow-md'
        : 'text-text-secondary hover:text-text-primary',
    );

  return (
    <div className={containerClasses}>
      <button
        onClick={() => setLanguage('es')}
        className={buttonClasses(language === 'es')}
        aria-label="Spanish"
        title="Español"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={buttonClasses(language === 'en')}
        aria-label="English"
        title="English"
      >
        EN
      </button>
    </div>
  );
};
