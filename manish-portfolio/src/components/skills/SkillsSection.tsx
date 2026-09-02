/**
 * SKILLS SECTION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Complete skills ecosystem section
 */

"use client";

import { useState } from "react";
import { Container, Divider, Heading, Section } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { skills, featuredSkills, getSkillsByCategory, type SkillCategory, type Skill } from "@/data/skills";
import { SkillFilters } from "./SkillFilters";
import { SkillsGrid } from "./SkillsGrid";
import { SkillDetails } from "./SkillDetails";
import { FeaturedSkills } from "./FeaturedSkills";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : getSkillsByCategory(selectedCategory);

  return (
    <Section spacing="spacious" id="skills">
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
              Skills Ecosystem
            </Heading>
            <p className="text-xl text-[rgb(var(--color-muted-foreground))]">
              Technologies I&apos;m learning and applying through hands-on projects
            </p>
          </motion.div>

          <Divider />

          {/* Featured Skills */}
          <FeaturedSkills skills={featuredSkills} />

          <Divider />

          {/* Category Filters */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <SkillFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </motion.div>

          {/* Skills Grid */}
          <SkillsGrid
            skills={filteredSkills}
            onSkillClick={setSelectedSkill}
          />

          {/* Skill Details Modal */}
          <SkillDetails
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        </div>
      </Container>
    </Section>
  );
}
