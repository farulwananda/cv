export interface ProjectCaseStudy {
  role: string;
  period: string;
  summary: string;
  theChallenge: string;
  theSolution: string;
  architectureNotes?: string;
  mermaidDiagram?: string;
  keyResults: { label: string; value: string; description: string }[];
  highlights: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  image?: string;
  metric?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Note {
  id: string;
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  takeaway?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  summary?: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  handle?: string;
}

export interface CapabilityGroup {
  category: string;
  items: string[];
}

export interface ContactInfo {
  heading: string;
  subheading: string;
  availability: string;
  email: string;
  location: string;
  timezone: string;
  formHeading: string;
  formSubtitle: string;
  socialLinks: SocialLink[];
}

export interface CVFrontmatter {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
}
