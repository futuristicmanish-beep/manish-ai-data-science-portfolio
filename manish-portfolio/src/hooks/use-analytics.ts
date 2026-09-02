/**
 * USE ANALYTICS HOOK
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * React hook for analytics initialization and page tracking
 */

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics, trackPageView, isAnalyticsEnabled } from "@/lib/analytics";

/**
 * Hook to initialize analytics and track page views
 * Call this in the root layout or app component
 */
export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      return;
    }

    // Initialize analytics on first load
    if (isAnalyticsEnabled()) {
      initAnalytics();
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (isAnalyticsEnabled()) {
      trackPageView();
    }
  }, [pathname]);

  return {
    enabled: isAnalyticsEnabled(),
    pathname,
  };
}