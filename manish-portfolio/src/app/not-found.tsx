/**
 * 404 NOT FOUND PAGE
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Custom 404 error page
 */

import { Container, Section, Heading, Background, GradientOrb } from "@/components/ui";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="relative">
      <Background variant="grid" />
      <GradientOrb position="top-right" color="primary" size="lg" />
      <GradientOrb position="bottom-left" color="secondary" size="lg" />

      <Section spacing="spacious">
        <Container size="default">
          <div className="flex flex-col items-center justify-center text-center space-y-8 py-20">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-[rgb(var(--color-primary))]" aria-hidden="true" />
            </div>

            {/* Error Code */}
            <div className="space-y-4">
              <Heading level={1} gradient>
                404
              </Heading>
              <Heading level={2}>
                Page Not Found
              </Heading>
            </div>

            {/* Description */}
            <p className="text-lg text-[rgb(var(--color-muted-foreground))] max-w-md">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            {/* Action */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-medium rounded-[var(--radius-lg)] bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] hover:bg-[rgb(var(--color-primary-hover))] shadow-md hover:shadow-lg transition-all duration-[var(--duration-base)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))]"
            >
              Back to Home
            </Link>

            {/* Helpful Links */}
            <div className="pt-8 space-y-3">
              <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                You might be looking for:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#projects"
                  className="text-sm text-[rgb(var(--color-primary))] hover:underline"
                >
                  Projects
                </Link>
                <Link
                  href="/#about"
                  className="text-sm text-[rgb(var(--color-primary))] hover:underline"
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm text-[rgb(var(--color-primary))] hover:underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
