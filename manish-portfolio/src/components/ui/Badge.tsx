/**
 * BADGE COMPONENT
 * Small label component for tags, status, and categories
 */

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: "bg-[rgb(var(--color-card))] text-[rgb(var(--color-foreground))] border border-[rgb(var(--color-border))]",
  primary: "bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))]",
  secondary: "bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-secondary-foreground))]",
  accent: "bg-[rgb(var(--color-accent))] text-[rgb(var(--color-accent-foreground))]",
  success: "bg-[rgb(var(--color-success))] text-white",
  warning: "bg-[rgb(var(--color-warning))] text-white",
  error: "bg-[rgb(var(--color-error))] text-white",
  outline: "bg-transparent text-[rgb(var(--color-foreground))] border border-[rgb(var(--color-border))]",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "font-medium",
          "rounded-[var(--radius-md)]",
          "transition-colors duration-[var(--duration-fast)]",
          "whitespace-nowrap",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
