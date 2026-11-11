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
  SiCaddy,
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
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPydantic,
  SiRabbitmq,
  SiSqlalchemy,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiWhatsapp,
} from 'react-icons/si';
import {
  FaBrain,
  FaProjectDiagram,
  FaFlask,
  FaCode,
  FaCube,
  FaGoogle,
} from 'react-icons/fa';

/**
 * TechIcon Component
 * Renders technology icons dynamically
 */

const iconMap: Record<string, React.ComponentType<any>> = {
  python: FaPython,
  django: SiDjango,
  fastapi: SiFastapi,
  flask: SiFlask,
  sqlalchemy: SiSqlalchemy,
  pydantic: SiPydantic,
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
  vercel: SiVercel,
  caddy: SiCaddy,
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
  pandas: SiPandas,
  openai: FaBrain,
  ollama: FaBrain,
  gemini: FaBrain,
  rag: FaProjectDiagram,
  'vector-store': FaDatabase,
  embeddings: FaCube,
  pytest: FaFlask,
  alembic: FaCode,
  asyncio: FaCode,
  whatsapp: SiWhatsapp,
  'google-calendar': FaGoogle,
  'google-oauth': FaGoogle,
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
  sqlalchemy: '#d71f00', pydantic: '#e92063',
  javascript: '#f7df1e', nodejs: '#68a063', php: '#8892bf', laravel: '#ff2d20',
  react: '#61dafb', vuejs: '#42b883', angular: '#dd0031', postgresql: '#5a9bd5',
  mysql: '#f29111', oracle: '#f80000', mongodb: '#47a248', aws: '#ff9900',
  gcp: '#4285f4', vercel: '#000000', caddy: '#1e81b0', docker: '#2496ed', git: '#f05032', cicd: '#8b9cf7',
  kafka: '#e8edf2', celery: '#37814a', pandas: '#150458',
  openai: '#412991', ollama: '#000000', gemini: '#4285f4', rag: '#8b5cf6',
  'vector-store': '#10b981', embeddings: '#f59e0b', pytest: '#0a9edd', alembic: '#6d28d9',
  asyncio: '#306998', whatsapp: '#25d366', 'google-calendar': '#4285f4', 'google-oauth': '#4285f4',
  oauth: '#f6c344', jwt: '#d966ff', linux: '#fcc624', typescript: '#3178c6',
  rabbitmq: '#ff6600',
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
