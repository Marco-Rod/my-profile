import React from 'react';

/**
 * LoadingSpinner Component
 * Displays a loading spinner for Suspense fallback
 */
export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-accent-primary/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-accent-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};
