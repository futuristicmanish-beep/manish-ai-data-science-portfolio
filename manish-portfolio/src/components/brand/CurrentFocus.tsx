/**
 * CURRENT FOCUS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Displays current focus areas with status indicators
 */

"use client";

import { Card } from "@/components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { getCurrentFocus } from "@/config/brand";
import { Brain, HeartPulse, Layers, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const iconMap = {
  brain: Brain,
  "heart-pulse": HeartPulse,
  layers: Layers,
  "bar-chart": BarChart,
};

const statusColors = {
  Learning: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
  Building: "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400",
};

export function CurrentFocus() {
  const focusAreas = getCurrentFocus();
  const router = useRouter();

  const handleClick = (project?: string) => {
    if (project) {
      router.push(`/projects/${project}`);
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {focusAreas.map((focus) => {
        const Icon = iconMap[focus.icon as keyof typeof iconMap];
        const statusColor = statusColors[focus.status];

        return (
          <motion.div key={focus.id} variants={staggerItem}>
            <Card 
              variant="default" 
              className={cn(
                "h-full p-6 space-y-4 transition-all duration-300",
                "hover:border-[rgb(var(--color-primary)/0.3)]",
                "hover:shadow-lg hover:shadow-[rgb(var(--color-primary)/0.1)]",
                focus.project && "cursor-pointer"
              )}
              {...(focus.project && {
                onClick: () => handleClick(focus.project),
                role: "button",
                tabIndex: 0,
                onKeyDown: (e: React.KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick(focus.project);
                  }
                },
              })}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl",
                  "flex items-center justify-center",
                  "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                  "text-white"
                )}
              >
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
                  {focus.area}
                </h3>
                <p className="text-sm text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                  {focus.description}
                </p>
              </div>

              {/* Status Badge */}
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border",
                statusColor
              )}>
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  focus.status === "Building" && "animate-pulse",
                  focus.status === "Learning" ? "bg-blue-600 dark:bg-blue-400" : "bg-green-600 dark:bg-green-400"
                )} />
                {focus.status}
              </div>

              {/* Project Link Indicator */}
              {focus.project && (
                <div className="pt-2 border-t border-[rgb(var(--color-border))]">
                  <span className="text-xs text-[rgb(var(--color-primary))] font-medium">
                    View Project →
                  </span>
                </div>
              )}
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
