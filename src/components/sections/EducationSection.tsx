import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';
import { education } from '../../data/education';
import type { TimelineItem } from '../../types/portfolio';
import { FaGraduationCap } from 'react-icons/fa';

/**
 * EducationSection Component
 * Displays education credentials in timeline format
 */
export const EducationSection: React.FC = () => {
  const { t } = useTranslation();

  // Convert education to timeline items
  const timelineItems: TimelineItem[] = useMemo(() => {
    return education.map(edu => {
      const dateRange = `${edu.startDate} - ${edu.endDate}`;

      return {
        id: edu.id,
        title: t(`education.items.${edu.id}.degree`, { defaultValue: edu.degree }),
        subtitle: t(`education.items.${edu.id}.institution`, { defaultValue: edu.institution }),
        description: t(`education.items.${edu.id}.description`, { defaultValue: edu.description || edu.field }),
        date: dateRange,
        icon: <FaGraduationCap />,
      };
    });
  }, [t]);

  return (
    <section
      id="education"
      className="compact-section education-compact"
    >
      <div className="site-container">
        <SectionTitle
          title={`05  ${t('education.title')}`}
          subtitle={t('education.subtitle')}
        />

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary to-accent-secondary" />

          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="md:grid md:grid-cols-12 md:gap-8 md:items-start">
                    {/* Left content (even indices) */}
                    {isEven && (
                      <div className="md:col-span-5 mb-4 md:mb-0">
                        <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent-primary transition-all duration-300">
                          <h3 className="text-lg font-bold text-dark-text mb-1">
                            {item.title}
                          </h3>
                          <p className="text-accent-primary font-semibold mb-2">
                            {item.subtitle}
                          </p>
                          <p className="text-sm text-dark-text-tertiary mb-3">
                            {item.date}
                          </p>
                          <p className="text-dark-text-secondary">
                            {item.description}
                          </p>
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
                          <FaGraduationCap size={20} />
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
                          <p className="text-accent-primary font-semibold mb-2">
                            {item.subtitle}
                          </p>
                          <p className="text-sm text-dark-text-tertiary mb-3">
                            {item.date}
                          </p>
                          <p className="text-dark-text-secondary">
                            {item.description}
                          </p>
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
      </div>
    </section>
  );
};

export default EducationSection;
