/**
 * EXPERIENCE & EDUCATION SECTION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Academic and professional experience
 */

"use client";

import { Container, Divider, Heading, Section, Card } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { journeyData } from "@/data/journey";
import { GraduationCap, Calendar, MapPin, BookOpen, Code } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceEducationSection() {
  const hasExperience = experience.length > 0;
  const continuousLearning = journeyData.learningAreas;

  return (
    <Section spacing="spacious" id="experience">
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
              Experience & Education
            </Heading>
            <p className="text-xl text-[rgb(var(--color-muted-foreground))]">
              My academic foundation and learning journey in AI and Data Science
            </p>
          </motion.div>

          <Divider />

          {/* Education */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <Heading level={2}>Education</Heading>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-4xl mx-auto"
            >
              {education.map((edu) => (
                <motion.div key={edu.id} variants={staggerItem}>
                  <Card variant="default" className="overflow-hidden">
                    <div className="p-8 space-y-6">
                      {/* Header with Icon */}
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "flex-shrink-0 w-14 h-14 rounded-xl",
                            "flex items-center justify-center",
                            "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                            "text-white"
                          )}
                        >
                          <GraduationCap className="w-8 h-8" aria-hidden="true" />
                        </div>

                        <div className="flex-1 space-y-3">
                          {/* Degree */}
                          <div>
                            <h3 className="text-2xl font-bold text-[rgb(var(--color-foreground))]">
                              {edu.degree}
                            </h3>
                            <p className="text-lg text-[rgb(var(--color-primary))] font-semibold mt-1">
                              {edu.field}
                            </p>
                          </div>

                          {/* Institution */}
                          <div className="space-y-2">
                            <p className="text-base text-[rgb(var(--color-foreground))] font-medium">
                              {edu.institution}
                            </p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--color-muted-foreground))]">
                              {edu.location && (
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="w-4 h-4" aria-hidden="true" />
                                  <span>{edu.location}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <span>
                                  {edu.startDate} – {edu.status === "ongoing" ? "Present" : edu.endDate}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          {edu.status === "ongoing" && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-sm font-medium text-[rgb(var(--color-primary))]">
                              <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-primary))] animate-pulse" />
                              Current
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      {edu.description && (
                        <p className="text-base text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                          {edu.description}
                        </p>
                      )}

                      {/* Focus Areas */}
                      {edu.focus && edu.focus.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-[rgb(var(--color-border))]">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-[rgb(var(--color-primary))]" aria-hidden="true" />
                            <span className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
                              Focus Areas
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.focus.map((area) => (
                              <span
                                key={area}
                                className="text-sm px-3 py-1.5 rounded-lg bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-[rgb(var(--color-primary))]"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Gradient Footer */}
                    <div
                      className="h-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]"
                      aria-hidden="true"
                    />
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <Divider />

          {/* Experience Section */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <Heading level={2}>Experience</Heading>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-3xl mx-auto"
            >
              {!hasExperience ? (
                <Card variant="default" className="p-12 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center">
                      <Code className="w-8 h-8 text-[rgb(var(--color-primary))]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
                      Building Experience
                    </h3>
                    <p className="text-base text-[rgb(var(--color-muted-foreground))]">
                      Currently building experience through projects, technical learning, and hands-on development. 
                      Check out my projects to see what I&apos;m working on.
                    </p>
                  </div>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Experience entries would go here */}
                </div>
              )}
            </motion.div>
          </div>

          <Divider />

          {/* Continuous Learning */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center space-y-3"
            >
              <Heading level={2}>Continuous Learning</Heading>
              <p className="text-base text-[rgb(var(--color-muted-foreground))] max-w-2xl mx-auto">
                Actively learning and building across multiple technology domains
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              {continuousLearning.map((area) => (
                <motion.div key={area.id} variants={staggerItem}>
                  <Card variant="default" className="p-6 text-center hover:border-[rgb(var(--color-primary)/0.3)] transition-colors">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[rgb(var(--color-foreground))]">
                        {area.title}
                      </h4>
                      <span className="text-xs text-[rgb(var(--color-muted-foreground))] capitalize">
                        {area.status}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
