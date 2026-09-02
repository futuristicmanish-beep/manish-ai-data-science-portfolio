/**
 * NAVIGATION DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Centralized navigation links and structure
 */

import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export const secondaryNavigation: NavItem[] = [
  // Future: Add specialized navigation if needed
];

export const footerNavigation: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks = [
  // Verified contact information
  { 
    name: "GitHub", 
    url: "https://github.com/futuristicmanish-beep",
    icon: "github", 
    label: "Visit GitHub Profile" 
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/manish-v-8893893ab",
    icon: "linkedin", 
    label: "Connect on LinkedIn" 
  },
  { 
    name: "Email", 
    url: "mailto:futuristic.manish@gmail.com",
    icon: "email", 
    label: "Send an Email" 
  },
];

export const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
];
