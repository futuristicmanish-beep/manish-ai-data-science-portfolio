/**
 * HOME PAGE
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Main landing page with hero and sections
 */

import {
  Background,
  GradientOrb,
} from "@/components/ui";
import { Hero } from "@/components/hero";
import { BrandShowcase } from "@/components/brand";
import { AboutSection } from "@/components/journey";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { ExperienceEducationSection } from "@/components/experience";
import { AchievementsSection } from "@/components/achievements";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Effects */}
      <Background variant="grid" />
      <GradientOrb position="top-right" color="primary" size="lg" />
      <GradientOrb position="bottom-left" color="secondary" size="lg" />

      {/* Hero Section */}
      <Hero />

      {/* Brand Showcase - Current Focus, Building, Learning */}
      <BrandShowcase />

      {/* About / My Journey Section */}
      <AboutSection />

      {/* Skills Ecosystem Section */}
      <SkillsSection />

      {/* Projects Showcase Section */}
      <ProjectsSection />

      {/* Experience & Education Section */}
      <ExperienceEducationSection />

      {/* Achievements & Recognition Section */}
      <AchievementsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
