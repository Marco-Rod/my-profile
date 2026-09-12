import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<LoadingSpinner />);
    expect(container.firstChild).toBeTruthy();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<LoadingSpinner />);
    const wrapper = container.querySelector('.flex.items-center.justify-center');
    expect(wrapper).toBeTruthy();
  });

  it('contains spinner elements', () => {
    const { container } = render(<LoadingSpinner />);
    const spinners = container.querySelectorAll('.rounded-full');
    expect(spinners.length).toBeGreaterThanOrEqual(2);
  });

  it('has animate-spin class for animation', () => {
    const { container } = render(<LoadingSpinner />);
    const animatedSpinner = container.querySelector('.animate-spin');
    expect(animatedSpinner).toBeTruthy();
  });
});
