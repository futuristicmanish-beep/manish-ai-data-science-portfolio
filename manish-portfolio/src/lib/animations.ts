/**
 * ANIMATION UTILITIES
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Reusable Framer Motion animation variants and configurations
 */

import { Variants } from "framer-motion";

/**
 * Fade In Animation
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Fade In Up Animation
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Fade In Down Animation
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Scale In Animation
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Slide In Left Animation
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Slide In Right Animation
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Stagger Container
 * Use with staggerChildren
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger Item
 * Use inside staggerContainer
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Default transition config
 */
export const defaultTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

/**
 * Spring transition config
 */
export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

/**
 * Viewport config for scroll animations
 */
export const viewportConfig = {
  once: true, // Animation triggers only once
  margin: "-100px", // Start animation 100px before entering viewport
  amount: 0.3, // Trigger when 30% of element is visible
};

/**
 * Get reduced motion config
 * Returns null animations if user prefers reduced motion
 */
export function getReducedMotionVariants(variants: Variants): Variants {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Return immediate, no-animation variants
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }
  return variants;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Get transition with reduced motion support
 */
export function getTransition(transition: Record<string, unknown> | { duration: number }) {
  return prefersReducedMotion() ? { duration: 0 } : transition;
}
