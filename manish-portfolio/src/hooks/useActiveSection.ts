/**
 * USE ACTIVE SECTION HOOK
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Detects which section is currently visible in viewport for navigation highlighting
 */

"use client";

import { useEffect, useState } from "react";

interface UseActiveSectionOptions {
  sectionIds: string[];
  offset?: number;
}

export function useActiveSection({ sectionIds, offset = 100 }: UseActiveSectionOptions) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeSection;
}
