/**
 * Section Components Exports
 * Main page sections for the portfolio
 */

// Export always-loaded sections
export { HeroSection } from './HeroSection';
export { AboutSection } from './AboutSection';

// Lazy-loaded sections - do not export from here
// They are imported via React.lazy() in App.tsx
// Exports: TechnologiesSection, ExperienceTimeline, ProjectsSection, EducationSection, ContactSection
