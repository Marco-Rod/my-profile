import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { HeroSection } from './HeroSection';
import { LanguageProvider } from '@contexts/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/i18n';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>{component}</LanguageProvider>
    </I18nextProvider>
  );
};

describe('HeroSection Component - Snapshots', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<HeroSection />);
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = renderWithProviders(<HeroSection />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
