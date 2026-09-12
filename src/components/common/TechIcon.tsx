import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { TechIconProps } from '../../types/components';
import {
  FaPython,
  FaNode,
  FaReact,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaCodeBranch,
  FaKey,
} from 'react-icons/fa';
import {
  SiAngular,
  SiApachekafka,
  SiCelery,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiGooglecloud,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiRabbitmq,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

/**
 * TechIcon Component
 * Renders technology icons dynamically
 */

const iconMap: Record<string, React.ComponentType<any>> = {
  python: FaPython,
  django: SiDjango,
  fastapi: SiFastapi,
  flask: SiFlask,
  javascript: SiJavascript,
  nodejs: FaNode,
  'node.js': FaNode,
  php: SiPhp,
  laravel: SiLaravel,
  react: FaReact,
  vuejs: SiVuedotjs,
  angular: SiAngular,
  docker: FaDocker,
  aws: FaAws,
  gcp: SiGooglecloud,
  git: FaGitAlt,
  cicd: FaCodeBranch,
  linux: FaLinux,
  database: FaDatabase,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  mysql: SiMysql,
  oracle: FaDatabase,
  mongodb: SiMongodb,
  mongo: SiMongodb,
  kafka: SiApachekafka,
  celery: SiCelery,
  oauth: FaKey,
  jwt: SiJsonwebtokens,
  typescript: SiTypescript,
  ts: SiTypescript,
  rabbitmq: SiRabbitmq,
  github: FaGithub,
  linkedin: FaLinkedin,
  briefcase: FaBriefcase,
};

const iconColors: Record<string, string> = {
  python: '#ffd343', django: '#44b78b', fastapi: '#009688', flask: '#d8e0e8',
  javascript: '#f7df1e', nodejs: '#68a063', php: '#8892bf', laravel: '#ff2d20',
  react: '#61dafb', vuejs: '#42b883', angular: '#dd0031', postgresql: '#5a9bd5',
  mysql: '#f29111', oracle: '#f80000', mongodb: '#47a248', aws: '#ff9900',
  gcp: '#4285f4', docker: '#2496ed', git: '#f05032', cicd: '#8b9cf7',
  kafka: '#e8edf2', celery: '#37814a', oauth: '#f6c344', jwt: '#d966ff',
  linux: '#fcc624', typescript: '#3178c6', rabbitmq: '#ff6600',
};

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  icon,
  size = 24,
  showLabel = false,
  proficiency,
  className,
}) => {
  const IconComponent = useMemo(() => {
    const key = icon.toLowerCase().replace(/\s+/g, '');
    return iconMap[key] || FaBriefcase;
  }, [icon]);
  const iconKey = icon.toLowerCase().replace(/\s+/g, '');

  const sizeMap = {
    16: 16,
    24: 24,
    32: 32,
    48: 48,
  };

  const iconSize = sizeMap[size];

  return (
    <div
      className={classNames(
        'flex flex-col items-center gap-2',
        className,
      )}
      title={name}
    >
      <div
        className={classNames(
          'flex items-center justify-center rounded-lg transition-all duration-200',
          'hover:scale-110 hover:text-accent-primary',
          'text-dark-text hover:shadow-lg',
        )}
      >
        <IconComponent size={iconSize} style={{ color: iconColors[iconKey] || '#8fc5e8' }} />
      </div>
      {showLabel && (
        <div className="text-center">
          <p className="text-sm font-medium text-dark-text">{name}</p>
          {proficiency && (
            <p className="text-xs text-dark-text-tertiary capitalize">
              {proficiency}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
