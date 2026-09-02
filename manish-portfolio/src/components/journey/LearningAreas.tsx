/**
 * LEARNING AREAS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Technology learning areas with status
 */

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface LearningArea {
  id: string;
  title: string;
  description: string;
  status: "Learning" | "Exploring" | "Building" | "Applying";
  technologies: readonly string[];
}

interface LearningAreasProps {
  areas: readonly LearningArea[];
}

export function LearningAreas({ areas }: LearningAreasProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {areas.map((area) => (
        <LearningAreaCard key={area.id} area={area} />
      ))}
    </motion.div>
  );
}

interface LearningAreaCardProps {
  area: LearningArea;
}

function LearningAreaCard({ area }: LearningAreaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: LearningArea["status"]) => {
    switch (status) {
      case "Building":
        return "text-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary)/0.1)] border-[rgb(var(--color-primary)/0.2)]";
      case "Learning":
        return "text-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] border-[rgb(var(--color-accent)/0.2)]";
      case "Exploring":
        return "text-[rgb(var(--color-secondary))] bg-[rgb(var(--color-secondary)/0.1)] border-[rgb(var(--color-secondary)/0.2)]";
      case "Applying":
        return "text-[rgb(var(--color-success))] bg-[rgb(var(--color-success)/0.1)] border-[rgb(var(--color-success)/0.2)]";
      default:
        return "text-[rgb(var(--color-muted-foreground))] bg-[rgb(var(--color-card))] border-[rgb(var(--color-border))]";
    }
  };

  return (
    <motion.div variants={staggerItem}>
      <Card
        variant="default"
        className="h-full hover:border-[rgb(var(--color-primary)/0.3)] transition-colors cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
              {area.title}
            </h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-[rgb(var(--color-muted-foreground))]" />
            </motion.div>
          </div>

          {/* Status Badge */}
          <div className="flex">
            <span
              className={cn(
                "text-xs font-medium px-3 py-1 rounded-full border",
                getStatusColor(area.status)
              )}
            >
              {area.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
            {area.description}
          </p>

          {/* Technologies (expandable) */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-[rgb(var(--color-border))]">
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-foreground))]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
