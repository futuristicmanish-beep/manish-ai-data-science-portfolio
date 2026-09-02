/**
 * PROJECTS DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Project showcase and case studies
 */

export type ProjectStatus = 
  | "concept" 
  | "in-development" 
  | "prototype" 
  | "completed" 
  | "learning-project";

export type ProjectCategory = 
  | "ai" 
  | "data-science" 
  | "healthcare" 
  | "web" 
  | "full-stack"
  | "tools";

export interface ProjectChallenge {
  title: string;
  description: string;
  solution?: string;
}

export interface CaseStudy {
  problem?: string;
  solution?: string;
  role?: string[];
  architecture?: string;
  challenges?: ProjectChallenge[];
  outcome?: string;
  learnings?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory[];
  technologies: string[];
  skills: string[];
  status: ProjectStatus;
  featured?: boolean;
  coverImage?: string;
  gallery?: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudy?: CaseStudy;
  order: number;
}

export const projects: Project[] = [
  {
    id: "zynetra",
    slug: "zynetra-healthcare",
    title: "ZYNETRA Healthcare",
    shortDescription: "Healthcare ecosystem platform connecting patients, hospitals, and healthcare services",
    description: "A learning project exploring how technology can transform healthcare delivery by connecting patients, hospitals, doctors, blood banks, ambulances, and pharmacies through an intelligent digital platform.",
    category: ["healthcare", "full-stack", "ai"],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Python",
      "Tailwind CSS"
    ],
    skills: ["react", "nextjs", "typescript", "nodejs", "postgresql", "supabase", "python", "healthcare-tech", "healthcare-ai"],
    status: "in-development",
    featured: true,
    coverImage: "/images/projects/zynetra-cover.jpg",
    gallery: [
      "/images/projects/zynetra-1.jpg",
      "/images/projects/zynetra-2.jpg",
      "/images/projects/zynetra-3.jpg"
    ],
    caseStudy: {
      problem: "Healthcare systems often struggle with fragmented services, where patients face challenges finding doctors, hospitals, blood resources, and emergency services quickly. Critical healthcare information is scattered across multiple platforms, leading to delays in emergency situations and inefficient resource allocation.",
      solution: "ZYNETRA Healthcare aims to create a unified digital ecosystem that connects all healthcare stakeholders. The platform provides real-time information about healthcare services, enabling patients to find doctors, locate blood banks, book ambulances, and access pharmacy services through a single interface. The system uses intelligent matching to connect patients with appropriate healthcare resources based on location, availability, and specific needs.",
      role: [
        "Project planning and system design",
        "Full-stack development (React, Next.js, Node.js)",
        "Database design and implementation",
        "Healthcare data modeling",
        "User interface design",
        "API development"
      ],
      architecture: "The platform follows a modern full-stack architecture with Next.js for the frontend, Node.js for backend services, and PostgreSQL/Supabase for data storage. The system includes user authentication, role-based access control, real-time data updates, and location-based services for finding nearby healthcare resources.",
      challenges: [
        {
          title: "Healthcare Data Modeling",
          description: "Designing a database schema that accommodates different healthcare entities (patients, doctors, hospitals, blood banks) with their unique attributes and relationships.",
          solution: "Created a flexible relational database design with normalized tables and proper foreign key relationships to maintain data integrity while supporting complex healthcare workflows."
        },
        {
          title: "Real-time Resource Availability",
          description: "Ensuring that information about blood bank inventory, ambulance availability, and doctor schedules remains accurate and up-to-date.",
          solution: "Implemented status update mechanisms and timestamp tracking to maintain real-time availability information."
        },
        {
          title: "Location-Based Services",
          description: "Implementing efficient location-based search to help users find the nearest healthcare services quickly.",
          solution: "Integrated geographic data handling and proximity-based search algorithms to provide relevant results based on user location."
        }
      ],
      outcome: "Successfully developed a working prototype demonstrating the core concepts of a unified healthcare platform. The project showcases full-stack development capabilities, database design skills, and understanding of healthcare technology requirements.",
      learnings: [
        "Healthcare systems require careful attention to data sensitivity and privacy",
        "Complex multi-stakeholder platforms need clear role-based access control",
        "Real-time data synchronization is critical for healthcare applications",
        "Full-stack development requires strong understanding of both frontend and backend architecture",
        "Database design significantly impacts application scalability and performance",
        "User experience is crucial in healthcare applications where time-sensitive decisions are common"
      ]
    },
    order: 1
  },
  {
    id: "portfolio",
    slug: "ai-portfolio",
    title: "AI & Data Science Portfolio",
    shortDescription: "Premium portfolio website built with Next.js, TypeScript, and modern web technologies",
    description: "A futuristic, premium portfolio website showcasing AI and data science projects, skills, and professional journey. Built with modern web technologies and focusing on performance, accessibility, and user experience.",
    category: ["web", "full-stack"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Kiro"
    ],
    skills: ["nextjs", "react", "typescript", "tailwind", "html", "css", "javascript", "kiro"],
    status: "in-development",
    featured: false,
    coverImage: "/images/projects/portfolio-cover.jpg",
    caseStudy: {
      problem: "As an AI & Data Science student, I needed a professional online presence to showcase my projects, skills, and learning journey to potential recruiters and collaborators. Generic portfolio templates don't effectively communicate technical capabilities or project depth.",
      solution: "Designed and developed a custom portfolio website with a futuristic, premium aesthetic that reflects my interest in technology and AI. The site features an interactive skills ecosystem, detailed project case studies, and a comprehensive journey timeline. Built with modern web technologies to demonstrate full-stack development capabilities.",
      role: [
        "UI/UX planning and design",
        "Frontend development with React and Next.js",
        "Design system creation",
        "Component architecture",
        "Theme system implementation",
        "Animation integration",
        "Responsive design",
        "Accessibility implementation"
      ],
      architecture: "Built on Next.js 16 with App Router for optimal performance and SEO. Uses TypeScript for type safety, Tailwind CSS for styling, and Framer Motion for animations. Implements a comprehensive design system with reusable components, dark/light theme support, and responsive layouts. Follows modern React patterns with client/server component separation.",
      challenges: [
        {
          title: "Design System Architecture",
          description: "Creating a cohesive design system that works across multiple sections while maintaining visual consistency.",
          solution: "Developed centralized design tokens, reusable UI components (Card, Button, Badge, etc.), and consistent animation patterns. Used CSS custom properties for theming."
        },
        {
          title: "Theme System Implementation",
          description: "Implementing dark/light/system theme support without flash or hydration issues.",
          solution: "Used proper Next.js patterns with localStorage persistence, system preference detection, and flash prevention through script injection."
        },
        {
          title: "Performance Optimization",
          description: "Maintaining fast load times while including animations and interactive features.",
          solution: "Leveraged Next.js static generation, proper code splitting, optimized images, and GPU-accelerated CSS animations."
        }
      ],
      outcome: "Successfully launched a professional portfolio that effectively communicates technical skills and project experience. The site demonstrates proficiency in modern web development, design principles, and attention to detail.",
      learnings: [
        "Design systems are crucial for maintaining consistency in larger projects",
        "TypeScript significantly improves code quality and developer experience",
        "Accessibility should be considered from the start, not added later",
        "Animation can enhance user experience when used thoughtfully",
        "Performance optimization requires understanding of how frameworks work",
        "Responsive design is essential for reaching users on all devices"
      ]
    },
    order: 2
  }
];

export const featuredProjects = projects.filter(p => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find(p => p.slug === slug);

export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter(p => p.category.includes(category));

export const getRelatedProjects = (projectId: string, limit = 3) => {
  const project = projects.find(p => p.id === projectId);
  if (!project) return [];
  
  return projects
    .filter(p => 
      p.id !== projectId && 
      p.category.some(cat => project.category.includes(cat))
    )
    .slice(0, limit);
};

export const getNextProject = (currentSlug: string) => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) return null;
  return projects[currentIndex + 1];
};

export const getPreviousProject = (currentSlug: string) => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === 0) return null;
  return projects[currentIndex - 1];
};

export const projectCategories = {
  ai: { id: "ai", name: "AI", icon: "brain" },
  "data-science": { id: "data-science", name: "Data Science", icon: "bar-chart" },
  healthcare: { id: "healthcare", name: "Healthcare", icon: "heart-pulse" },
  web: { id: "web", name: "Web", icon: "globe" },
  "full-stack": { id: "full-stack", name: "Full Stack", icon: "layers" },
  tools: { id: "tools", name: "Tools", icon: "wrench" },
} as const;
