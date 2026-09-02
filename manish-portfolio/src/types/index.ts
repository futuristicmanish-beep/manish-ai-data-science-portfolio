/**
 * COMMON TYPES
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Shared TypeScript types and interfaces
 */

/**
 * Theme Types
 */
export type Theme = "light" | "dark" | "system";

/**
 * Status Types
 */
export type Status = "idle" | "loading" | "success" | "error";

/**
 * Common Props
 */
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Meta Information
 */
export interface MetaInfo {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

/**
 * Social Links
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

/**
 * Navigation Item
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

/**
 * SEO Props
 */
export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}
