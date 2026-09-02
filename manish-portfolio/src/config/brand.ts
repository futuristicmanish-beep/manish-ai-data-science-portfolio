/**
 * PERSONAL BRAND CONFIGURATION
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Centralized personal brand identity and positioning
 * All information derived from verified portfolio data
 */

/**
 * Core Personal Identity
 */
export const personalBrand = {
  // Basic Identity
  identity: {
    name: "Manish Vidhya Narayanan",
    role: "AI & Data Science Student",
    field: "Artificial Intelligence & Data Science",
    shortBio: "Building intelligent solutions through AI, data, and technology",
    longBio: "I'm passionate about exploring artificial intelligence and data science through hands-on projects. My journey combines academic learning with practical implementation, focusing on solving real-world problems through technology.",
  },

  // Current Focus Areas (based on actual projects and learning)
  currentFocus: [
    {
      id: "ai-ml",
      area: "AI & Machine Learning",
      description: "Building foundations in machine learning and artificial intelligence",
      status: "Learning" as const,
      icon: "brain",
      project: undefined,
    },
    {
      id: "healthcare-tech",
      area: "Healthcare Technology",
      description: "Applying technology to solve healthcare challenges",
      status: "Building" as const,
      icon: "heart-pulse",
      project: "zynetra" as string | undefined,
    },
    {
      id: "full-stack",
      area: "Full Stack Development",
      description: "Building modern web applications with React and Next.js",
      status: "Building" as const,
      icon: "layers",
      project: undefined,
    },
    {
      id: "data-science",
      area: "Data Science",
      description: "Data-driven insights and statistical analysis",
      status: "Learning" as const,
      icon: "bar-chart",
      project: undefined,
    },
  ],

  // Core Interests (verified from journey data)
  coreInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Healthcare Technology",
    "Full Stack Development",
    "Software Engineering",
  ],

  // Technical Direction
  technicalDirection: {
    primary: "AI & Data Science",
    secondary: "Healthcare Technology",
    tertiary: "Full Stack Development",
  },

  // Value Proposition (what makes this portfolio different)
  valueProposition: {
    statement: "Building real projects to learn and apply AI, data science, and software engineering concepts",
    differentiators: [
      "Learning through hands-on implementation",
      "Combining AI with healthcare innovation",
      "Building full-stack applications",
      "Transparent about learning journey",
      "Project-based skill development",
    ],
  },

  // Learning Philosophy
  learningApproach: {
    methodology: "Learn → Experiment → Build → Test → Improve",
    emphasis: "Project-based learning with real-world applications",
    focus: "Understanding concepts through practical implementation",
  },

  // Currently Building (active major projects)
  currentlyBuilding: [
    {
      id: "zynetra",
      name: "ZYNETRA Healthcare",
      tagline: "Healthcare Ecosystem Platform",
      description: "A learning project exploring how technology can connect healthcare stakeholders and improve patient care through intelligent coordination",
      status: "in-development" as const,
      category: ["healthcare", "ai", "full-stack"],
      impact: "Healthcare technology exploration and learning",
    },
  ],

  // Learning Now (current active learning areas)
  learningNow: [
    {
      area: "Python",
      category: "Programming",
      status: "Building" as const,
    },
    {
      area: "Machine Learning",
      category: "AI & ML",
      status: "Learning" as const,
    },
    {
      area: "Data Science",
      category: "Data & Analytics",
      status: "Learning" as const,
    },
    {
      area: "React & Next.js",
      category: "Web Development",
      status: "Building" as const,
    },
    {
      area: "PostgreSQL",
      category: "Databases",
      status: "Learning" as const,
    },
    {
      area: "Healthcare Technology",
      category: "Domain Knowledge",
      status: "Building" as const,
    },
  ],

  // Technical Story (progression pathway)
  technicalStory: [
    {
      stage: "Foundation",
      focus: "Programming fundamentals and problem-solving",
      technologies: ["Python", "C"],
      period: "2025",
    },
    {
      stage: "Exploration",
      focus: "Data science and web development",
      technologies: ["Pandas", "NumPy", "React", "Next.js"],
      period: "2025-2026",
    },
    {
      stage: "Application",
      focus: "AI/ML and healthcare technology",
      technologies: ["Machine Learning", "Healthcare Tech", "Full Stack"],
      period: "2026",
    },
    {
      stage: "Innovation",
      focus: "Building intelligent products",
      technologies: ["AI", "Data Science", "Healthcare"],
      period: "Future",
    },
  ],

  // Brand Positioning
  positioning: {
    primary: "AI & Data Science student building real projects",
    secondary: "Healthcare technology enthusiast",
    tertiary: "Full-stack developer",
    unique: "Combining AI, data science, and healthcare innovation through practical learning",
  },
} as const;

/**
 * Focus Area Status Types
 */
export type FocusStatus = "Learning" | "Building" | "Applying" | "Exploring";

/**
 * Get current focus areas
 */
export const getCurrentFocus = () => personalBrand.currentFocus;

/**
 * Get currently building projects
 */
export const getCurrentlyBuilding = () => personalBrand.currentlyBuilding;

/**
 * Get current learning areas
 */
export const getLearningNow = () => personalBrand.learningNow;

/**
 * Get technical story/progression
 */
export const getTechnicalStory = () => personalBrand.technicalStory;

/**
 * Get value proposition
 */
export const getValueProposition = () => personalBrand.valueProposition;

/**
 * Get brand positioning statement
 */
export const getBrandPositioning = () => personalBrand.positioning;
