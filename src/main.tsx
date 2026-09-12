import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';
import './i18n/i18n';
import './styles/globals.css';

/**
 * Main Entry Point
 * Initializes the React application with necessary providers
 * - LanguageProvider: Manages i18n state and translations
 * - Global styles: Tailwind + custom CSS variables
 * - i18n: Internationalization configuration
 */

// Get the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element. Make sure index.html has a div with id="root"');
}

// Create React root and render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
