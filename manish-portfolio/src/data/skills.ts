/**
 * SKILLS DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Technical skills and capabilities
 */

export type SkillStatus = "learning" | "building" | "applying" | "exploring";

export type SkillCategory =
  | "programming"
  | "data-analytics"
  | "ai-ml"
  | "web-frontend"
  | "web-backend"
  | "database"
  | "tools"
  | "healthcare";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  status: SkillStatus;
  featured?: boolean;
  technologies?: string[];
  relatedProjects?: string[];
  icon?: string;
}

export const skillCategories = {
  programming: {
    id: "programming",
    name: "Programming",
    description: "Core programming languages and problem-solving",
    icon: "code",
  },
  "data-analytics": {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data analysis, visualization, and statistical methods",
    icon: "bar-chart",
  },
  "ai-ml": {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning",
    icon: "brain",
  },
  "web-frontend": {
    id: "web-frontend",
    name: "Web Development",
    description: "Frontend development and modern web technologies",
    icon: "globe",
  },
  "web-backend": {
    id: "web-backend",
    name: "Backend Development",
    description: "Server-side development and APIs",
    icon: "server",
  },
  database: {
    id: "database",
    name: "Databases",
    description: "Data storage and database management",
    icon: "database",
  },
  tools: {
    id: "tools",
    name: "Tools & Platforms",
    description: "Development tools and platforms",
    icon: "wrench",
  },
  healthcare: {
    id: "healthcare",
    name: "Healthcare Technology",
    description: "Healthcare applications and health-tech solutions",
    icon: "heart-pulse",
  },
} as const;

export const skills: Skill[] = [
  // Programming
  {
    id: "python",
    name: "Python",
    category: "programming",
    description: "Primary programming language for AI, data science, and automation",
    status: "building",
    featured: true,
    technologies: ["Data Analysis", "AI/ML", "Automation", "Scripting"],
    relatedProjects: ["zynetra"],
  },
  {
    id: "c",
    name: "C",
    category: "programming",
    description: "Learning programming fundamentals and system-level concepts",
    status: "learning",
    technologies: ["Systems Programming", "Algorithms", "Data Structures"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "programming",
    description: "Web development and interactive applications",
    status: "building",
    technologies: ["Web", "Interactive UI", "DOM Manipulation"],
    relatedProjects: ["portfolio"],
  },

  // Data & Analytics
  {
    id: "pandas",
    name: "Pandas",
    category: "data-analytics",
    description: "Data manipulation and analysis with Python",
    status: "learning",
    technologies: ["Data Cleaning", "Data Transformation", "Analysis"],
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "data-analytics",
    description: "Numerical computing and array operations",
    status: "learning",
    technologies: ["Numerical Analysis", "Array Operations", "Scientific Computing"],
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    category: "data-analytics",
    description: "Creating visual representations of data",
    status: "exploring",
    technologies: ["Matplotlib", "Charts", "Graphs", "Dashboards"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "data-analytics",
    description: "Database queries and data retrieval",
    status: "learning",
    featured: true,
    technologies: ["Queries", "Joins", "Data Analysis"],
    relatedProjects: ["zynetra"],
  },

  // AI & Machine Learning
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "ai-ml",
    description: "Building and training machine learning models",
    status: "learning",
    featured: true,
    technologies: ["Supervised Learning", "Model Training", "Predictions"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "ai-ml",
    description: "Exploring AI concepts and applications",
    status: "learning",
    technologies: ["Problem Solving", "Intelligent Systems", "AI Applications"],
  },
  {
    id: "data-science",
    name: "Data Science",
    category: "ai-ml",
    description: "Data-driven insights and statistical analysis",
    status: "learning",
    featured: true,
    technologies: ["Statistical Analysis", "Data Modeling", "Insights"],
  },

  // Web Frontend
  {
    id: "html",
    name: "HTML",
    category: "web-frontend",
    description: "Semantic markup and web structure",
    status: "building",
    technologies: ["Semantic HTML", "Accessibility", "Web Standards"],
    relatedProjects: ["portfolio"],
  },
  {
    id: "css",
    name: "CSS",
    category: "web-frontend",
    description: "Styling and layout for modern web applications",
    status: "building",
    technologies: ["Responsive Design", "Flexbox", "Grid", "Animations"],
    relatedProjects: ["portfolio"],
  },
  {
    id: "react",
    name: "React",
    category: "web-frontend",
    description: "Building interactive user interfaces",
    status: "building",
    featured: true,
    technologies: ["Components", "Hooks", "State Management", "React Ecosystem"],
    relatedProjects: ["portfolio", "zynetra"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "web-frontend",
    description: "Full-stack React framework with server-side rendering",
    status: "building",
    featured: true,
    technologies: ["App Router", "SSR", "API Routes", "Optimization"],
    relatedProjects: ["portfolio"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "web-frontend",
    description: "Type-safe JavaScript for robust applications",
    status: "building",
    featured: true,
    technologies: ["Type Safety", "Interfaces", "Type Inference", "Code Quality"],
    relatedProjects: ["portfolio", "zynetra"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "web-frontend",
    description: "Utility-first CSS framework for rapid UI development",
    status: "building",
    technologies: ["Utility Classes", "Responsive Design", "Custom Themes"],
    relatedProjects: ["portfolio"],
  },

  // Web Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "web-backend",
    description: "Server-side JavaScript runtime",
    status: "learning",
    technologies: ["Server", "APIs", "Backend Development"],
    relatedProjects: ["zynetra"],
  },

  // Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    description: "Relational database management system",
    status: "learning",
    featured: true,
    technologies: ["Relational DB", "Queries", "Data Modeling"],
    relatedProjects: ["zynetra"],
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "database",
    description: "Backend-as-a-Service with PostgreSQL",
    status: "exploring",
    technologies: ["Database", "Authentication", "Real-time", "APIs"],
    relatedProjects: ["zynetra"],
  },

  // Tools & Platforms
  {
    id: "git",
    name: "Git",
    category: "tools",
    description: "Version control and collaboration",
    status: "building",
    technologies: ["Version Control", "Branching", "Collaboration"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    description: "Code hosting and collaboration platform",
    status: "building",
    technologies: ["Repositories", "Version Control", "Collaboration"],
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    description: "Code editor and development environment",
    status: "building",
    technologies: ["Development", "Extensions", "Debugging"],
  },
  {
    id: "kiro",
    name: "Kiro",
    category: "tools",
    description: "AI-powered development environment",
    status: "building",
    technologies: ["AI Assistant", "Development", "Automation"],
    relatedProjects: ["portfolio"],
  },

  // Healthcare Technology
  {
    id: "healthcare-tech",
    name: "Healthcare Technology",
    category: "healthcare",
    description: "Applying technology to healthcare challenges",
    status: "building",
    technologies: ["Health Data", "Patient Care", "Healthcare Systems"],
    relatedProjects: ["zynetra"],
  },
  {
    id: "healthcare-ai",
    name: "Healthcare AI",
    category: "healthcare",
    description: "AI applications in healthcare and patient care",
    status: "exploring",
    technologies: ["AI", "Healthcare", "Patient Systems"],
    relatedProjects: ["zynetra"],
  },
];

export const featuredSkills = skills.filter((skill) => skill.featured);

export const getSkillsByCategory = (category: SkillCategory) =>
  skills.filter((skill) => skill.category === category);

export const getSkillById = (id: string) =>
  skills.find((skill) => skill.id === id);
