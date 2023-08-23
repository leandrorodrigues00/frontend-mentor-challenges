export interface JobConfig {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface CategoriesConfig {
  role: string | null;
  level: string | null;
  languages: Array<string> | null;
  tools: Array<string> | null;
}
