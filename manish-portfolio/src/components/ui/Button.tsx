/**
 * BUTTON COMPONENT
 * Premium button with multiple variants and states
 */

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] hover:bg-[rgb(var(--color-primary-hover))] shadow-md hover:shadow-lg",
  secondary:
    "bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-secondary-foreground))] hover:bg-[rgb(var(--color-secondary-hover))] shadow-md hover:shadow-lg",
  ghost:
    "bg-transparent text-[rgb(var(--color-foreground))] hover:bg-[rgb(var(--color-card))]",
  outline:
    "bg-transparent text-[rgb(var(--color-foreground))] border border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-card))] hover:border-[rgb(var(--color-primary))]",
};

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2",
          "font-medium",
          "rounded-[var(--radius-lg)]",
          "transition-all duration-[var(--duration-base)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))]",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.98]",
          // Variant styles
          variantClasses[variant],
          // Size styles
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
