/**
 * SCROLL POSITION HOOK
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Efficiently tracks scroll position for navigation behavior
 */

"use client";

import { useEffect, useState } from "react";
import { debounce } from "@/lib/utils";

interface ScrollPosition {
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isAtTop: boolean;
}

export function useScrollPosition(threshold = 10): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
    isAtTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = debounce(() => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY > lastScrollY
          ? "down"
          : currentScrollY < lastScrollY
          ? "up"
          : null;

      setScrollPosition({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isAtTop: currentScrollY < threshold,
      });

      lastScrollY = currentScrollY;
    }, 10);

    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    updateScrollPosition(); // Initialize

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, [threshold]);

  return scrollPosition;
}
