/**
 * SKILL CARD COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Individual skill card with details
 */

"use client";

import { cn } from "@/lib/utils";
import { Card, Badge } from "@/components/ui";
import type { Skill, SkillStatus } from "@/data/skills";
import { Code, BarChart, Brain, Globe, Server, Database, Wrench, HeartPulse, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCardProps {
  skill: Skill;
  onClick?: (skill: Skill) => void;
}

const iconMap = {
  code: Code,
  "bar-chart": BarChart,
  brain: Brain,
  globe: Globe,
  server: Server,
  database: Database,
  wrench: Wrench,
  "heart-pulse": HeartPulse,
};

const statusColors: Record<SkillStatus, string> = {
  learning: "text-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] border-[rgb(var(--color-accent)/0.2)]",
  building: "text-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary)/0.1)] border-[rgb(var(--color-primary)/0.2)]",
  applying: "text-[rgb(var(--color-success))] bg-[rgb(var(--color-success)/0.1)] border-[rgb(var(--color-success)/0.2)]",
  exploring: "text-[rgb(var(--color-secondary))] bg-[rgb(var(--color-secondary)/0.1)] border-[rgb(var(--color-secondary)/0.2)]",
};

export function SkillCard({ skill, onClick }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon ? iconMap[skill.icon as keyof typeof iconMap] : Code;

  const handleClick = () => {
    if (onClick) {
      onClick(skill);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick(skill);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        variant="default"
        className={cn(
          "h-full cursor-pointer transition-all duration-200",
          "hover:border-[rgb(var(--color-primary)/0.4)]",
          "hover:shadow-lg",
          onClick && "focus-within:ring-2 focus-within:ring-[rgb(var(--color-primary)/0.3)]"
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? "button" : undefined}
        aria-label={onClick ? `View details for ${skill.name}` : undefined}
      >
        <div className="space-y-4">
          {/* Header with Icon */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-lg",
                  "flex items-center justify-center",
                  "bg-[rgb(var(--color-primary)/0.1)]",
                  "text-[rgb(var(--color-primary))]",
                  "transition-transform duration-200",
                  isHovered && "scale-110"
                )}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold text-[rgb(var(--color-foreground))] truncate">
                {skill.name}
              </h3>
            </div>

            {onClick && (
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-5 h-5 text-[rgb(var(--color-muted-foreground))]" aria-hidden="true" />
              </motion.div>
            )}
          </div>

          {/* Status Badge */}
          <div className="flex">
            <span
              className={cn(
                "text-xs font-medium px-3 py-1 rounded-full border capitalize",
                statusColors[skill.status]
              )}
            >
              {skill.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[rgb(var(--color-muted-foreground))] line-clamp-2">
            {skill.description}
          </p>

          {/* Technologies (first 3) */}
          {skill.technologies && skill.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skill.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] text-[rgb(var(--color-muted-foreground))]"
                >
                  {tech}
                </span>
              ))}
              {skill.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 text-[rgb(var(--color-muted-foreground))]">
                  +{skill.technologies.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Featured Badge */}
          {skill.featured && (
            <div className="pt-2 border-t border-[rgb(var(--color-border))]">
              <Badge variant="primary" size="sm">
                Core Stack
              </Badge>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
