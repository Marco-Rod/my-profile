import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders with children content', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies default styling classes', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-dark-card', 'border', 'border-dark-border', 'rounded-xl', 'p-6');
  });

  it('applies hover styles when hover prop is true', () => {
    const { container } = render(<Card hover={true}>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('hover:border-accent-primary', 'hover:shadow-lg');
  });

  it('does not apply hover styles when hover prop is false', () => {
    const { container } = render(<Card hover={false}>Content</Card>);
    const card = container.firstChild;
    expect(card?.className || '').not.toMatch(/hover:border-accent-primary/);
  });

  it('applies cursor-pointer when onClick is provided', () => {
    const handleClick = vi.fn();
    const { container } = render(<Card onClick={handleClick}>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('cursor-pointer');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable</Card>);
    
    const card = screen.getByText('Clickable').closest('div');
    await userEvent.click(card!);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-style">Content</Card>
    );
    const card = container.firstChild;
    expect(card).toHaveClass('custom-style');
  });

  it('renders multiple children', () => {
    render(
      <Card>
        <h1>Title</h1>
        <p>Description</p>
      </Card>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('maintains transition classes for animations', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('transition-all', 'duration-300');
  });

  it('renders with default hover as true', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('hover:border-accent-primary');
  });

  it('renders with ReactNode children', () => {
    const complexChild = (
      <div>
        <span>Complex</span>
        <span>Content</span>
      </div>
    );
    
    render(<Card>{complexChild}</Card>);
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  // Snapshot tests
  it('matches snapshot with default props', () => {
    const { container } = render(<Card>Default Card</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot with hover disabled', () => {
    const { container } = render(<Card hover={false}>No Hover Card</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot with custom className', () => {
    const { container } = render(
      <Card className="custom-test-class">Custom Card</Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
