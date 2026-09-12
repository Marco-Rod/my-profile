import React from 'react';
import classNames from 'classnames';
import type { BadgeProps } from '../../types/components';

/**
 * Badge Component
 * Reusable badge with multiple variants and sizes
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  onClick,
}) => {
  return (
    <span
      className={classNames(
        'inline-flex items-center font-semibold rounded-full whitespace-nowrap',
        onClick && 'cursor-pointer transition-all duration-200 hover:scale-105',
        {
          'px-2 py-1 text-xs': size === 'sm',
          'px-3 py-1.5 text-sm': size === 'md',
          'px-4 py-2 text-base': size === 'lg',

          'bg-dark-border text-dark-text-secondary': variant === 'default',
          'bg-accent-primary text-white': variant === 'primary',
          'bg-accent-secondary text-white': variant === 'secondary',
          'bg-green-500/20 text-green-400': variant === 'success',
          'bg-yellow-500/20 text-yellow-400': variant === 'warning',
          'bg-red-500/20 text-red-400': variant === 'danger',
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
