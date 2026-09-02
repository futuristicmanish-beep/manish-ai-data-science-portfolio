/**
 * SKILLS GRID COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Grid layout for skills with filtering
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { SkillCard } from "./SkillCard";
import type { Skill } from "@/data/skills";

interface SkillsGridProps {
  skills: Skill[];
  onSkillClick?: (skill: Skill) => void;
}

export function SkillsGrid({ skills, onSkillClick }: SkillsGridProps) {
  if (skills.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-base text-[rgb(var(--color-muted-foreground))]">
          No skills found in this category.
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={staggerItem}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <SkillCard skill={skill} onClick={onSkillClick} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
