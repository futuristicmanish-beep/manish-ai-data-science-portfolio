/**
 * FEATURED SKILLS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Showcase of core/featured skills
 */

"use client";

import { cn } from "@/lib/utils";
import { Card, Heading } from "@/components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import type { Skill } from "@/data/skills";
import { Code, BarChart, Brain, Globe, Server, Database, Wrench, HeartPulse, Star } from "lucide-react";

interface FeaturedSkillsProps {
  skills: Skill[];
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

export function FeaturedSkills({ skills }: FeaturedSkillsProps) {
  if (skills.length === 0) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Star className="w-6 h-6 text-[rgb(var(--color-primary))]" aria-hidden="true" />
          <Heading level={3}>Core Stack</Heading>
        </div>
        <p className="text-base text-[rgb(var(--color-muted-foreground))] max-w-2xl mx-auto">
          Primary technologies I&apos;m actively building with
        </p>
      </div>

      {/* Featured Skills Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {skills.map((skill) => {
          const Icon = skill.icon ? iconMap[skill.icon as keyof typeof iconMap] : Code;

          return (
            <motion.div key={skill.id} variants={staggerItem}>
              <Card
                variant="default"
                className={cn(
                  "relative overflow-hidden",
                  "hover:border-[rgb(var(--color-primary)/0.4)]",
                  "transition-colors duration-200"
                )}
              >
                <div className="p-6 space-y-4 text-center">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl",
                        "flex items-center justify-center",
                        "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                        "text-white"
                      )}
                    >
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="text-base font-semibold text-[rgb(var(--color-foreground))]">
                    {skill.name}
                  </h4>

                  {/* Status */}
                  <span className="text-xs text-[rgb(var(--color-muted-foreground))] capitalize">
                    {skill.status}
                  </span>
                </div>

                {/* Decorative gradient bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]"
                  aria-hidden="true"
                />
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
