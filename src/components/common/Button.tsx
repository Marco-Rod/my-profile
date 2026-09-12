import React from 'react';
import classNames from 'classnames';
import type { ButtonProps } from '../../types/components';

/**
 * Button Component
 * Reusable button supporting variants, sizes, icons, and states
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  href,
  target = '_self',
  disabled = false,
  loading = false,
  className,
}) => {
  const baseClasses = classNames(
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg',
    'transition-all duration-200 cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    {
      // Sizes
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',

      // Variants
      'bg-accent-primary text-white hover:bg-blue-600 focus-visible:outline-accent-primary':
        variant === 'primary',
      'bg-dark-card border border-dark-border text-dark-text hover:border-accent-primary hover:bg-dark-border focus-visible:outline-accent-primary':
        variant === 'secondary',
      'text-accent-primary hover:bg-dark-card/50 focus-visible:outline-accent-primary':
        variant === 'ghost',
      'border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus-visible:outline-accent-primary':
        variant === 'outline',

      // Disabled
      'opacity-50 cursor-not-allowed': disabled || loading,
    },
    className,
  );

  const content = (
    <>
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
