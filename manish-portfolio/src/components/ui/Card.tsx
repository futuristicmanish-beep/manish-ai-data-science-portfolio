/**
 * CARD COMPONENT
 * Premium card with variants and hover effects
 */

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered" | "elevated";
  interactive?: boolean;
  featured?: boolean;
}

const variantClasses = {
  default: "bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))]",
  glass: "glass",
  bordered:
    "bg-transparent border-2 border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))]",
  elevated:
    "bg-[rgb(var(--color-card))] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      interactive = false,
      featured = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-[var(--radius-xl)] p-6",
          "transition-all duration-[var(--duration-base)]",
          // Variant styles
          variantClasses[variant],
          // Interactive styles
          interactive && [
            "cursor-pointer",
            "hover:scale-[1.02]",
            variant === "default" &&
              "hover:bg-[rgb(var(--color-card-hover))] hover:border-[rgb(var(--color-primary))]",
          ],
          // Featured styles
          featured && [
            "ring-2 ring-[rgb(var(--color-primary))] ring-offset-2 ring-offset-[rgb(var(--color-background))]",
            "shadow-[var(--shadow-glow-primary)]",
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-4", className)} {...props} />
));

CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-[clamp(1.25rem,2.5vw,1.875rem)] font-semibold leading-snug tracking-normal", className)}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[rgb(var(--color-muted-foreground))]", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-4 pt-4 border-t border-[rgb(var(--color-border))]", className)} {...props} />
));

CardFooter.displayName = "CardFooter";
