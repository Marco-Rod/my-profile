import React, { Suspense, lazy } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { HeroSection, AboutSection } from './components/sections';

// Lazy load heavy sections
const TechnologiesSection = lazy(() => import('./components/sections/TechnologiesSection'));
const ExperienceTimeline = lazy(() => import('./components/sections/ExperienceTimeline'));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'));
const EducationSection = lazy(() => import('./components/sections/EducationSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));

/**
 * Main App Component
 * Wraps the application with necessary providers and renders the main layout
 * with all sections and navigation
 */
const App: React.FC = () => {
  return (
      <div className="min-h-screen bg-dark-bg text-dark-text">
        <Header />
        
        <main>
          <HeroSection />
          <AboutSection />
          <Suspense fallback={<LoadingSpinner />}>
            <TechnologiesSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ExperienceTimeline />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <EducationSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ContactSection />
          </Suspense>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
  );
};

export default App;
