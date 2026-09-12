import type { ContactInfo, SocialLink } from '../types/portfolio';

export const contactInfo: ContactInfo = {
  name: 'Marco Antonio Rodríguez Torres',
  title: 'Backend Developer',
  email: 'mrc5622@gmail.com',
  phone: '+52 3317709591',
  location: 'Tonala, Jalisco',
  github: 'https://github.com/Marco-Rod',
  linkedin: 'https://www.linkedin.com/in/marco-antonio-rodriguez-torres-10a61242/',
  bio: 'Desarrollador Backend con más de 10 años de experiencia en el desarrollo de aplicaciones escalables y de alto rendimiento.',
};

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Marco-Rod',
    icon: 'github',
    label: 'GitHub Profile',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/marco-antonio-rodriguez-torres-10a61242/',
    icon: 'linkedin',
    label: 'LinkedIn Profile',
  },
];
