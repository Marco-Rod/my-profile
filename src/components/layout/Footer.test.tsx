import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from './Footer';
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

describe('Footer Component - Snapshots', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = renderWithProviders(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});
