import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { LanguageSelector } from './LanguageSelector';
import { scrollToElement } from '../../utils/helpers';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const SECTIONS = [
  { id: 'hero', label: 'nav.home' }, { id: 'about', label: 'nav.about' },
  { id: 'technologies', label: 'nav.technologies' }, { id: 'experience', label: 'nav.experience' },
  { id: 'projects', label: 'nav.projects' }, { id: 'education', label: 'nav.education' },
  { id: 'contact', label: 'nav.contact' },
];

export const Header: React.FC<{sticky?: boolean}> = ({ sticky = true }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const go = (id: string) => { setOpen(false); scrollToElement(id, 64); };
  return <header className={`${sticky ? 'sticky top-0' : 'relative'} compact-header`}>
    <div className="site-container header-row">
      <button onClick={() => go('hero')} className="brand" aria-label={t('nav.home')}><span className="brand-mark">MR</span><span><strong>Marco Rodríguez</strong><small>{t('brand.tagline')}</small></span></button>
      <div className="desktop-nav"><Navigation sections={SECTIONS} onNavigate={go}/></div>
      <div className="header-tools"><LanguageSelector/><button className="menu-button" onClick={() => setOpen(!open)} aria-label={t('nav.menu')}>{open ? <HiX/> : <HiMenu/>}</button></div>
    </div>
    {open && <div className="mobile-nav site-container"><Navigation sections={SECTIONS} mobile onNavigate={go}/></div>}
  </header>;
};
