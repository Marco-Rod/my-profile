import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../common/SectionTitle';
import { experiences } from '../../data/experience';

const year = (date?: string) => date?.slice(0, 4);

export const ExperienceTimeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="compact-section">
      <div className="site-container">
        <SectionTitle title={`03  ${t('experience.title')}`} subtitle={t('experience.subtitle')} />

        <motion.div
          className="experience-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              className="experience-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <div className="experience-date">
                <strong>{year(experience.startDate)}</strong>
                <span>—</span>
                <strong>{experience.endDate ? year(experience.endDate) : t('experience.current')}</strong>
              </div>
              <div className="experience-marker" aria-hidden="true"><span /></div>
              <div className="experience-box">
                <div className="experience-title-row">
                  <h3>{t(`experience.items.${experience.id}.company`, { defaultValue: experience.company })}</h3>
                  <span>{t(`experience.items.${experience.id}.position`, { defaultValue: experience.position })}</span>
                </div>
                <p>{t(`experience.items.${experience.id}.description`, { defaultValue: experience.description })}</p>
                <div className="experience-tags">
                  {experience.technologies.slice(0, 7).map(technology => <span key={technology}>{technology}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
