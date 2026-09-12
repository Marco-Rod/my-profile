import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders with children content', () => {
    render(<Badge>Python</Badge>);
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    const { container } = render(<Badge>Default</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-dark-border', 'text-dark-text-secondary');
  });

  it('renders with primary variant', () => {
    const { container } = render(<Badge variant="primary">Primary</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-accent-primary', 'text-white');
  });

  it('renders with secondary variant', () => {
    const { container } = render(<Badge variant="secondary">Secondary</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-accent-secondary', 'text-white');
  });

  it('renders with success variant', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-green-500/20', 'text-green-400');
  });

  it('renders with warning variant', () => {
    const { container } = render(<Badge variant="warning">Warning</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-yellow-500/20', 'text-yellow-400');
  });

  it('renders with danger variant', () => {
    const { container } = render(<Badge variant="danger">Danger</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-red-500/20', 'text-red-400');
  });

  it('renders with small size', () => {
    const { container } = render(<Badge size="sm">Small</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('px-2', 'py-1', 'text-xs');
  });

  it('renders with medium size (default)', () => {
    const { container } = render(<Badge size="md">Medium</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('px-3', 'py-1.5', 'text-sm');
  });

  it('renders with large size', () => {
    const { container } = render(<Badge size="lg">Large</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('px-4', 'py-2', 'text-base');
  });

  it('applies base styling classes', () => {
    const { container } = render(<Badge>Style</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass('inline-flex', 'items-center', 'font-semibold', 'rounded-full', 'whitespace-nowrap');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Badge className="custom-class">Custom</Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('custom-class');
  });

  it('combines variant, size, and custom className', () => {
    const { container } = render(
      <Badge variant="primary" size="lg" className="extra">
        Combined
      </Badge>
    );
    const badge = container.firstChild;
    expect(badge).toHaveClass('bg-accent-primary', 'text-white', 'px-4', 'py-2', 'text-base', 'extra');
  });

  it('renders multiple children elements', () => {
    render(
      <Badge>
        <span>React</span> <span>18</span>
      </Badge>
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('18')).toBeInTheDocument();
  });

  it('maintains correct display with long text', () => {
    render(<Badge>Very Long Badge Text</Badge>);
    expect(screen.getByText('Very Long Badge Text')).toBeInTheDocument();
  });

  it('renders as span element', () => {
    const { container } = render(<Badge>Span</Badge>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});
