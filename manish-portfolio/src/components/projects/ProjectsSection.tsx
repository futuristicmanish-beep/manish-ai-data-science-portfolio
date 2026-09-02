/**
 * PROJECTS SECTION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Projects showcase on homepage
 */

"use client";

import { Container, Divider, Heading, Section, Button } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { projects, featuredProjects } from "@/data/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectsGrid } from "./ProjectsGrid";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  const featured = featuredProjects[0];
  const otherProjects = projects.filter(p => !p.featured).slice(0, 3);

  return (
    <Section spacing="spacious" id="projects">
      <Container size="wide">
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <Heading level={2} gradient>
              Projects & Learning Journey
            </Heading>
            <p className="text-xl text-[rgb(var(--color-muted-foreground))]">
              Hands-on projects where I apply AI, data science, and software engineering concepts to solve real-world problems
            </p>
          </motion.div>

          {/* Featured Project */}
          {featured && (
            <>
              <FeaturedProject project={featured} />
              <Divider />
            </>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="space-y-8">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="text-center"
              >
                <Heading level={2}>More Projects</Heading>
              </motion.div>

              <ProjectsGrid projects={otherProjects} />
            </div>
          )}

          {/* View All Projects Button */}
          {projects.length > 1 && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center pt-8"
            >
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  );
}
