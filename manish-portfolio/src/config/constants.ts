/**
 * CONSTANTS
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Global constants and configuration values
 */

/**
 * Site Information
 */
export const SITE_INFO = {
  name: "Manish Vidhya Narayanan",
  title: "Manish Vidhya Narayanan | AI & Data Science",
  description:
    "AI & Data Science professional specializing in machine learning, healthcare technology, and innovative solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://manishvidhya.com",
  author: "Manish Vidhya Narayanan",
} as const;

/**
 * Contact Information
 * Verified contact details for production deployment
 */
export const CONTACT_INFO = {
  email: "futuristic.manish@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
} as const;

/**
 * Social Links
 * Verified profile URLs for production deployment
 */
export const SOCIAL_LINKS = {
  github: "https://github.com/futuristicmanish-beep",
  linkedin: "https://www.linkedin.com/in/manish-v-8893893ab",
  // Add more as needed
} as const;

/**
 * Breakpoints (matching Tailwind)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Animation Durations
 */
export const ANIMATION_DURATION = {
  fast: 150,
  base: 250,
  slow: 350,
  slower: 500,
} as const;

/**
 * Z-Index Layers
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;
