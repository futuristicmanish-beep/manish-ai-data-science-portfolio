/**
 * SCROLL INDICATOR COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Subtle scroll indicator that fades on scroll
 */

"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide after scrolling 100px
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="flex flex-col items-center gap-2"
    >
      <span className="text-xs text-[rgb(var(--color-muted-foreground))] uppercase tracking-wider">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "w-8 h-8 rounded-full",
          "flex items-center justify-center",
          "border border-[rgb(var(--color-border))]",
          "text-[rgb(var(--color-muted-foreground))]"
        )}
      >
        <ChevronDown className="w-4 h-4" aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}
