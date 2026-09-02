/**
 * SKILL FILTERS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Category filtering for skills
 */

"use client";

import { cn } from "@/lib/utils";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { Code, BarChart, Brain, Globe, Server, Database, Wrench, HeartPulse } from "lucide-react";

interface SkillFiltersProps {
  selectedCategory: SkillCategory | "all";
  onCategoryChange: (category: SkillCategory | "all") => void;
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

export function SkillFilters({ selectedCategory, onCategoryChange }: SkillFiltersProps) {
  const categories = [
    { id: "all" as const, name: "All Skills", icon: "code" },
    ...Object.values(skillCategories),
  ];

  return (
    <div className="space-y-4">
      {/* Desktop: Horizontal Pills */}
      <div className="hidden md:flex flex-wrap gap-3 justify-center">
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap] || Code;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id as SkillCategory | "all")}
              className={cn(
                "group flex items-center gap-2 px-4 py-2 rounded-lg",
                "border transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary)/0.3)]",
                isSelected
                  ? "bg-[rgb(var(--color-primary))] border-[rgb(var(--color-primary))] text-white"
                  : "bg-[rgb(var(--color-card))] border-[rgb(var(--color-border))] text-[rgb(var(--color-foreground))] hover:border-[rgb(var(--color-primary)/0.4)]"
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isSelected ? "scale-110" : "group-hover:scale-110"
                )}
                aria-hidden="true"
              />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile: Dropdown */}
      <div className="md:hidden">
        <label htmlFor="category-select" className="sr-only">
          Filter by category
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as SkillCategory | "all")}
          className={cn(
            "w-full px-4 py-3 rounded-lg",
            "bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))]",
            "text-[rgb(var(--color-foreground))]",
            "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary)/0.3)]",
            "cursor-pointer"
          )}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
