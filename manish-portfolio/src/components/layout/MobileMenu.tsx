/**
 * MOBILE MENU COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Full-screen mobile navigation with animation
 */

"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@/components/ui";
import { ThemeSwitcher } from "@/components/ui";
import { LanguageSwitcher } from "@/components/ui";
import { mainNavigation, secondaryNavigation } from "@/data/navigation";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when pathname changes
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Close menu on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className={cn(
          "inline-flex items-center justify-center",
          "h-11 w-11",
          "rounded-[var(--radius-lg)]",
          "text-[rgb(var(--color-foreground))]",
          "transition-colors duration-[var(--duration-base)]",
          "hover:bg-[rgb(var(--color-card))]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))]",
          "active:scale-95"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[rgb(var(--color-background))] bg-opacity-50 backdrop-blur-sm z-[var(--z-modal-backdrop)]"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "fixed top-0 right-0 bottom-0",
                "w-full max-w-sm",
                "bg-[rgb(var(--color-background))]",
                "border-l border-[rgb(var(--color-border))]",
                "shadow-2xl",
                "z-[var(--z-modal)]",
                "overflow-y-auto"
              )}
              role="dialog"
              aria-label="Mobile navigation"
              aria-modal="true"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className={cn(
                      "inline-flex items-center justify-center",
                      "h-11 w-11",
                      "rounded-[var(--radius-lg)]",
                      "text-[rgb(var(--color-foreground))]",
                      "hover:bg-[rgb(var(--color-card))]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]"
                    )}
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Main Navigation */}
                <nav className="flex-1 space-y-2" aria-label="Main navigation">
                  {mainNavigation.map((item) => {
                    const itemSection = item.href.includes('#') ? item.href.split('#')[1] : '';
                    const baseHref = item.href.split("#")[0];
                    const isHomepage = pathname === '/';
                    
                    // Fixed active state logic - only ONE item can be active
                    let isActive = false;
                    
                    // Priority 1: Exact route match
                    if (pathname === item.href) {
                      isActive = true;
                    }
                    // Priority 2: Route prefix match 
                    else if (item.href !== "/" && baseHref !== "/" && pathname.startsWith(baseHref)) {
                      isActive = true;
                    }
                    // Priority 3: Homepage section match (only on homepage)
                    else if (isHomepage && itemSection) {
                      // We don't have activeSection in mobile component, so we'll use a simpler approach
                      // This ensures mobile navigation matches desktop behavior
                      isActive = false; // Let exact/route matching handle mobile nav
                    }
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        variant="default"
                        className={cn(
                          "block w-full px-4 py-3 rounded-[var(--radius-lg)]",
                          "text-lg font-medium",
                          "transition-colors duration-[var(--duration-base)]",
                          isActive
                            ? "text-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary)/0.1)]"
                            : "text-[rgb(var(--color-foreground))] hover:bg-[rgb(var(--color-card))]"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="my-6 border-t border-[rgb(var(--color-border))]" />

                {/* Secondary Navigation */}
                <div className="space-y-2 mb-6">
                  {secondaryNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      variant="default"
                      className={cn(
                        "block w-full px-4 py-3 rounded-[var(--radius-lg)]",
                        "text-base font-medium",
                        "text-[rgb(var(--color-accent))]",
                        "border border-[rgb(var(--color-accent))]",
                        "hover:bg-[rgb(var(--color-accent)/0.1)]",
                        "transition-colors duration-[var(--duration-base)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <ThemeSwitcher />
                    </div>
                    <div className="flex-1">
                      <LanguageSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
