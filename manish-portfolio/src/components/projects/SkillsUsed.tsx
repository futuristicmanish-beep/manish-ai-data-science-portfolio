/**
 * SKILLS USED COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Shows skills demonstrated in a project with relationship to skills section
 */

"use client";

import { Card } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { Code2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SkillsUsedProps {
  skills: string[];
  technologies: string[];
}

export function SkillsUsed({ skills, technologies }: SkillsUsedProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="space-y-6"
    >
      <Card variant="default" className="p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex-shrink-0 w-12 h-12 rounded-lg",
                "flex items-center justify-center",
                "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                "text-white"
              )}
            >
              <Code2 className="w-6 h-6" aria-hidden="true" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[rgb(var(--color-foreground))] mb-2">
                Skills Demonstrated
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                Technologies and skills applied in this project
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-sm font-medium text-[rgb(var(--color-primary))]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-[rgb(var(--color-border))]">
              <h4 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
                Related Skills
              </h4>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {skills.map((skill) => (
                  <motion.div key={skill} variants={staggerItem}>
                    <div className="px-3 py-2 rounded-lg bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-muted-foreground))] capitalize">
                      {skill.replace("-", " ")}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Link to Skills Section */}
          <div className="pt-4 border-t border-[rgb(var(--color-border))]">
            <Link
              href="/#skills"
              className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--color-primary))] hover:underline transition-all group"
            >
              View all my skills
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
