/**
 * SKILL DETAILS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Modal displaying detailed skill information
 */

"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui";
import type { Skill, SkillStatus } from "@/data/skills";
import { skillCategories } from "@/data/skills";
import { X, Code, BarChart, Brain, Globe, Server, Database, Wrench, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SkillDetailsProps {
  skill: Skill | null;
  onClose: () => void;
}

const iconMap = {
  code: Code,
  "bar-chart": BarChart,
  brain: Brain,
  globe: Globe,
  server: Server,
  database: Database,
  wrench: Wrench,
  "heart-pulse": HeartPulse,
};

const statusColors: Record<SkillStatus, string> = {
  learning: "text-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] border-[rgb(var(--color-accent)/0.2)]",
  building: "text-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary)/0.1)] border-[rgb(var(--color-primary)/0.2)]",
  applying: "text-[rgb(var(--color-success))] bg-[rgb(var(--color-success)/0.1)] border-[rgb(var(--color-success)/0.2)]",
  exploring: "text-[rgb(var(--color-secondary))] bg-[rgb(var(--color-secondary)/0.1)] border-[rgb(var(--color-secondary)/0.2)]",
};

export function SkillDetails({ skill, onClose }: SkillDetailsProps) {
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (skill) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [skill, onClose]);

  if (!skill) return null;

  const category = skillCategories[skill.category];
  const Icon = category.icon ? iconMap[category.icon as keyof typeof iconMap] : Code;

  return (
    <AnimatePresence>
      {skill && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                "bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))]",
                "rounded-2xl shadow-2xl"
              )}
              role="dialog"
              aria-modal="true"
              aria-labelledby="skill-modal-title"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={cn(
                  "absolute top-4 right-4 z-10",
                  "w-10 h-10 rounded-lg",
                  "flex items-center justify-center",
                  "bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))]",
                  "text-[rgb(var(--color-muted-foreground))]",
                  "hover:text-[rgb(var(--color-foreground))]",
                  "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary)/0.3)]",
                  "transition-colors"
                )}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4 pr-12">
                  <div
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-xl",
                      "flex items-center justify-center",
                      "bg-[rgb(var(--color-primary)/0.1)]",
                      "text-[rgb(var(--color-primary))]"
                    )}
                  >
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-2">
                    <h2
                      id="skill-modal-title"
                      className="text-2xl font-bold text-[rgb(var(--color-foreground))]"
                    >
                      {skill.name}
                    </h2>
                    <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                      {category.name}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[rgb(var(--color-muted-foreground))]">
                    Status:
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium px-3 py-1 rounded-full border capitalize",
                      statusColors[skill.status]
                    )}
                  >
                    {skill.status}
                  </span>
                  {skill.featured && (
                    <Badge variant="primary" size="sm">
                      Core Stack
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
                    Description
                  </h3>
                  <p className="text-base text-[rgb(var(--color-muted-foreground))]">
                    {skill.description}
                  </p>
                </div>

                {/* Technologies */}
                {skill.technologies && skill.technologies.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
                      Used For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-2 rounded-lg bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-foreground))]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Projects */}
                {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
                      Related Projects
                    </h3>
                    <div className="space-y-2">
                      {skill.relatedProjects.map((project) => (
                        <div
                          key={project}
                          className={cn(
                            "px-4 py-3 rounded-lg",
                            "bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))]",
                            "text-sm font-medium text-[rgb(var(--color-foreground))] capitalize"
                          )}
                        >
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Gradient Footer */}
              <div
                className="h-2 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-accent))] to-[rgb(var(--color-secondary))]"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
