/**
 * BUILDING PROCESS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Visual representation of the project-building process
 */

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Code, FlaskConical, CheckCircle, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

interface ProcessStep {
  step: string;
  description: string;
  icon: string;
}

interface BuildingProcessProps {
  steps: readonly ProcessStep[];
}

const iconMap = {
  book: BookOpen,
  flask: FlaskConical,
  code: Code,
  check: CheckCircle,
  "arrow-up": TrendingUp,
};

export function BuildingProcess({ steps }: BuildingProcessProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
        {steps.map((step, index) => (
          <ProcessStepCard key={step.step} step={step} index={index} isLast={index === steps.length - 1} />
        ))}
      </div>
    </motion.div>
  );
}

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

function ProcessStepCard({ step, index, isLast }: ProcessStepCardProps) {
  const Icon = iconMap[step.icon as keyof typeof iconMap] || Code;

  return (
    <motion.div variants={staggerItem} className="relative flex flex-col items-center text-center">
      {/* Icon Circle */}
      <div className="relative mb-4">
        <div
          className={cn(
            "w-16 h-16 rounded-full",
            "flex items-center justify-center",
            "bg-[rgb(var(--color-card))]",
            "border-2 border-[rgb(var(--color-primary))]",
            "text-[rgb(var(--color-primary))]",
            "relative z-10"
          )}
        >
          <Icon className="w-8 h-8" aria-hidden="true" />
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full bg-[rgb(var(--color-primary))] opacity-20 blur-xl"
          aria-hidden="true"
        />
      </div>

      {/* Arrow (desktop only, not on last item) */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] z-0">
          <div className="h-px bg-gradient-to-r from-[rgb(var(--color-primary))] to-transparent" />
          <ArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 rotate-[-90deg] w-4 h-4 text-[rgb(var(--color-primary))]" />
        </div>
      )}

      {/* Arrow (mobile only, not on last item) */}
      {!isLast && (
        <div className="md:hidden flex justify-center my-4">
          <ArrowDown className="w-6 h-6 text-[rgb(var(--color-primary))]" />
        </div>
      )}

      {/* Step Title */}
      <h3 className="text-lg font-semibold text-[rgb(var(--color-foreground))] mb-2">
        {step.step}
      </h3>

      {/* Step Description */}
      <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
        {step.description}
      </p>

      {/* Step Number Badge */}
      <div
        className={cn(
          "mt-4 w-8 h-8 rounded-full",
          "flex items-center justify-center",
          "bg-[rgb(var(--color-primary)/0.1)]",
          "border border-[rgb(var(--color-primary)/0.2)]",
          "text-xs font-semibold text-[rgb(var(--color-primary))]"
        )}
      >
        {index + 1}
      </div>
    </motion.div>
  );
}
