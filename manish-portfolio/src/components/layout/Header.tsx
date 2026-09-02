/**
 * HEADER COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Smart navigation header with scroll behavior and glass effect
 */

"use client";

import { cn } from "@/lib/utils";
import { Brand } from "./Brand";
import { MobileMenu } from "./MobileMenu";
import { Link, ThemeSwitcher } from "@/components/ui";
import { LanguageSwitcher } from "@/components/ui";
import { mainNavigation, secondaryNavigation } from "@/data/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePathname } from "next/navigation";

export function Header() {
  const { scrollY } = useScrollPosition(50);
  const pathname = usePathname();
  const isScrolled = scrollY > 50;

  // Get section IDs from navigation items that have hash anchors
  const sectionIds = mainNavigation
    .filter(item => item.href.includes('#'))
    .map(item => item.href.split('#')[1]);

  // Track active section (only used on homepage, but always called for hooks rules)
  const activeSection = useActiveSection({ sectionIds, offset: 120 });
  const isHomepage = pathname === '/';

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[var(--z-fixed)]",
        "transition-all duration-[var(--duration-base)]",
        isScrolled
          ? [
              "glass",
              "border-b border-[rgb(var(--color-border))]",
              "shadow-[var(--shadow-sm)]",
            ]
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between",
            "transition-all duration-[var(--duration-base)]",
            isScrolled ? "h-16" : "h-20"
          )}
        >
          {/* Brand */}
          <Brand />

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {mainNavigation.map((item) => {
              const itemSection = item.href.includes('#') ? item.href.split('#')[1] : '';
              const baseHref = item.href.split("#")[0];
              
              // Improved active state logic
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && baseHref !== "/" && pathname.startsWith(baseHref)) ||
                (isHomepage && itemSection && activeSection === itemSection);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  variant="default"
                  className={cn(
                    "relative px-4 py-2 rounded-[var(--radius-md)]",
                    "text-sm font-medium",
                    "transition-colors duration-[var(--duration-base)]",
                    isActive
                      ? "text-[rgb(var(--color-primary))]"
                      : "text-[rgb(var(--color-foreground))] hover:text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-card))]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[rgb(var(--color-primary))] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Recruiter Mode */}
            {secondaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="default"
                className={cn(
                  "px-4 py-2 rounded-[var(--radius-lg)]",
                  "text-sm font-medium",
                  "text-[rgb(var(--color-accent))]",
                  "border border-[rgb(var(--color-accent))]",
                  "hover:bg-[rgb(var(--color-accent)/0.1)]",
                  "transition-colors duration-[var(--duration-base)]"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="w-px h-6 bg-[rgb(var(--color-border))]" />

            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
