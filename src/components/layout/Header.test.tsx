import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { LanguageProvider } from '@contexts/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/i18n';

// Mock hooks
vi.mock('@hooks/useScrollPosition', () => ({
  useScrollPosition: () => ({
    scrollY: 0,
    scrollDirection: 'down',
  }),
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>{component}</LanguageProvider>
    </I18nextProvider>
  );
};

describe('Header Component - Snapshots', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { container } = renderWithProviders(<Header />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with sticky=false', () => {
    const { container } = renderWithProviders(<Header sticky={false} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with sticky=true', () => {
    const { container } = renderWithProviders(<Header sticky={true} />);
    expect(container).toMatchSnapshot();
  });
});
