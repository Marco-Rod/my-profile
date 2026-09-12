import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { TechIcon } from './TechIcon';

describe('TechIcon Component - Snapshots', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <TechIcon name="React" icon="react" />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with custom size', () => {
    const { container } = render(
      <TechIcon name="Python" icon="python" size={48} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with label hidden', () => {
    const { container } = render(
      <TechIcon name="Node.js" icon="nodejs" showLabel={false} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with label shown', () => {
    const { container} = render(
      <TechIcon name="TypeScript" icon="typescript" showLabel={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders without errors', () => {
    const { container } = render(
      <TechIcon name="Docker" icon="docker" />
    );
    expect(container).toBeInTheDocument();
  });
});
