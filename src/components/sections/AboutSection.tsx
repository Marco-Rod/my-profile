import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import {
  FaCode,
  FaUsers,
  FaRocket,
  FaChartLine,
} from 'react-icons/fa';

/**
 * AboutSection Component
 * Professional summary with feature cards
 */
export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'specialization',
      title: t('about.features.specialization.title'),
      description: t('about.features.specialization.description'),
      icon: <FaCode className="text-2xl text-accent-primary" />,
    },
    {
      id: 'teamwork',
      title: t('about.features.teamwork.title'),
      description: t('about.features.teamwork.description'),
      icon: <FaUsers className="text-2xl text-accent-primary" />,
    },
    {
      id: 'learning',
      title: t('about.features.learning.title'),
      description: t('about.features.learning.description'),
      icon: <FaRocket className="text-2xl text-accent-primary" />,
    },
    {
      id: 'impact',
      title: t('about.features.impact.title'),
      description: t('about.features.impact.description'),
      icon: <FaChartLine className="text-2xl text-accent-primary" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="compact-section"
    >
      <div className="site-container">
        <SectionTitle
          title={`01  ${t('about.title')}`}
          subtitle={t('about.subtitle')}
        />

        {/* Bio paragraph */}
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            {t('about.content')}
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          className="feature-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
            >
              <Card className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>
                  {feature.title}
                </h3>
                <p className="text-dark-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
