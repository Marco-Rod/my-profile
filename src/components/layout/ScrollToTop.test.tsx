import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { ScrollToTop } from './ScrollToTop';
import { useScrollPosition } from '@hooks/useScrollPosition';

// Mock useScrollPosition hook
vi.mock('@hooks/useScrollPosition', () => ({
  useScrollPosition: vi.fn(() => ({
    scrollY: 0,
    scrollDirection: 'down',
  })),
}));

describe('ScrollToTop Component - Snapshots', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly when scroll position is at top', () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when scroll position is below threshold', () => {
    vi.mocked(useScrollPosition).mockReturnValue({
      scrollY: 400,
      scrollDirection: 'down',
    });
    
    const { container } = render(<ScrollToTop />);
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toBeInTheDocument();
  });
});
