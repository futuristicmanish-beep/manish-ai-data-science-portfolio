/**
 * PROFILE DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Centralized personal information for easy updates
 */

export const profileData = {
  name: "Manish Vidhya Narayanan",
  title: "AI & Data Science",
  tagline: "Building intelligent solutions through AI, data, and technology",
  bio: "Passionate about creating data-driven digital experiences through technology, experimentation, and real-world projects. Focused on machine learning, healthcare technology, and innovative AI solutions.",
  
  // Status indicators
  status: {
    primary: "Building",
    secondary: "Learning",
    tertiary: "Innovating",
  },
  
  // Media assets
  // NOTE: Replace these placeholder paths with actual assets before deployment
  // Place files in public/ directory and update paths accordingly
  assets: {
    profileImage:"/images/profile.jpeg", // Replace with actual image
    resume: "/documents/manish-resume.pdf", // Add actual resume or remove CTA
    voiceIntro: "/audio/manish-introduction.mp3", // Optional: add actual audio
    videoIntro: "/videos/manish-introduction.mp4", // Optional: add actual video
  },
  
  // Hero actions
  actions: {
    primary: {
      label: "View Projects",
      href: "#projects",
      type: "scroll" as const,
    },
    secondary: {
      label: "Contact Me",
      href: "#contact",
      type: "scroll" as const,
    },
    tertiary: {
      label: "My Skills",
      href: "#skills",
      type: "scroll" as const,
    },
  },
} as const;
