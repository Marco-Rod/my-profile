import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import classnames from 'classnames';

interface SectionConfig {
  id: string;
  label: string;
}

interface NavigationProps {
  sections: SectionConfig[];
  activeSection?: string;
  mobile?: boolean;
  onNavigate?: (sectionId: string) => void;
}

/**
 * Navigation Component
 * - Props: sections array, activeSection optional, mobile bool
 * - Smooth scroll on click to each section
 * - Mobile: vertical flex, desktop: horizontal flex
 * - Stagger animations on mobile
 * - useTranslation hook for labels
 */
export const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  mobile = false,
  onNavigate,
}) => {
  const { t } = useTranslation();
  const [active, setActive] = useState<string | undefined>(activeSection);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const containerClasses = classnames(
    mobile
      ? 'flex flex-col gap-4 py-4'
      : 'flex items-center gap-6 lg:gap-8',
  );

  const containerVariants: Variants = mobile
    ? {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }
    : {};

  const itemVariants: Variants = mobile
    ? {
        initial: { opacity: 0, x: -20 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.3 },
        },
      }
    : {};

  const handleClick = (sectionId: string) => {
    setActive(sectionId);
    onNavigate?.(sectionId);
  };

  return (
    <motion.nav
      className={containerClasses}
      variants={mobile ? containerVariants : undefined}
      initial={mobile ? 'initial' : undefined}
      animate={mobile ? 'animate' : undefined}
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => handleClick(section.id)}
          variants={mobile ? itemVariants : undefined}
          className={classnames(
            'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
            active === section.id
              ? 'text-accent-primary'
              : 'text-text-secondary hover:text-text-primary',
            mobile ? 'text-left' : '',
          )}
        >
          {t(section.label)}
          {active === section.id && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-primary-light"
              layoutId="activeNav"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
              style={{
                width: mobile ? '100%' : 'auto',
                right: mobile ? undefined : 0,
              }}
            />
          )}
        </motion.button>
      ))}
    </motion.nav>
  );
};
