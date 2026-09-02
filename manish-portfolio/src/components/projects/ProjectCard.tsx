/**
 * PROJECT CARD COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Individual project card
 */

"use client";

import { cn } from "@/lib/utils";
import { Card, Badge } from "@/components/ui";
import type { Project, ProjectStatus } from "@/data/projects";
import { ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<ProjectStatus, string> = {
  concept: "text-[rgb(var(--color-secondary))] bg-[rgb(var(--color-secondary)/0.1)] border-[rgb(var(--color-secondary)/0.2)]",
  "in-development": "text-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary)/0.1)] border-[rgb(var(--color-primary)/0.2)]",
  prototype: "text-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] border-[rgb(var(--color-accent)/0.2)]",
  completed: "text-[rgb(var(--color-success))] bg-[rgb(var(--color-success)/0.1)] border-[rgb(var(--color-success)/0.2)]",
  "learning-project": "text-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] border-[rgb(var(--color-accent)/0.2)]",
};

const statusLabels: Record<ProjectStatus, string> = {
  concept: "Concept",
  "in-development": "In Development",
  prototype: "Prototype",
  completed: "Completed",
  "learning-project": "Learning Project",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <Card
          variant="default"
          className={cn(
            "h-full overflow-hidden transition-all duration-300",
            "hover:border-[rgb(var(--color-primary)/0.5)]",
            "hover:shadow-xl"
          )}
        >
          {/* Cover Image */}
          <div className="relative aspect-video bg-[rgb(var(--color-card))] overflow-hidden">
            {project.coverImage && !imageError ? (
              <Image
                src={project.coverImage}
                alt={`${project.title} cover`}
                fill
                className="object-cover transition-transform duration-500"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[rgb(var(--color-primary)/0.1)] to-[rgb(var(--color-secondary)/0.1)]">
                <ImageIcon
                  className="w-16 h-16 text-[rgb(var(--color-muted-foreground)/0.3)]"
                  aria-hidden="true"
                />
              </div>
            )}

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="primary" size="sm">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title & Status */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[rgb(var(--color-foreground))] line-clamp-1">
                {project.title}
              </h3>
              
              <span
                className={cn(
                  "inline-block text-xs font-medium px-3 py-1 rounded-full border",
                  statusColors[project.status]
                )}
              >
                {statusLabels[project.status]}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[rgb(var(--color-muted-foreground))] line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {project.category.slice(0, 3).map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-muted-foreground))] capitalize"
                >
                  {cat.replace("-", " ")}
                </span>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-[rgb(var(--color-primary))]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs text-[rgb(var(--color-muted-foreground))]">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* View Case Study Link */}
            <div className="pt-4 border-t border-[rgb(var(--color-border))]">
              <div className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--color-primary))] group-hover:gap-3 transition-all">
                <span>View Case Study</span>
                <motion.div
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
