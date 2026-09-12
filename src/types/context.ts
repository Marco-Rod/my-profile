/**
 * Application Context Types
 * Types for global state and context management
 */

import { ContactInfo, Technology, Experience, Project, Education } from './portfolio';

export type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

export interface PortfolioData {
  contact: ContactInfo;
  technologies: Technology[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
}

export interface AppContextType {
  language: Language;
  portfolio: PortfolioData;
  isLoading: boolean;
}
