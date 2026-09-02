/**
 * ABOUT SECTION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Complete About / My Journey section
 */

"use client";

import { Container, Divider, Heading, Section, Card } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { journeyData } from "@/data/journey";
import { JourneyTimeline } from "./JourneyTimeline";
import { LearningAreas } from "./LearningAreas";
import { BuildingProcess } from "./BuildingProcess";
import { HealthcareJourney } from "./HealthcareJourney";
import { GraduationCap, Target, Lightbulb, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { about, whoIAm, education, timeline, learningAreas, buildingProcess, healthcareTech, whyIBuild, vision } = journeyData;

  return (
    <Section spacing="spacious" id="about">
      <Container size="wide">
        <div className="space-y-24">
          {/* About Hero */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <Heading level={2} gradient>
              {about.title}
            </Heading>
            <p className="text-xl text-[rgb(var(--color-muted-foreground))]">
              {about.subtitle}
            </p>
            <p className="text-base text-[rgb(var(--color-muted-foreground))]">
              {about.description}
            </p>
          </motion.div>

          <Divider />

          {/* Who I Am */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
          >
            <Heading level={2} className="text-center">
              {whoIAm.title}
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {whoIAm.points.map((point, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card variant="default" className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center text-[rgb(var(--color-primary))] font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                        {point}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Divider />

          {/* Education */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mx-auto"
          >
            <Card variant="default" className="overflow-hidden">
              <div className="p-8 space-y-6">
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
                    <div>
                      <h3 className="text-xl font-bold text-[rgb(var(--color-foreground))]">
                        {education.degree}
                      </h3>
                      <p className="text-base text-[rgb(var(--color-muted-foreground))]">
                        {education.institution}
                      </p>
                      <p className="text-sm text-[rgb(var(--color-primary))] font-medium mt-1">
                        {education.period}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {education.focus.map((area) => (
                        <span
                          key={area}
                          className="text-xs px-3 py-1 rounded-full bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-[rgb(var(--color-primary))]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="h-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]"
                aria-hidden="true"
              />
            </Card>
          </motion.div>

          <Divider />

          {/* Learning Journey Timeline */}
          <div className="space-y-8">
            <Heading level={2} className="text-center">
              My Learning Journey
            </Heading>
            <JourneyTimeline entries={timeline} />
          </div>

          <Divider />

          {/* Learning Areas */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heading level={2}>Technology Areas</Heading>
              <p className="text-base text-[rgb(var(--color-muted-foreground))] max-w-2xl mx-auto">
                Exploring and building across multiple technology domains
              </p>
            </div>
            <LearningAreas areas={learningAreas} />
          </div>

          <Divider />

          {/* Building Process */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Code2 className="w-8 h-8 text-[rgb(var(--color-primary))]" />
                <Heading level={2}>How I Build</Heading>
              </div>
              <p className="text-base text-[rgb(var(--color-muted-foreground))] max-w-2xl mx-auto">
                My approach to learning through project-based implementation
              </p>
            </div>
            <BuildingProcess steps={buildingProcess} />
          </div>

          <Divider />

          {/* Healthcare Technology */}
          <HealthcareJourney data={healthcareTech} />

          <Divider />

          {/* Why I Build */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-[rgb(var(--color-accent))]" />
                <Heading level={2}>{whyIBuild.title}</Heading>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {whyIBuild.points.map((point, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card variant="default" className="p-6 h-full">
                    <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                      {point}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Divider />

          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-4xl mx-auto"
          >
            <Card variant="default" className="overflow-hidden">
              <div className="p-8 lg:p-12 space-y-8 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Target className="w-10 h-10 text-[rgb(var(--color-primary))]" />
                  <Heading level={2}>{vision.title}</Heading>
                </div>

                <p className="text-lg text-[rgb(var(--color-foreground))] leading-relaxed">
                  {vision.statement}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {vision.focus.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-lg bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] text-sm font-medium text-[rgb(var(--color-foreground))]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="h-2 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-accent))] to-[rgb(var(--color-secondary))]"
                aria-hidden="true"
              />
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
