/**
 * CASE STUDY NAVIGATION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Table of contents for case study pages
 */

"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui";
import { FileText } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

interface CaseStudyNavProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const sectionIds = sections.map(s => s.id);
  const activeSection = useActiveSection({ sectionIds, offset: 100 });

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  if (sections.length === 0) return null;

  return (
    <Card variant="default" className="sticky top-24 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-10 h-10 rounded-lg",
            "flex items-center justify-center",
            "bg-[rgb(var(--color-primary)/0.1)]"
          )}
        >
          <FileText className="w-5 h-5 text-[rgb(var(--color-primary))]" aria-hidden="true" />
        </div>
        <h2 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
          Contents
        </h2>
      </div>

      <nav aria-label="Case study table of contents">
        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg",
                    "text-sm transition-all duration-200",
                    "hover:bg-[rgb(var(--color-card))]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary)/0.3)]",
                    isActive
                      ? "text-[rgb(var(--color-primary))] font-medium bg-[rgb(var(--color-primary)/0.1)]"
                      : "text-[rgb(var(--color-muted-foreground))]"
                  )}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </Card>
  );
}
