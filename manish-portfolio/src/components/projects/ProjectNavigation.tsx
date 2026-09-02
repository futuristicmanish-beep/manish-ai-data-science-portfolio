/**
 * PROJECT NAVIGATION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Previous/Next navigation for project case studies
 */

"use client";

import { Button } from "@/components/ui";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectNavigationProps {
  previousProject?: Project | null;
  nextProject?: Project | null;
}

export function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgb(var(--color-border))]">
      {/* Previous Project */}
      <div className="w-full sm:w-auto">
        {previousProject ? (
          <Link href={`/projects/${previousProject.slug}`} className="block">
            <Button
              variant="outline"
              size="lg"
              leftIcon={<ArrowLeft className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              <span className="flex flex-col items-start">
                <span className="text-xs text-[rgb(var(--color-muted-foreground))]">Previous</span>
                <span className="text-sm font-semibold truncate max-w-[200px]">{previousProject.title}</span>
              </span>
            </Button>
          </Link>
        ) : (
          <div className="w-full sm:w-[200px]" />
        )}
      </div>

      {/* Back to Projects */}
      <Link href="/projects">
        <Button
          variant="outline"
          size="md"
          leftIcon={<Grid className="w-4 h-4" />}
        >
          All Projects
        </Button>
      </Link>

      {/* Next Project */}
      <div className="w-full sm:w-auto">
        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="block">
            <Button
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              <span className="flex flex-col items-end">
                <span className="text-xs text-[rgb(var(--color-muted-foreground))]">Next</span>
                <span className="text-sm font-semibold truncate max-w-[200px]">{nextProject.title}</span>
              </span>
            </Button>
          </Link>
        ) : (
          <div className="w-full sm:w-[200px]" />
        )}
      </div>
    </div>
  );
}
