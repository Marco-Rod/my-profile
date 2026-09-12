import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../common/SectionTitle';
import { TechIcon } from '../common/TechIcon';
import { Badge } from '../common/Badge';
import { technologies } from '../../data/technologies';
import type { Technology } from '../../types/portfolio';

/**
 * TechnologiesSection Component
 * Displays technologies in a responsive grid, organized by category with filtering
 */
export const TechnologiesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(technologies.map(t => t.category)));
    return cats.sort();
  }, []);

  // Filter technologies by active category
  const filteredTechnologies = useMemo(() => {
    if (!activeCategory) return technologies;
    return technologies.filter(tech => tech.category === activeCategory);
  }, [activeCategory]);

  // Group technologies by category for display
  const groupedByCategory = useMemo(() => {
    const grouped: Record<string, Technology[]> = {};
    filteredTechnologies.forEach(tech => {
      if (!grouped[tech.category]) {
        grouped[tech.category] = [];
      }
      grouped[tech.category].push(tech);
    });
    return grouped;
  }, [filteredTechnologies]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      backend: t('technologies.backend') || 'Backend',
      frontend: t('technologies.frontend') || 'Frontend',
      tools: t('technologies.tools') || 'Herramientas',
      infrastructure: t('technologies.infrastructure') || 'Infraestructura',
      database: t('technologies.database') || 'Bases de Datos',
      devops: t('technologies.devops') || 'DevOps',
    };
    return labels[category] || category;
  };

  const getProficiencyVariant = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'primary';
      case 'intermediate':
        return 'secondary';
      case 'beginner':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <section
      id="technologies"
      className="compact-section"
    >
      <div className="site-container">
        <SectionTitle
          title={`02  ${t('technologies.title')}`}
          subtitle={t('technologies.subtitle')}
        />

        {/* Category filter buttons */}
        <motion.div
          className="tech-filters"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge
            variant={!activeCategory ? 'primary' : 'default'}
            className="cursor-pointer transition-all"
            onClick={() => setActiveCategory(null)}
          >
            {t('technologies.all')}
          </Badge>
          {categories.map(category => (
            <Badge
              key={category}
              variant={activeCategory === category ? 'primary' : 'default'}
              className="cursor-pointer transition-all hover:border-accent-primary"
              onClick={() => setActiveCategory(category)}
            >
              {getCategoryLabel(category)}
            </Badge>
          ))}
        </motion.div>

        {/* Technologies grid by category */}
        {Object.entries(groupedByCategory).map(([category, techs]) => (
          <motion.div
            key={category}
            className="tech-group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Category title */}
            {!activeCategory && (
              <h3>
                {getCategoryLabel(category)}
              </h3>
            )}

            {/* Tech grid */}
            <motion.div
              className="tech-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techs.map(tech => (
                <motion.div
                  key={tech.id}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-full">
                    <div className="tech-tile">
                      <TechIcon
                        name={tech.name}
                        icon={tech.icon}
                        size={32}
                        proficiency={tech.proficiency}
                      />
                      <div className="text-center">
                        <p className="text-sm font-medium text-dark-text">
                          {tech.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
