/**
 * ACHIEVEMENTS DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Achievements, recognitions, and accomplishments
 */

export type AchievementType =
  | "hackathon"
  | "competition"
  | "academic"
  | "leadership"
  | "innovation"
  | "program"
  | "recognition"
  | "project";

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  event?: string;
  type: AchievementType;
  date?: string;
  placement?: string;
  description?: string;
  image?: string;
  credentialUrl?: string;
  relatedProject?: string;
  technologies?: string[];
  skills?: string[];
  featured?: boolean;
  order: number;
}

// Verified achievements only - add as they occur
// Example: MindSpark hackathon participation
export const achievements: Achievement[] = [
  {
    id: "mindspark-future-6-hackathon",
    title: "MindSpark",
    event: "Future 6.0 — YI Chapter Coimbatore",
    organization: "Young Indians (CII)",
    type: "hackathon",
    date: "2026",
    placement: "Participant",
    description: "Healthcare track hackathon focused on solving real-world challenges in the healthcare ecosystem. Explored innovative solutions for patient care coordination and resource management.",
    relatedProject: "zynetra",
    technologies: ["Healthcare", "AI", "Full-Stack Development"],
    skills: ["Problem Solving", "Team Collaboration", "Healthcare Technology"],
    order: 1,
  },
];

export const getAchievementById = (id: string) =>
  achievements.find(achievement => achievement.id === id);

export const getAchievementsByType = (type: AchievementType) =>
  achievements.filter(achievement => achievement.type === type);

export const getFeaturedAchievements = () =>
  achievements.filter(achievement => achievement.featured);
