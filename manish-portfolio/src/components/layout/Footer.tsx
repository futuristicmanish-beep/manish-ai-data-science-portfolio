/**
 * FOOTER COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Global footer with navigation and social links
 */

import { Container } from "@/components/ui";
import { footerNavigation, socialLinks } from "@/data/navigation";
import { SITE_INFO } from "@/config/constants";
import { Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Social Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <GithubIcon />;
      case "linkedin":
        return <LinkedInIcon />;
      case "email":
        return <Mail className="w-5 h-5" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[rgb(var(--color-card))] border-t border-[rgb(var(--color-border))] mt-auto" role="contentinfo">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] bg-clip-text text-transparent">
                    MANISH
                  </h2>
                  <p className="text-sm text-[rgb(var(--color-muted-foreground))] tracking-wider mt-1">
                    AI & DATA SCIENCE
                  </p>
                </div>
                <p className="text-sm text-[rgb(var(--color-muted-foreground))] max-w-md leading-relaxed">
                  Building intelligent digital experiences through AI, data science, and full-stack development. 
                  Exploring the intersection of technology and healthcare innovation.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[rgb(var(--color-muted-foreground))] hover:text-[rgb(var(--color-primary))] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-4">
              <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide mb-4">
                Connect
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.icon !== "email" ? "_blank" : undefined}
                    rel={social.icon !== "email" ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center gap-3 text-sm text-[rgb(var(--color-muted-foreground))]",
                      "hover:text-[rgb(var(--color-primary))] transition-colors group"
                    )}
                    aria-label={social.label}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] group-hover:border-[rgb(var(--color-primary))] flex items-center justify-center transition-colors">
                      {getSocialIcon(social.icon)}
                    </div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[rgb(var(--color-border))]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
              © {currentYear} {SITE_INFO.name}. All rights reserved.
            </p>
            <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
