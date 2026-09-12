/**
 * Component Type Definitions
 * Props interfaces for reusable components
 */

import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

export interface CardProps {
  className?: string;
  hover?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface TechIconProps {
  name: string;
  icon: string;
  size?: 16 | 24 | 32 | 48;
  showLabel?: boolean;
  proficiency?: 'expert' | 'intermediate' | 'beginner';
  className?: string;
}

export interface TimelineProps {
  items: TimelineItemProps[];
  variant?: 'vertical' | 'horizontal';
  className?: string;
}

export interface TimelineItemProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  icon?: ReactNode;
  tags?: string[];
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export interface HeaderProps {
  sticky?: boolean;
  className?: string;
}

export interface NavigationProps {
  sections: NavigationSectionConfig[];
  activeSection?: string;
  className?: string;
}

export interface NavigationSectionConfig {
  id: string;
  label: string;
  href: string;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  className?: string;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export interface LanguageSelectorProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface ScrollToTopProps {
  threshold?: number;
  smooth?: boolean;
  className?: string;
}
