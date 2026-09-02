/**
 * CONTACT INFO COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Contact information display with actions
 */

"use client";

import { Card } from "@/components/ui";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/constants";
import { CopyEmailButton } from "./CopyEmailButton";
import { cn } from "@/lib/utils";

// SVG Icons for social platforms
const GithubIcon = () => (
  <svg className="w-5 h-5 text-[rgb(var(--color-muted-foreground))] group-hover:text-[rgb(var(--color-primary))] transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-[rgb(var(--color-muted-foreground))] group-hover:text-[rgb(var(--color-primary))] transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Primary Contact Card */}
      <Card variant="default" className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] flex items-center justify-center text-white">
            <Mail className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
              Email
            </h3>
            <p className="text-base text-[rgb(var(--color-muted-foreground))] truncate">
              Let&apos;s connect
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className={cn(
              "block w-full px-4 py-3 rounded-lg",
              "text-sm font-medium text-[rgb(var(--color-primary))]",
              "bg-[rgb(var(--color-primary)/0.1)] hover:bg-[rgb(var(--color-primary)/0.15)]",
              "border border-[rgb(var(--color-primary)/0.2)] hover:border-[rgb(var(--color-primary)/0.3)]",
              "transition-all duration-[var(--duration-base)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]",
              "break-all"
            )}
          >
            {CONTACT_INFO.email}
          </a>
          <CopyEmailButton email={CONTACT_INFO.email} className="w-full" />
        </div>
      </Card>

      {/* Location */}
      {CONTACT_INFO.location && (
        <Card variant="default" className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[rgb(var(--color-primary))]" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
                Location
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                {CONTACT_INFO.location}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Social Links */}
      <Card variant="default" className="p-6 space-y-4">
        <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
          Connect
        </h3>
        <div className="space-y-2">
          {/* GitHub */}
          {SOCIAL_LINKS.github && (
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg",
                "text-sm font-medium text-[rgb(var(--color-foreground))]",
                "bg-[rgb(var(--color-card))] hover:bg-[rgb(var(--color-primary)/0.05)]",
                "border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary)/0.3)]",
                "transition-all duration-[var(--duration-base)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]",
                "group"
              )}
            >
              <GithubIcon />
              <span className="flex-1">GitHub</span>
              <ExternalLink className="w-4 h-4 text-[rgb(var(--color-muted-foreground))] group-hover:text-[rgb(var(--color-primary))] transition-colors" aria-hidden="true" />
            </a>
          )}

          {/* LinkedIn */}
          {SOCIAL_LINKS.linkedin && (
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg",
                "text-sm font-medium text-[rgb(var(--color-foreground))]",
                "bg-[rgb(var(--color-card))] hover:bg-[rgb(var(--color-primary)/0.05)]",
                "border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary)/0.3)]",
                "transition-all duration-[var(--duration-base)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]",
                "group"
              )}
            >
              <LinkedInIcon />
              <span className="flex-1">LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-[rgb(var(--color-muted-foreground))] group-hover:text-[rgb(var(--color-primary))] transition-colors" aria-hidden="true" />
            </a>
          )}
        </div>
      </Card>
    </div>
  );
}
