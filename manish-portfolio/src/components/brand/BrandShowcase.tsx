/**
 * BRAND SHOWCASE SECTION
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Integrated section displaying current focus, building, and learning
 */

"use client";

import { Container, Divider, Heading, Section } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { CurrentFocus } from "./CurrentFocus";
import { CurrentlyBuilding } from "./CurrentlyBuilding";
import { LearningNow } from "./LearningNow";
import { getValueProposition } from "@/config/brand";

export function BrandShowcase() {
  const valueProposition = getValueProposition();

  return (
    <Section spacing="spacious" id="focus">
      <Container size="wide">
        <div className="space-y-16">
          {/* Section Header with Value Proposition */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <Heading level={2} gradient>
              What I&apos;m Focused On
            </Heading>
            <p className="text-xl text-[rgb(var(--color-foreground))] font-medium">
              {valueProposition.statement}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {valueProposition.differentiators.map((diff) => (
                <span
                  key={diff}
                  className="px-4 py-2 rounded-lg bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-muted-foreground))]"
                >
                  {diff}
                </span>
              ))}
            </div>
          </motion.div>

          <Divider />

          {/* Current Focus Areas */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <Heading level={2}>Current Focus Areas</Heading>
              <p className="text-base text-[rgb(var(--color-muted-foreground))] mt-3 max-w-2xl mx-auto">
                The technologies and domains I&apos;m actively learning and applying
              </p>
            </motion.div>

            <CurrentFocus />
          </div>

          <Divider />

          {/* Currently Building */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <Heading level={2}>Currently Building</Heading>
              <p className="text-base text-[rgb(var(--color-muted-foreground))] mt-3 max-w-2xl mx-auto">
                Active projects where I&apos;m applying these skills
              </p>
            </motion.div>

            <CurrentlyBuilding />
          </div>

          <Divider />

          {/* Learning Now */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <Heading level={2}>Learning Now</Heading>
              <p className="text-base text-[rgb(var(--color-muted-foreground))] mt-3 max-w-2xl mx-auto">
                Technologies and skills in active development
              </p>
            </motion.div>

            <LearningNow />
          </div>
        </div>
      </Container>
    </Section>
  );
}
