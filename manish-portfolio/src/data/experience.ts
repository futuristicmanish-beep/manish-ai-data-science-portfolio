/**
 * EXPERIENCE DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Professional and project-based experience
 */

export type ExperienceType =
  | "internship"
  | "program"
  | "research"
  | "hackathon"
  | "fellowship"
  | "training"
  | "project"
  | "other";

export interface Experience {
  id: string;
  title: string;
  organization?: string;
  type: ExperienceType;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  location?: string;
  description?: string;
  technologies?: string[];
  skills?: string[];
  responsibilities?: string[];
  achievements?: string[];
  relatedProject?: string;
  order: number;
}

// Currently building experience through projects and learning
// Add verified experience entries here as they occur
export const experience: Experience[] = [];

export const getExperienceById = (id: string) =>
  experience.find(exp => exp.id === id);

export const getExperienceByType = (type: ExperienceType) =>
  experience.filter(exp => exp.type === type);

export const getCurrentExperience = () =>
  experience.filter(exp => exp.current);
