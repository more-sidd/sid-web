export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  results: string[];
  keyTakeaways: string[];
  github?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  abstract: string;
  pdfUrl?: string;
  externalUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
  courses?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
