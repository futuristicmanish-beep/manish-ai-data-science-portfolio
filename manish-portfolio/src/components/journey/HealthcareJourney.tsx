/**
 * HEALTHCARE JOURNEY COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Healthcare technology focus and ZYNETRA showcase
 */

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button, Card, Heading } from "@/components/ui";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { ArrowRight, Activity, Hospital, User, Droplet, Ambulance, Pill, Database, Brain } from "lucide-react";

interface HealthcareTech {
  title: string;
  subtitle: string;
  description: string;
  ecosystem: readonly string[];
  project: {
    name: string;
    tagline: string;
    description: string;
    note: string;
  };
}

interface HealthcareJourneyProps {
  data: HealthcareTech;
}

const ecosystemIcons = {
  Patients: User,
  Hospitals: Hospital,
  Doctors: Activity,
  "Blood Resources": Droplet,
  Ambulances: Ambulance,
  Pharmacies: Pill,
  "Healthcare Data": Database,
  "AI & Analytics": Brain,
};

export function HealthcareJourney({ data }: HealthcareJourneyProps) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <Heading level={2}>{data.title}</Heading>
        <p className="text-lg text-[rgb(var(--color-muted-foreground))]">{data.subtitle}</p>
        <p className="text-base text-[rgb(var(--color-muted-foreground))]">{data.description}</p>
      </motion.div>

      {/* Healthcare Ecosystem */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {data.ecosystem.map((item) => {
          const Icon = ecosystemIcons[item as keyof typeof ecosystemIcons] || Activity;
          return (
            <motion.div key={item} variants={staggerItem}>
              <Card variant="default" className="text-center p-6 hover:border-[rgb(var(--color-primary)/0.3)] transition-colors">
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg",
                      "flex items-center justify-center",
                      "bg-[rgb(var(--color-primary)/0.1)]",
                      "text-[rgb(var(--color-primary))]"
                    )}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-[rgb(var(--color-foreground))]">
                    {item}
                  </span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ZYNETRA Project Showcase */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <Card variant="default" className="overflow-hidden">
          <div className="p-8 lg:p-12 space-y-6">
            {/* Project Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg",
                    "flex items-center justify-center",
                    "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                    "text-white"
                  )}
                >
                  <Activity className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">
                    {data.project.name}
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                    {data.project.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-base text-[rgb(var(--color-muted-foreground))] max-w-2xl">
              {data.project.description}
            </p>

            {/* Project Note */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
                "bg-[rgb(var(--color-accent)/0.1)]",
                "border border-[rgb(var(--color-accent)/0.2)]",
                "text-sm text-[rgb(var(--color-accent))]"
              )}
            >
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-accent))] animate-pulse" />
              {data.project.note}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                disabled
              >
                Explore ZYNETRA
                <span className="ml-2 text-xs opacity-70">(Coming Soon)</span>
              </Button>
            </div>
          </div>

          {/* Decorative gradient */}
          <div
            className="h-2 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-accent))] to-[rgb(var(--color-secondary))]"
            aria-hidden="true"
          />
        </Card>
      </motion.div>
    </div>
  );
}
