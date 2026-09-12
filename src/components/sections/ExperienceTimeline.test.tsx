import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ExperienceTimeline } from './ExperienceTimeline';
import { LanguageProvider } from '@contexts/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/i18n';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    article: ({ children, ...props }: any) => <article {...props}>{children}</article>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
}));

// Mock useIntersectionObserver
vi.mock('@hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => true,
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>{component}</LanguageProvider>
    </I18nextProvider>
  );
};

describe('ExperienceTimeline Component - Snapshots', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<ExperienceTimeline />);
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = renderWithProviders(<ExperienceTimeline />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
