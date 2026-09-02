/**
 * BACK TO TOP BUTTON
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Floating button to scroll back to top
 */

"use client";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={cn(
            "fixed bottom-8 right-8 z-[var(--z-fixed)]",
            "inline-flex items-center justify-center",
            "h-12 w-12",
            "rounded-full",
            "bg-[rgb(var(--color-primary))]",
            "text-[rgb(var(--color-primary-foreground))]",
            "shadow-[var(--shadow-lg)]",
            "transition-all duration-[var(--duration-base)]",
            "hover:scale-110 hover:shadow-[var(--shadow-xl)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))]",
            "active:scale-95"
          )}
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
