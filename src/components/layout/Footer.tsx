import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { contactInfo, socialLinks } from '../../data/contact';
import { scrollToElement } from '../../utils/helpers';
import { ANIMATION_DURATIONS } from '../../utils/constants';
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiArrowTopRightOnSquare,
} from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';

/**
 * Footer Component
 * - Contact info: email (mailto link), phone, location
 * - Social links: GitHub, LinkedIn (with react-icons)
 * - Copyright notice
 * - Responsive: stacked on mobile, horizontal on desktop
 * - Animations: fade in on scroll
 */
export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
      transition: { duration: ANIMATION_DURATIONS.normal / 1000 },
    },
  };

  return (
    <footer className="bg-primary-900 border-t border-accent-primary border-opacity-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-bold text-white">
              {t('footer.contact')}
            </h3>

            {/* Email */}
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors duration-200 group"
              whileHover={{ x: 5 }}
            >
              <HiEnvelope className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:underline">{contactInfo.email}</span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors duration-200 group"
              whileHover={{ x: 5 }}
            >
              <HiPhone className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:underline">{contactInfo.phone}</span>
            </motion.a>

            {/* Location */}
            <div className="flex items-center gap-3 text-text-secondary">
              <HiMapPin className="w-5 h-5 flex-shrink-0" />
              <span>{contactInfo.location}</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-bold text-white">
              {t('footer.social')}
            </h3>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-primary transition-colors duration-200 group"
                  aria-label={link.label}
                  whileHover={{ x: 5 }}
                >
                  {link.id === 'github' && (
                    <FaGithub className="w-5 h-5 flex-shrink-0" />
                  )}
                  {link.id === 'linkedin' && (
                    <HiArrowTopRightOnSquare className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="group-hover:underline">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-bold text-white">
              {t('footer.quickLinks')}
            </h3>

            <div className="space-y-3">
              {[
                { label: 'nav.about', id: 'about' },
                { label: 'nav.projects', id: 'projects' },
                { label: 'nav.experience', id: 'experience' },
                { label: 'nav.contact', id: 'contact' },
              ].map(({ label, id }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToElement(id, 80)}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-200 hover:underline"
                  whileHover={{ x: 5 }}
                >
                  {t(label)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-accent-primary border-opacity-20 pt-8">
          {/* Copyright */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary text-sm">
              {t('footer.copyright')} © {currentYear}{' '}
              {contactInfo.name}
            </p>

            {/* Built with info */}
            <p className="text-text-tertiary text-xs">
              {t('footer.builtWith')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
