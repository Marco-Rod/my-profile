/**
 * Timeline Data Types
 * Extended types for timeline components and animations
 */

import React from 'react';

export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string | { start: string; end?: string };
  icon?: React.ReactNode;
  status?: 'completed' | 'current' | 'upcoming';
  link?: string;
  metadata?: Record<string, any>;
}

export interface TimelineConfig {
  variant: 'vertical' | 'horizontal';
  animate?: boolean;
  staggerDelay?: number;
  color?: 'primary' | 'secondary' | 'accent';
}
