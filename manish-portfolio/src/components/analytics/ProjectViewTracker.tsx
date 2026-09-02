/**
 * PROJECT VIEW TRACKER
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Client-side component to track project case study views
 */

"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

interface ProjectViewTrackerProps {
  projectSlug: string;
  projectTitle: string;
}

/**
 * Component to track project case study views
 * Should be placed in project case study pages
 */
export function ProjectViewTracker({ projectSlug, projectTitle }: ProjectViewTrackerProps) {
  useEffect(() => {
    // Track project view when component mounts
    analytics.trackProjectView(projectSlug, projectTitle);
  }, [projectSlug, projectTitle]);

  // This component doesn't render anything
  return null;
}