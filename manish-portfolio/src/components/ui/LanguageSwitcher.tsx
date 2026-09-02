/**
 * LANGUAGE SWITCHER COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Language selection dropdown (UI only - translations will be implemented later)
 */

"use client";

import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languages } from "@/data/navigation";

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]); // Default to English
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "h-10 px-4",
          "rounded-[var(--radius-lg)]",
          "bg-[rgb(var(--color-card))]",
          "border border-[rgb(var(--color-border))]",
          "text-[rgb(var(--color-foreground))]",
          "text-sm font-medium",
          "transition-all duration-[var(--duration-base)]",
          "hover:bg-[rgb(var(--color-card-hover))]",
          "hover:border-[rgb(var(--color-primary))]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))]",
          "active:scale-95"
        )}
      >
        <Languages className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={cn(
            "h-4 w-4 transition-transform duration-[var(--duration-fast)]",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            "absolute right-0 top-full mt-2",
            "w-56",
            "rounded-[var(--radius-lg)]",
            "bg-[rgb(var(--color-card))]",
            "border border-[rgb(var(--color-border))]",
            "shadow-[var(--shadow-lg)]",
            "overflow-hidden",
            "z-[var(--z-dropdown)]",
            "animate-in fade-in slide-in-from-top-2 duration-200"
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1">
            {languages.map((language) => {
              const isSelected = currentLanguage.code === language.code;

              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => {
                    setCurrentLanguage(language);
                    setIsOpen(false);
                    // TODO: Implement actual language switching in future phase
                  }}
                  role="menuitem"
                  aria-label={`Switch to ${language.name}`}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-4 py-2.5",
                    "text-sm text-left",
                    "transition-colors duration-[var(--duration-fast)]",
                    "focus-visible:outline-none focus-visible:bg-[rgb(var(--color-card-hover))]",
                    isSelected
                      ? [
                          "text-[rgb(var(--color-primary))]",
                          "bg-[rgb(var(--color-primary)/0.1)]",
                          "font-medium",
                        ]
                      : [
                          "text-[rgb(var(--color-foreground))]",
                          "hover:bg-[rgb(var(--color-card-hover))]",
                        ]
                  )}
                >
                  <div className="flex flex-col">
                    <span>{language.name}</span>
                    <span className="text-xs text-muted">
                      {language.nativeName}
                    </span>
                  </div>
                  {isSelected && (
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
