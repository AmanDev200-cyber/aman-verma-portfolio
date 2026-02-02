import { LucideIcon } from 'lucide-react';

export enum SkillCategory {
  SECURITY = 'Cybersecurity',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  TOOLS = 'DevOps & Tools'
}

export interface Skill {
  name: string;
  category: SkillCategory;
  highlight?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  // Case Study Content
  problem: string;
  whyFails: string[];
  solution: string;
  systemApproach: string[];
  technicalDecisions: string[];
  // Optional custom section for things like "ML Pipeline" or "Security Focus"
  specialSection?: {
    title: string;
    items: string[];
  };
  outcome: string[];
  learnings: string[];
  // Meta
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  imagePlaceholder: string;
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'trophy' | 'certificate' | 'briefcase';
}

export interface NavItem {
  label: string;
  href: string;
}