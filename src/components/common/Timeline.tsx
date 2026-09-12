import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import type { TimelineProps } from '../../types/components';

/**
 * Timeline Component
 * Displays timeline items with animations
 */
export const Timeline: React.FC<TimelineProps> = ({
  items,
  variant = 'vertical',
  className,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  if (variant === 'horizontal') {
    return (
      <motion.div
        className={classNames(
          'flex flex-col gap-8 md:flex-row md:gap-4 overflow-x-auto pb-4',
          className,
        )}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-1 min-w-max md:min-w-0"
            variants={itemVariants}
          >
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              {item.icon && (
                <div className="flex items-center justify-center mb-3 text-accent-primary">
                  {item.icon}
                </div>
              )}
              <h3 className="font-semibold text-dark-text mb-1">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm text-dark-text-secondary mb-2">
                  {item.subtitle}
                </p>
              )}
              <p className="text-xs text-dark-text-tertiary mb-2">{item.date}</p>
              <p className="text-sm text-dark-text-secondary">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs bg-accent-primary/20 text-accent-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Vertical timeline (default)
  return (
    <motion.div
      className={classNames('relative', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Vertical line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary to-accent-secondary" />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              className="relative"
              variants={itemVariants}
            >
              <div className="md:grid md:grid-cols-12 md:gap-8 md:items-start">
                {/* Left content (even indices) */}
                {isEven && (
                  <div className="md:col-span-5 mb-4 md:mb-0">
                    <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent-primary transition-all duration-300">
                      <h3 className="text-lg font-bold text-dark-text mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-accent-primary font-semibold mb-2">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="text-sm text-dark-text-tertiary mb-3">
                        {item.date}
                      </p>
                      <p className="text-dark-text-secondary">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dark-border">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-1 text-xs bg-accent-primary/20 text-accent-primary rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Timeline dot in center column */}
                <div className="md:col-span-2 flex justify-center mb-4 md:mb-0 md:pt-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg text-white border-4 border-dark-bg relative z-10">
                      {item.icon || <span className="text-xl">●</span>}
                    </div>
                  </motion.div>
                </div>

                {/* Right content (odd indices) */}
                {!isEven && (
                  <div className="md:col-span-5">
                    <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent-primary transition-all duration-300">
                      <h3 className="text-lg font-bold text-dark-text mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-accent-primary font-semibold mb-2">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="text-sm text-dark-text-tertiary mb-3">
                        {item.date}
                      </p>
                      <p className="text-dark-text-secondary">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dark-border">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-1 text-xs bg-accent-primary/20 text-accent-primary rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Empty space for alignment */}
                {isEven && <div className="md:col-span-5" />}
                {!isEven && <div className="md:col-span-5 md:order-first" />}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
