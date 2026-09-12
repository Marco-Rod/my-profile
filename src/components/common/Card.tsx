import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import type { CardProps } from '../../types/components';

/**
 * Card Component
 * Reusable card with hover effects and optional animations
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={classNames(
        'bg-dark-card border border-dark-border rounded-xl p-6',
        'transition-all duration-300',
        hover && 'hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/20',
        onClick && 'cursor-pointer',
        className,
      )}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
