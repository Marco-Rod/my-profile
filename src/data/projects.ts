import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'diamond-iq',
    title: 'Diamond IQ',
    description: 'Backend + GenAI practice project combining FastAPI, PostgreSQL, and LLMs for natural language baseball queries. Features Tool Calling for structured data, RAG for documentation, LLM Router with Ollama/Gemini/OpenAI fallback, and agentic orchestration with guardrails.',
    longDescription: 'Diamond IQ is a practice project that combines a traditional backend with generative AI capabilities applied to baseball data. It allows asking natural language questions and routes them to the appropriate source: structured player/season data via PostgreSQL tools, or definitions/methodology via RAG over a knowledge base. The system includes an LLM Router supporting Ollama (local), Gemini, and OpenAI with retry/fallback logic, token usage tracking, execution limits, and guardrails for input/output validation. Built as a modular FastAPI application with clean architecture layers (API, AI orchestration, providers, tools, RAG, services, repositories).',
    technologies: ['python', 'fastapi', 'postgresql', 'docker', 'alembic', 'pytest', 'ollama', 'gemini', 'openai', 'rag', 'vector-store', 'embeddings', 'kafka', 'celery'],
    github: 'https://github.com/Marco-Rod/diamond-iq',
    featured: true,
    startDate: '2024-01',
    endDate: '2024-12',
    role: 'Solo Developer',
    impact: 'Personal project demonstrating backend + GenAI integration with production-grade patterns: tool calling, RAG, multi-provider routing, observability, and clean architecture.',
  },
  {
    id: 'whatsapp-booking',
    title: 'WhatsApp Booking',
    description: 'Full-stack SaaS for service businesses to manage bookings via WhatsApp. Customers book, cancel, reschedule; businesses configure services, schedules, and Google Calendar sync from a self-service dashboard. Deployed on Lightsail + Vercel.',
    longDescription: 'WhatsApp Booking enables service businesses to manage appointments entirely through WhatsApp. Customers converse naturally to check availability, book, cancel, or reschedule appointments. Businesses self-onboard via Google Admin Sign-In, configure services, schedules, and optionally connect Google Calendar for two-way sync. The system includes a React dashboard for agenda management, WhatsApp Cloud API integration with HMAC verification, Google Calendar OAuth with PKCE, encrypted credential storage, and a reminder engine processed via external scheduler. Built with FastAPI async backend (SQLAlchemy, Alembic, PostgreSQL) and React/TypeScript/Vite frontend. Deployed via Docker Compose on AWS Lightsail with Caddy reverse proxy (HTTPS, rate limiting, fixed IP topology) and Vercel for the frontend.',
    technologies: ['python', 'fastapi', 'postgresql', 'docker', 'alembic', 'pytest', 'react', 'typescript', 'vite', 'sqlalchemy', 'caddy', 'aws', 'vercel', 'whatsapp', 'google-calendar', 'google-oauth', 'pydantic', 'asyncio'],
    github: 'https://github.com/Marco-Rod/whatsapp-booking',
    live: 'https://whatsapp-booking-blush.vercel.app',
    featured: true,
    startDate: '2023-06',
    endDate: '2024-12',
    role: 'Solo Developer / Founder',
    impact: 'End-to-end SaaS product: full-stack architecture, third-party integrations (Meta WhatsApp Cloud API, Google Calendar/Identity), production deployment (Lightsail, Vercel, Caddy), security (HMAC, encrypted credentials, HttpOnly sessions), and self-service onboarding flow.',
  },
];