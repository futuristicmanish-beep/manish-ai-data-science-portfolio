/**
 * EDUCATION DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Academic education information
 */

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  status: "ongoing" | "completed";
  description?: string;
  focus?: string[];
  activities?: string[];
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: "btech-ai-ds",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence & Data Science",
    institution: "Coimbatore Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    startDate: "2025",
    endDate: "2029",
    status: "ongoing",
    description: "Comprehensive program covering artificial intelligence, machine learning, data science, and software engineering fundamentals. Building strong foundation in AI/ML algorithms, data structures, programming, and practical application development.",
    focus: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Systems",
    ],
  },
];

export const getEducationById = (id: string) =>
  education.find(edu => edu.id === id);
