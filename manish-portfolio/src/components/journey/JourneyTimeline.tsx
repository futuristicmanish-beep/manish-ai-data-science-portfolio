/**
 * JOURNEY TIMELINE COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Interactive timeline showing learning journey
 */

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";
import type { JourneyEntry } from "@/data/journey";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface JourneyTimelineProps {
  entries: JourneyEntry[];
}

export function JourneyTimeline({ entries }: JourneyTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div
        className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgb(var(--color-primary))] via-[rgb(var(--color-accent))] to-[rgb(var(--color-secondary))]"
        aria-hidden="true"
      />

      {/* Timeline entries */}
      <div className="space-y-12">
        {entries.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  entry: JourneyEntry;
  index: number;
}

function TimelineItem({ entry, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        {/* Left side */}
        <div className={cn("text-right pr-8", !isEven && "lg:order-2 text-left pl-8 pr-0")}>
          {isEven && <TimelineContent entry={entry} align="right" />}
        </div>

        {/* Timeline node */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10">
          <TimelineNode entry={entry} />
        </div>

        {/* Right side */}
        <div className={cn("text-left pl-8", !isEven && "lg:order-1 text-right pr-8 pl-0")}>
          {!isEven && <TimelineContent entry={entry} align="left" />}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex gap-6">
        {/* Timeline node */}
        <div className="flex-shrink-0">
          <TimelineNode entry={entry} />
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <TimelineContent entry={entry} align="left" />
        </div>
      </div>
    </motion.div>
  );
}

interface TimelineNodeProps {
  entry: JourneyEntry;
}

function TimelineNode({ entry }: TimelineNodeProps) {
  const getCategoryColor = (category: JourneyEntry["category"]) => {
    switch (category) {
      case "education":
        return "rgb(var(--color-primary))";
      case "learning":
        return "rgb(var(--color-accent))";
      case "project":
        return "rgb(var(--color-secondary))";
      case "milestone":
        return "rgb(var(--color-success))";
      default:
        return "rgb(var(--color-primary))";
    }
  };

  return (
    <div className="relative">
      {/* Outer ring */}
      <div
        className="w-8 h-8 rounded-full border-2 bg-[rgb(var(--color-background))]"
        style={{ borderColor: getCategoryColor(entry.category) }}
      >
        {/* Inner dot */}
        <div
          className="absolute inset-2 rounded-full"
          style={{ backgroundColor: getCategoryColor(entry.category) }}
        />
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full blur-md opacity-30"
        style={{ backgroundColor: getCategoryColor(entry.category) }}
        aria-hidden="true"
      />
    </div>
  );
}

interface TimelineContentProps {
  entry: JourneyEntry;
  align: "left" | "right";
}

function TimelineContent({ entry, align }: TimelineContentProps) {
  return (
    <div className={cn("space-y-2", align === "right" && "items-end")}>
      {/* Year */}
      <div
        className={cn(
          "text-sm font-semibold text-[rgb(var(--color-primary))]",
          align === "right" && "text-right"
        )}
      >
        {entry.year}
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-lg font-semibold text-[rgb(var(--color-foreground))]",
          align === "right" && "text-right"
        )}
      >
        {entry.title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-sm text-[rgb(var(--color-muted-foreground))]",
          align === "right" && "text-right"
        )}
      >
        {entry.description}
      </p>

      {/* Status badge */}
      {entry.status && (
        <div className={cn("flex gap-2", align === "right" && "justify-end")}>
          <Badge variant={entry.status === "ongoing" ? "primary" : "secondary"}>
            {entry.status}
          </Badge>
        </div>
      )}

      {/* Technologies */}
      {entry.technologies && entry.technologies.length > 0 && (
        <div className={cn("flex flex-wrap gap-2", align === "right" && "justify-end")}>
          {entry.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-muted-foreground))]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
