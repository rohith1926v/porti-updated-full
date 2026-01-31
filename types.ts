export interface Profile {
  name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  period: string;
  location: string;
}

export interface ProjectItem {
  id: string; // Unique identifier for routing
  title: string;
  period: string;
  description: string;
  longDescription?: string; // For the details page
  challenges?: string[]; // Bullet points for details page
  outcomes?: string[]; // Bullet points for details page
  technologies?: string[];
  repoLink?: string;
  demoLink?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  description: string;
}

export interface ResumeData {
  profile: Profile;
  education: EducationItem[];
  languages: string[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
}