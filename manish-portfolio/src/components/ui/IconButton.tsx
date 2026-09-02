/**
 * ICON BUTTON COMPONENT
 * Compact button for icons with consistent sizing
 */

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  label: string; // Required for accessibility
}

const variantClasses = {
  default:
    "bg-[rgb(var(--color-card))] text-[rgb(var(--color-foreground))] hover:bg-[rgb(var(--color-card-hover))] border border-[rgb(var(--color-border))]",
  ghost:
    "bg-transparent text-[rgb(var(--color-foreground))] hover:bg-[rgb(var(--color-card))]",
  outline:
    "bg-transparent text-[rgb(var(--color-foreground))] border border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-card))] hover:border-[rgb(var(--color-primary))]",
};

const sizeClasses = {
  sm: "h-9 w-9 text-sm",
  md: "h-11 w-11 text-base",
  lg: "h-12 w-12 text-lg",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "ghost",
      size = "md",
      label,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        aria-label={label}
        title={label}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center",
          "rounded-[var(--radius-lg)]",
          "transition-all duration-[var(--duration-base)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))]",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-95",
          // Variant styles
          variantClasses[variant],
          // Size styles
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
