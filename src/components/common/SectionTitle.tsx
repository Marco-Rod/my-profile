import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import type { SectionTitleProps } from '../../types/components';

/**
 * SectionTitle Component
 * Reusable section title with optional subtitle and animation
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <motion.div
      className={classNames(
        'section-heading mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'text-right',
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
