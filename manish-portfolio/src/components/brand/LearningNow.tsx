/**
 * LEARNING NOW COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Displays current active learning areas
 */

"use client";

import { Card } from "@/components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { getLearningNow } from "@/config/brand";
import { cn } from "@/lib/utils";

const statusColors = {
  Learning: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Building: "bg-green-500/10 text-green-600 dark:text-green-400",
};

export function LearningNow() {
  const learningAreas = getLearningNow();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
    >
      {learningAreas.map((area) => {
        const statusColor = statusColors[area.status];

        return (
          <motion.div key={area.area} variants={staggerItem}>
            <Card 
              variant="default" 
              className="p-4 text-center space-y-3 hover:border-[rgb(var(--color-primary)/0.3)] transition-colors h-full"
            >
              {/* Area Name */}
              <div>
                <h4 className="text-sm font-semibold text-[rgb(var(--color-foreground))] leading-tight">
                  {area.area}
                </h4>
                <p className="text-xs text-[rgb(var(--color-muted-foreground))] mt-1">
                  {area.category}
                </p>
              </div>

              {/* Status */}
              <div className={cn(
                "inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                statusColor
              )}>
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  area.status === "Building" && "animate-pulse",
                  area.status === "Learning" ? "bg-blue-600 dark:bg-blue-400" : "bg-green-600 dark:bg-green-400"
                )} />
                {area.status}
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
