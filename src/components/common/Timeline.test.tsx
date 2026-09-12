import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Timeline } from './Timeline';
import type { TimelineItem } from '@types/timeline';

// Mock the useIntersectionObserver hook
vi.mock('@hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => true,
}));

const mockTimelineItems: TimelineItem[] = [
  {
    id: '1',
    title: 'Senior Developer',
    subtitle: 'Company A',
    description: 'Led development of key features',
    date: '2022-01',
    endDate: null,
  },
  {
    id: '2',
    title: 'Developer',
    subtitle: 'Company B',
    description: 'Worked on various projects',
    date: '2020-01',
    endDate: '2021-12',
  },
];

describe('Timeline Component - Snapshots', () => {
  it('renders correctly with vertical variant (default)', () => {
    const { container } = render(
      <Timeline items={mockTimelineItems} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with horizontal variant', () => {
    const { container } = render(
      <Timeline items={mockTimelineItems} variant="horizontal" />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with empty items', () => {
    const { container } = render(
      <Timeline items={[]} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = render(
      <Timeline items={mockTimelineItems} />
    );
    expect(container).toBeInTheDocument();
  });
});
