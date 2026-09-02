/**
 * PROJECTS PAGE
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Full projects listing with filtering
 */

"use client";

import { useState } from "react";
import { Container, Divider, Heading, Section, Background, GradientOrb } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { projects, getProjectsByCategory, type ProjectCategory } from "@/data/projects";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : getProjectsByCategory(selectedCategory);

  // Sort by order
  const sortedProjects = [...filteredProjects].sort((a, b) => a.order - b.order);

  return (
    <div className="relative">
      {/* Background Effects */}
      <Background variant="grid" />
      <GradientOrb position="top-right" color="primary" size="lg" />
      <GradientOrb position="bottom-left" color="secondary" size="lg" />

      <Section spacing="spacious">
        <Container size="wide">
          <div className="space-y-16">
            {/* Page Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center space-y-6 max-w-3xl mx-auto pt-12"
            >
              <Heading level={1} gradient>
                All Projects
              </Heading>
              <p className="text-xl text-[rgb(var(--color-muted-foreground))]">
                Exploring AI, data science, healthcare technology, and software engineering through hands-on projects
              </p>
            </motion.div>

            <Divider />

            {/* Category Filters */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              viewport={viewportConfig}
            >
              <ProjectFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </motion.div>

            {/* Projects Grid */}
            <ProjectsGrid projects={sortedProjects} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
