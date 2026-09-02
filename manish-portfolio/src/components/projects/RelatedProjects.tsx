/**
 * RELATED PROJECTS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Show related projects based on category
 */

"use client";

import { Heading } from "@/components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="space-y-8">
      <Heading level={2} className="text-center">
        Related Projects
      </Heading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={staggerItem}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
