/**
 * ANALYTICS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Client-side analytics initialization and page tracking
 */

"use client";

import { useAnalytics } from "@/hooks/use-analytics";

/**
 * Analytics component for initializing Google Analytics
 * This component handles:
 * - Analytics initialization on client-side
 * - Automatic page view tracking on route changes
 * - Safe fallback when analytics is disabled
 */
export function Analytics() {
  const { enabled } = useAnalytics();

  // This component doesn't render anything visible
  // It only handles analytics initialization and tracking
  
  if (process.env.NODE_ENV === 'development' && enabled) {
    console.info('Analytics initialized for development');
  }

  return null;
}