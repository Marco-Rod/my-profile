import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { Navigation } from './Navigation';
import { LanguageProvider } from '@contexts/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/i18n';

const mockSections = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'technologies', labelKey: 'nav.technologies' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'contact', labelKey: 'nav.contact' },
];

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>{component}</LanguageProvider>
    </I18nextProvider>
  );
};

describe('Navigation Component - Snapshots', () => {
  beforeEach(() => {
    // Reset language to default
    i18n.changeLanguage('es');
  });

  it('renders correctly with default props', () => {
    const { container } = renderWithProviders(
      <Navigation sections={mockSections} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with active section', () => {
    const { container } = renderWithProviders(
      <Navigation sections={mockSections} activeSection="about" />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = renderWithProviders(
      <Navigation sections={mockSections} />
    );
    expect(container.querySelector('nav')).toBeInTheDocument();
  });
});
