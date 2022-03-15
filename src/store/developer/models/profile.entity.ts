export interface IDeveloperProfile {
  id: string;
  name: string;
  initials: string;
  image: string;
  summary: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  twitter?: string;
  webpage?: string;
}
