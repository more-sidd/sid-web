export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
  images?: string[];      // photo strip in card + gallery in modal
  skills?: string[];      // skill tags shown at bottom of modal
  description: string;
  fullDescription: string;
  status?: 'complete' | 'in-progress';
  objectives: string[];
  results: string[];
  keyTakeaways: string[];
  goals: string[];
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

export interface BlogPost {
  slug: string;            // filename without .md — also the URL: #/blog/<slug>
  kind: 'blog' | 'news';   // which folder it came from; drives which section shows it
  title: string;
  date: string;            // ISO, e.g. 2026-08-15
  excerpt: string;         // falls back to the first paragraph
  tags: string[];
  cover?: string;          // path under /public, e.g. /blog/rover.jpg
  coverAlt?: string;
  draft: boolean;          // draft: true keeps it off the live site
  readingTime: number;     // minutes
  body: string;            // markdown, frontmatter stripped
}

export interface Comment {
  id: string;
  post_slug: string;
  author_name: string;
  body: string;
  created_at: string;
  is_hidden: boolean;
}

export interface GalleryItem {
  src: string;
  caption: string;
  /** Two buckets only: 'robotics' for project + debugging work, 'fun' for
      everything social, outdoors and event-related. */
  category: 'robotics' | 'fun';
  /** true for .mp4 — the gallery renders a <video> instead of an <img>. */
  video?: boolean;
}
