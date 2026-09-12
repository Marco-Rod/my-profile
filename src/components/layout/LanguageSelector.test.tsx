import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSelector } from './LanguageSelector';
import { LanguageProvider } from '@contexts/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/i18n';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>{component}</LanguageProvider>
    </I18nextProvider>
  );
};

describe('LanguageSelector Component - Snapshots', () => {
  beforeEach(() => {
    i18n.changeLanguage('es');
  });

  it('renders correctly in Spanish mode', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly in English mode', async () => {
    await i18n.changeLanguage('en');
    const { container } = renderWithProviders(<LanguageSelector />);
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = renderWithProviders(<LanguageSelector />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('LanguageSelector Component - Interactions', () => {
  beforeEach(() => {
    i18n.changeLanguage('es');
    localStorage.clear();
  });

  it('renders both language buttons', () => {
    renderWithProviders(<LanguageSelector />);
    
    expect(screen.getByRole('button', { name: /spanish/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
  });

  it('renders ES and EN text', () => {
    renderWithProviders(<LanguageSelector />);
    
    expect(screen.getByText('ES')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('toggles language from ES to EN', async () => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);
    
    const enButton = screen.getByRole('button', { name: /english/i });
    await user.click(enButton);
    
    // Language should change
    expect(i18n.language).toBe('en');
  });

  it('toggles language from EN to ES', async () => {
    const user = userEvent.setup();
    await i18n.changeLanguage('en');
    renderWithProviders(<LanguageSelector />);
    
    const esButton = screen.getByRole('button', { name: /spanish/i });
    await user.click(esButton);
    
    expect(i18n.language).toBe('es');
  });

  it('applies active styles to current language', () => {
    renderWithProviders(<LanguageSelector />);
    
    const esButton = screen.getByRole('button', { name: /spanish/i });
    expect(esButton).toHaveClass('bg-gradient-to-r');
  });

  it('applies inactive styles to non-selected language', () => {
    renderWithProviders(<LanguageSelector />);
    
    const enButton = screen.getByRole('button', { name: /english/i });
    expect(enButton).toHaveClass('text-text-secondary');
  });

  it('persists language selection to localStorage', async () => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageSelector />);
    
    const enButton = screen.getByRole('button', { name: /english/i });
    await user.click(enButton);
    
    expect(localStorage.getItem('language')).toBe('en');
  });

  it('applies custom className when provided', () => {
    const { container } = renderWithProviders(
      <LanguageSelector className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
