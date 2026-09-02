/**
 * CURRENTLY BUILDING COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Highlights active major projects
 */

"use client";

import { Card } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { getCurrentlyBuilding } from "@/config/brand";
import { Rocket, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const statusLabels = {
  "in-development": "In Development",
  "prototype": "Prototype",
  "concept": "Concept",
  "completed": "Completed",
  "learning-project": "Learning Project",
};

export function CurrentlyBuilding() {
  const projects = getCurrentlyBuilding();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="space-y-6"
    >
      {projects.map((project) => (
        <Card key={project.id} variant="default" className="overflow-hidden">
          <div className="p-8 space-y-6">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  "flex-shrink-0 w-14 h-14 rounded-xl",
                  "flex items-center justify-center",
                  "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                  "text-white"
                )}
              >
                <Rocket className="w-8 h-8" aria-hidden="true" />
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--color-foreground))]">
                    {project.name}
                  </h3>
                  <p className="text-base text-[rgb(var(--color-primary))] font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-sm font-medium text-[rgb(var(--color-primary))]">
                  <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-primary))] animate-pulse" />
                  {statusLabels[project.status]}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-[rgb(var(--color-muted-foreground))] leading-relaxed">
              {project.description}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-3 py-1.5 rounded-lg bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-foreground))] capitalize"
                >
                  {cat.replace("-", " ")}
                </span>
              ))}
            </div>

            {/* Impact */}
            {project.impact && (
              <div className="pt-4 border-t border-[rgb(var(--color-border))]">
                <p className="text-sm text-[rgb(var(--color-muted-foreground))] italic">
                  {project.impact}
                </p>
              </div>
            )}

            {/* View Project Link */}
            <div className="pt-2">
              <Link
                href={`/projects/${project.id}`}
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "h-11 px-6 text-base font-medium rounded-[var(--radius-lg)]",
                  "bg-[rgb(var(--color-primary))] text-white",
                  "hover:bg-[rgb(var(--color-primary))]/90",
                  "transition-all duration-[var(--duration-base)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]"
                )}
              >
                View Project Details
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Gradient Footer */}
          <div
            className="h-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]"
            aria-hidden="true"
          />
        </Card>
      ))}
    </motion.div>
  );
}
