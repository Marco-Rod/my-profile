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
];