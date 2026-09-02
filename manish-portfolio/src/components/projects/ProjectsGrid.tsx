/**
 * PROJECTS GRID COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Grid layout for project cards
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-base text-[rgb(var(--color-muted-foreground))]">
          No projects found in this category.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={staggerItem}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
