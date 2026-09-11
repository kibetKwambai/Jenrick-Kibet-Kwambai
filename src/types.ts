export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: 'Current' | 'Past';
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  aircraftPlatforms?: string[];
  metrics?: { label: string; value: string }[];
  regulatoryBodies?: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  category: 'Aviation & FSTD' | 'UAV & Drones' | 'Software & Systems' | 'Industry Insights' | 'Space & Satellites';
  kind?: 'Research paper';
  date?: string;
  readTime?: string;
  summary: string;
  abstract: string;
  doiOrRef?: string;
  tags: string[];
  sections: {
    heading: string;
    content: string[];
  }[];
  keyTakeaways: string[];
  downloadUrl?: string;
  externalLink?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Aerospace & Robotics' | 'Software & Web' | 'Avionics Tooling';
  subtitle: string;
  description: string;
  imageAlt: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Active' | 'Operational' | 'Production' | 'Completed' | 'Developed';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; tag: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  achievements: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badge: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  location?: string;
  phone?: string;
  email: string;
  relationship: string;
}

