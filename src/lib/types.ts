export type ProjectStatus = 'Completed' | 'In Development' | 'On Hold';

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  status: ProjectStatus;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  date: string; // ISO 8601 format: "YYYY-MM-DD"
};
