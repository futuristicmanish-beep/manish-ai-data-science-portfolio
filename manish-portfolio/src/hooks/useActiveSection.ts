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
      // Find the topmost visible section
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => {
          const rectA = a.target.getBoundingClientRect();
          const rectB = b.target.getBoundingClientRect();
          return rectA.top - rectB.top;
        });

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle initial state - check if we're at the very top
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // If at the very top (within 200px), no section should be active
      if (scrollTop < 200) {
        setActiveSection("");
      }
    };

    // Initial check
    handleScroll();
    
    // Listen for scroll events to handle top-of-page case
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
