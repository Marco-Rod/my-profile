import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../common/Button';
import { contactInfo } from '../../data/contact';
import { downloadCV } from '../../utils/pdf-generator';
import { FaGithub, FaLinkedin, FaDownload, FaMapMarkerAlt, FaEnvelope, FaTerminal } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [showCVOptions, setShowCVOptions] = useState(false);

  const handleCVDownload = (language: 'es' | 'en') => {
    downloadCV(language);
    setShowCVOptions(false);
  };
  return <section id="hero" className="hero-compact">
    <div className="site-container grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
        <p className="hero-kicker">{t('hero.greeting')}</p>
        <h1>Marco Antonio<br/><span>Rodríguez Torres</span></h1>
        <h2>{t('hero.role')}</h2>
        <p className="hero-copy">{t('hero.description')}</p>
        <div className="hero-meta"><span><FaMapMarkerAlt/> {t('hero.location')}</span><a href={`mailto:${contactInfo.email}`}><FaEnvelope/> {contactInfo.email}</a></div>
        <div className="hero-actions">
          <Button size="sm" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} icon={<FaTerminal/>}>{t('hero.cta_projects')}</Button>
          <Button variant="secondary" size="sm" href={contactInfo.github} target="_blank" icon={<FaGithub/>}>GitHub</Button>
          <Button variant="secondary" size="sm" href={contactInfo.linkedin} target="_blank" icon={<FaLinkedin/>}>LinkedIn</Button>
          <div className="cv-download-menu">
            <Button variant="secondary" size="sm" onClick={() => setShowCVOptions(value => !value)} icon={<FaDownload/>}>{t('hero.cta_cv')}</Button>
            {showCVOptions && (
              <div className="cv-options" role="dialog" aria-label={t('hero.cv_dialog')}>
                <p>{t('hero.cv_choose')}</p>
                <button onClick={() => handleCVDownload('es')}><span>ES</span>{t('hero.cv_spanish')}</button>
                <button onClick={() => handleCVDownload('en')}><span>EN</span>{t('hero.cv_english')}</button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      <motion.div className="terminal" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65, delay: .15 }}>
        <div className="terminal-bar"><i/><i/><i/></div>
        <div className="terminal-body"><p><b>marco@portfolio:~$</b> whoami</p><p>{contactInfo.name}</p><br/><p><b>marco@portfolio:~$</b> cat {t('hero.terminal_file')}</p><p>› Python (Django, FastAPI, Flask)</p><p>› Node.js & TypeScript</p><p>› PostgreSQL, MySQL, MongoDB, Oracle</p><p>› Kafka, Celery, Docker, CI/CD</p><p>› AWS, GCP, Linux</p><br/><p><b>marco@portfolio:~$</b> <span className="cursor">█</span></p></div>
      </motion.div>
    </div>
  </section>;
};
