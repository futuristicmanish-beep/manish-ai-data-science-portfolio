/**
 * THEME SYSTEM
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Complete theme management with System/Light/Dark modes
 */

"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import type { Theme } from "@/types";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "manish-portfolio-theme";

/**
 * Get initial theme from localStorage or default to "system"
 */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system";

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch (error) {
    console.warn("Failed to read theme from localStorage:", error);
  }

  return "system";
}

/**
 * Get system preference
 */
function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Resolve theme to actual light/dark value
 */
function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return getSystemTheme();
  }
  return theme;
}

/**
 * Apply theme to DOM
 */
function applyTheme(resolved: "light" | "dark") {
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
}

/**
 * Save theme preference to localStorage
 */
function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.warn("Failed to save theme to localStorage:", error);
  }
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Get initial values during first render
  const getInitialState = () => {
    const initialTheme = getInitialTheme();
    const initialResolved = resolveTheme(initialTheme);
    return { theme: initialTheme, resolved: initialResolved };
  };

  const [state, setState] = useState(getInitialState);
  const [mounted, setMounted] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  // Use useLayoutEffect to avoid flash, but only set mounted flag
  useLayoutEffect(() => {
    setMounted(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Handle theme changes
  const setTheme = (newTheme: Theme) => {
    const newResolved = resolveTheme(newTheme);
    setState({ theme: newTheme, resolved: newResolved });
    applyTheme(newResolved);
    saveTheme(newTheme);
  };

  // Listen for system theme changes when in system mode
  useLayoutEffect(() => {
    if (state.theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newResolved = e.matches ? "dark" : "light";
      setState((prev) => ({ ...prev, resolved: newResolved }));
      applyTheme(newResolved);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [state.theme]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{ theme: state.theme, resolvedTheme: state.resolved, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
