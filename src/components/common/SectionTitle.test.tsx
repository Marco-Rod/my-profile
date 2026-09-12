import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle Component', () => {
  it('renders title text', () => {
    render(<SectionTitle title="About" />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders title as h2 heading', () => {
    render(<SectionTitle title="Experience" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Experience');
  });

  it('renders subtitle when provided', () => {
    render(
      <SectionTitle title="Projects" subtitle="Featured work" />
    );
    expect(screen.getByText('Featured work')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = render(<SectionTitle title="Contact" />);
    const subtitle = container.querySelector('p');
    expect(subtitle).not.toBeInTheDocument();
  });

  it('applies center alignment by default', () => {
    const { container } = render(<SectionTitle title="Title" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('text-center');
  });

  it('applies left alignment', () => {
    const { container } = render(
      <SectionTitle title="Title" align="left" />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('text-left');
    expect(wrapper).not.toHaveClass('text-center');
  });

  it('applies right alignment', () => {
    const { container } = render(
      <SectionTitle title="Title" align="right" />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('text-right');
    expect(wrapper).not.toHaveClass('text-center');
  });

  it('applies title typography classes', () => {
    render(<SectionTitle title="Typography" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'font-bold', 'text-dark-text');
  });

  it('applies subtitle typography classes', () => {
    const { container } = render(
      <SectionTitle title="Main" subtitle="Sub" />
    );
    const subtitle = container.querySelector('p');
    expect(subtitle).toHaveClass('text-lg', 'text-dark-text-secondary', 'max-w-2xl');
  });

  it('applies margin bottom to container', () => {
    const { container } = render(<SectionTitle title="Margins" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('mb-12');
  });

  it('applies custom className', () => {
    const { container } = render(
      <SectionTitle title="Custom" className="extra-class" />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('extra-class');
  });

  it('maintains all text when both title and subtitle provided', () => {
    render(
      <SectionTitle
        title="Main Title"
        subtitle="Descriptive subtitle text"
      />
    );
    expect(screen.getByText('Main Title')).toBeInTheDocument();
    expect(screen.getByText('Descriptive subtitle text')).toBeInTheDocument();
  });

  it('renders long titles correctly', () => {
    const longTitle = 'This is a very long section title that might wrap on mobile devices';
    render(<SectionTitle title={longTitle} />);
    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });

  it('applies mx-auto to subtitle for centering', () => {
    const { container } = render(
      <SectionTitle title="Title" subtitle="Subtitle" align="center" />
    );
    const subtitle = container.querySelector('p');
    expect(subtitle).toHaveClass('mx-auto');
  });

  it('maintains structure with empty subtitle string', () => {
    render(<SectionTitle title="Title" subtitle="" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    const paragraphs = screen.queryAllByRole('paragraph');
    expect(paragraphs.length).toBe(0);
  });

  it('renders with all align options correctly', () => {
    const alignments = ['left' as const, 'center' as const, 'right' as const];
    
    alignments.forEach(align => {
      const { container, unmount } = render(
        <SectionTitle title={`Title ${align}`} align={align} />
      );
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(`text-${align}`);
      unmount();
    });
  });
});
