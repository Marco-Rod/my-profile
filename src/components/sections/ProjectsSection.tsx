import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { projects } from '../../data/projects';
import { technologies } from '../../data/technologies';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * ProjectsSection Component
 * Displays featured projects in a responsive grid
 */
export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  // Get technology names for display
  const getTechNames = (techIds: string[]): string[] => {
    return techIds
      .map(id => technologies.find(t => t.id === id)?.name)
      .filter(Boolean) as string[];
  };

  // Get translated project content
  const getProjectTitle = (projectId: string): string => {
    return t(`projects.${projectId}.title`, { defaultValue: '' }) || '';
  };

  const getProjectDescription = (projectId: string): string => {
    return t(`projects.${projectId}.description`, { defaultValue: '' }) || '';
  };

  const getProjectLongDescription = (projectId: string): string => {
    return t(`projects.${projectId}.longDescription`, { defaultValue: '' }) || '';
  };

  const getProjectRole = (projectId: string): string => {
    return t(`projects.${projectId}.role`, { defaultValue: '' }) || '';
  };

  const getProjectImpact = (projectId: string): string => {
    return t(`projects.${projectId}.impact`, { defaultValue: '' }) || '';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      id="projects"
      className="compact-section"
    >
      <div className="site-container">
        <SectionTitle
          title={`04  ${t('projects.title')}`}
          subtitle={t('projects.subtitle')}
        />

        {/* Projects grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map(project => {
            const techNames = getTechNames(project.technologies);
            const title = getProjectTitle(project.id) || project.title;
            const description = getProjectDescription(project.id) || project.description;

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                <Card className="project-card">
                  {/* Project image/placeholder */}
                  <div className="project-image">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-6xl text-accent-primary/30">
                        {title.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Project info */}
                  <div className="project-info">
                    <h3 className="text-2xl font-bold text-dark-text mb-2">
                      {title}
                    </h3>

                    <p className="text-dark-text-secondary mb-4 flex-grow">
                      {description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-dark-border">
                      {techNames.map(tech => (
                        <Badge
                          key={tech}
                          size="sm"
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.github}
                          target="_blank"
                          icon={<FaGithub />}
                          className="flex-1"
                        >
                          GitHub
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.live}
                          target="_blank"
                          icon={<FaExternalLinkAlt />}
                          className="flex-1"
                        >
                          {t('projects.view')}
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty state if no projects */}
        {projects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-dark-text-secondary text-lg">
              {t('projects.empty')}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
