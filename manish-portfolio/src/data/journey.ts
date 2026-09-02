/**
 * JOURNEY DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Educational and learning journey information
 */

export interface JourneyEntry {
  id: string;
  year: string;
  title: string;
  description: string;
  category: "education" | "learning" | "project" | "milestone";
  status?: "completed" | "ongoing" | "planned";
  technologies?: string[];
  relatedProject?: string;
}

export const journeyData = {
  // About introduction
  about: {
    title: "About Me",
    subtitle: "A technology-focused learner building projects across AI, data, and digital products",
    description: "I'm passionate about exploring artificial intelligence and data science through hands-on projects. My journey combines academic learning with practical implementation, focusing on solving real-world problems through technology.",
  },

  // Who I Am
  whoIAm: {
    title: "Who I Am",
    points: [
      "AI & Data Science student with a passion for technology",
      "Building practical projects to learn and apply new concepts",
      "Exploring machine learning, data analysis, and full-stack development",
      "Interested in healthcare technology and intelligent systems",
      "Continuously learning and experimenting with emerging technologies",
    ],
  },

  // Education
  education: {
    degree: "B.Tech in AI & Data Science",
    institution: "Coimbatore Institute of Engineering and Technology",
    period: "2025 – 2029",
    status: "ongoing" as const,
    focus: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Software Engineering",
    ],
  },

  // Learning Journey Timeline
  timeline: [
    {
      id: "programming-start",
      year: "2025",
      title: "Education Begins",
      description: "Started B.Tech in AI & Data Science, beginning the formal journey into technology",
      category: "education" as const,
      status: "completed" as const,
    },
    {
      id: "programming-foundations",
      year: "2025",
      title: "Programming Foundations",
      description: "Learning programming fundamentals and problem-solving approaches",
      category: "learning" as const,
      status: "ongoing" as const,
      technologies: ["Python", "C", "Problem Solving"],
    },
    {
      id: "data-science-exploration",
      year: "2025",
      title: "Data Science Exploration",
      description: "Exploring data analysis, visualization, and statistical methods",
      category: "learning" as const,
      status: "ongoing" as const,
      technologies: ["Python", "Pandas", "NumPy", "Data Visualization"],
    },
    {
      id: "ai-ml-journey",
      year: "2025 - 2026",
      title: "AI & Machine Learning",
      description: "Diving into artificial intelligence and machine learning concepts",
      category: "learning" as const,
      status: "ongoing" as const,
      technologies: ["Machine Learning", "Deep Learning", "AI"],
    },
    {
      id: "web-development",
      year: "2025 - 2026",
      title: "Full-Stack Development",
      description: "Building web applications and learning modern development frameworks",
      category: "learning" as const,
      status: "ongoing" as const,
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
      id: "healthcare-tech",
      year: "2025 - 2026",
      title: "Healthcare Technology",
      description: "Applying AI and data science to healthcare challenges",
      category: "project" as const,
      status: "ongoing" as const,
      technologies: ["Healthcare", "AI", "Full-Stack"],
      relatedProject: "zynetra",
    },
    {
      id: "ai-products",
      year: "Future",
      title: "AI Products & Solutions",
      description: "Building intelligent products that solve real-world problems",
      category: "milestone" as const,
      status: "planned" as const,
    },
  ] as JourneyEntry[],

  // Learning Areas
  learningAreas: [
    {
      id: "programming",
      title: "Programming",
      description: "Learning Python, C, and software development fundamentals",
      status: "Learning" as const,
      technologies: ["Python", "C", "Problem Solving"],
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Exploring data analysis, visualization, and statistical methods",
      status: "Exploring" as const,
      technologies: ["Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Building foundations in machine learning and artificial intelligence",
      status: "Learning" as const,
      technologies: ["Machine Learning", "Deep Learning", "Neural Networks"],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Building modern web applications with React and Next.js",
      status: "Building" as const,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Learning server-side development and API design",
      status: "Learning" as const,
      technologies: ["Node.js", "REST APIs"],
    },
    {
      id: "databases",
      title: "Databases",
      description: "Understanding data storage and database management",
      status: "Learning" as const,
      technologies: ["PostgreSQL", "Database Design"],
    },
    {
      id: "healthcare-tech",
      title: "Healthcare Technology",
      description: "Applying technology to solve healthcare challenges",
      status: "Building" as const,
      technologies: ["Healthcare", "AI", "Data Integration"],
    },
  ],

  // Project Building Process
  buildingProcess: [
    {
      step: "Learn",
      description: "Study concepts and understand fundamentals",
      icon: "book",
    },
    {
      step: "Experiment",
      description: "Try different approaches and methods",
      icon: "flask",
    },
    {
      step: "Build",
      description: "Create working implementations",
      icon: "code",
    },
    {
      step: "Test",
      description: "Validate and refine solutions",
      icon: "check",
    },
    {
      step: "Improve",
      description: "Iterate and enhance continuously",
      icon: "arrow-up",
    },
  ],

  // Healthcare Technology
  healthcareTech: {
    title: "Healthcare Technology",
    subtitle: "Exploring how technology can transform healthcare delivery",
    description: "Healthcare is a complex ecosystem that requires seamless coordination between patients, providers, and resources. Technology can bridge these gaps and create intelligent, data-driven solutions.",
    ecosystem: [
      "Patients",
      "Hospitals",
      "Doctors",
      "Blood Resources",
      "Ambulances",
      "Pharmacies",
      "Healthcare Data",
      "AI & Analytics",
    ],
    project: {
      name: "ZYNETRA Healthcare",
      tagline: "Healthcare Ecosystem Platform",
      description: "A learning project exploring how technology can connect healthcare stakeholders and improve patient care through intelligent coordination.",
      note: "Project in development - learning and building phase",
    },
  },

  // Why I Build
  whyIBuild: {
    title: "Why I Build",
    points: [
      "Learning is most effective through hands-on implementation",
      "Real projects teach problem-solving better than theory alone",
      "Technology has the power to solve meaningful problems",
      "Building products helps understand the complete development cycle",
      "Every project is an opportunity to experiment and grow",
      "Practical experience complements academic learning",
    ],
  },

  // Vision
  vision: {
    title: "My Vision",
    statement: "To develop expertise in artificial intelligence and data science, building intelligent products that solve real-world problems and make a positive impact on society.",
    focus: [
      "AI & Machine Learning Solutions",
      "Healthcare Technology Innovation",
      "Data-Driven Product Development",
      "Intelligent Systems Design",
      "Continuous Learning & Growth",
    ],
  },
} as const;
