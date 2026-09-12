/**
 * Portfolio Type Definitions
 * Interfaces for portfolio data structures
 */

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface Technology {
  id: string;
  name: string;
  category: 'backend' | 'frontend' | 'tools' | 'infrastructure' | 'database' | 'devops';
  icon: string;
  proficiency: 'expert' | 'intermediate' | 'beginner';
  yearsOfExperience?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string; // Format: YYYY-MM
  endDate: string | null; // null = current
  description: string;
  technologies: string[]; // technology IDs
  location?: string;
  summary?: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[]; // technology IDs
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  startDate?: string;
  endDate?: string;
  role?: string;
  impact?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string; // Format: YYYY
  endDate: string;   // Format: YYYY
  description?: string;
  details?: string[];
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  dateRange?: { start: string; end: string };
  icon?: React.ReactNode;
  tags?: string[];
}

export interface SectionConfig {
  id: string;
  label: string;
  labelEs: string;
  labelEn: string;
}

export interface LanguageContextType {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string, options?: Record<string, unknown>) => string;
}

export interface PortfolioData {
  contact: ContactInfo;
  technologies: Technology[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  socialLinks: SocialLink[];
}
