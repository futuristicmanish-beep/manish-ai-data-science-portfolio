/**
 * CASE STUDY CTA COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Call-to-action at end of case studies for conversion
 */

"use client";

import { Card, Button } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { ArrowRight, Mail, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CaseStudyCTAProps {
  hasNextProject?: boolean;
  hasRelatedProjects?: boolean;
}

export function CaseStudyCTA({ hasNextProject = false, hasRelatedProjects = false }: CaseStudyCTAProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <Card variant="default" className="overflow-hidden">
        <div className="p-8 lg:p-12 text-center space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-[rgb(var(--color-foreground))]">
              Interested in My Work?
            </h2>
            <p className="text-base text-[rgb(var(--color-muted-foreground))] max-w-2xl mx-auto">
              Explore more projects or get in touch to discuss opportunities and collaborations
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {/* Primary: View Projects or Contact */}
            {hasRelatedProjects || hasNextProject ? (
              <Link href="/projects">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<FolderOpen className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  View More Projects
                </Button>
              </Link>
            ) : (
              <Link href="/#contact">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<Mail className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  Contact Me
                </Button>
              </Link>
            )}

            {/* Secondary: Contact or Back to Projects */}
            {hasRelatedProjects || hasNextProject ? (
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  Get in Touch
                </Button>
              </Link>
            ) : (
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  All Projects
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Gradient Footer */}
        <div
          className={cn(
            "h-1.5 bg-gradient-to-r",
            "from-[rgb(var(--color-primary))]",
            "via-[rgb(var(--color-accent))]",
            "to-[rgb(var(--color-secondary))]"
          )}
          aria-hidden="true"
        />
      </Card>
    </motion.div>
  );
}
