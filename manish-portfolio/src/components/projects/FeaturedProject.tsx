/**
 * FEATURED PROJECT COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Large showcase for featured project
 */

"use client";

import { Button, Badge, Card } from "@/components/ui";
import type { Project } from "@/data/projects";
import { ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <Card variant="default" className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-video lg:aspect-auto bg-[rgb(var(--color-card))]">
            {project.coverImage && !imageError ? (
              <Image
                src={project.coverImage}
                alt={`${project.title} featured cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[rgb(var(--color-primary)/0.1)] to-[rgb(var(--color-secondary)/0.1)]">
                <ImageIcon
                  className="w-24 h-24 text-[rgb(var(--color-muted-foreground)/0.3)]"
                  aria-hidden="true"
                />
              </div>
            )}

            {/* Featured Badge */}
            <div className="absolute top-6 left-6 z-10">
              <Badge variant="primary">
                Featured Project
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
                {project.title}
              </h2>

              <p className="text-lg text-[rgb(var(--color-muted-foreground))]">
                {project.shortDescription}
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-sm px-3 py-1 rounded-lg bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-[rgb(var(--color-primary))] capitalize font-medium"
                >
                  {cat.replace("-", " ")}
                </span>
              ))}
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <span className="text-sm text-[rgb(var(--color-muted-foreground))] font-semibold uppercase tracking-wide">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-[rgb(var(--color-foreground))]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href={`/projects/${project.slug}`}>
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Explore Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Footer */}
        <div
          className="h-2 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-accent))] to-[rgb(var(--color-secondary))]"
          aria-hidden="true"
        />
      </Card>
    </motion.div>
  );
}
