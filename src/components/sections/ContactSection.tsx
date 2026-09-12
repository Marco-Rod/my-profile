import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { contactInfo, socialLinks } from '../../data/contact';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

/**
 * ContactSection Component
 * Displays contact information and social media links
 */
export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      id: 'email',
      label: t('contact.email'),
      value: contactInfo.email,
      icon: <FaEnvelope className="text-2xl text-accent-primary" />,
      href: `mailto:${contactInfo.email}`,
    },
    {
      id: 'phone',
      label: t('contact.phone'),
      value: contactInfo.phone,
      icon: <FaPhone className="text-2xl text-accent-primary" />,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      id: 'location',
      label: t('contact.location'),
      value: t('contact.location_value'),
      icon: <FaMapMarkerAlt className="text-2xl text-accent-primary" />,
      href: null,
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

  const getIconForSocial = (id: string) => {
    switch (id) {
      case 'github':
        return <FaGithub className="text-2xl" />;
      case 'linkedin':
        return <FaLinkedin className="text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      className="compact-section contact-compact"
    >
      <div className="site-container">
        <SectionTitle
          title={`06  ${t('contact.title')}`}
          subtitle={t('contact.subtitle')}
        />

        {/* Contact info cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map(method => (
            <motion.div
              key={method.id}
              variants={itemVariants}
            >
              <Card className="h-full flex flex-col items-center text-center p-8">
                <div className="mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">
                  {method.label}
                </h3>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-accent-primary hover:text-accent-secondary transition-colors font-medium"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-dark-text-secondary">
                    {method.value}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-dark-text mb-8">
            {t('contact.follow')}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map(link => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  href={link.url}
                  target="_blank"
                  icon={getIconForSocial(link.id)}
                >
                  {link.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-dark-text-secondary mb-6 max-w-2xl mx-auto">
            {t('contact.message')}
          </p>
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${contactInfo.email}`}
          >
            {t('contact.send_email')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
