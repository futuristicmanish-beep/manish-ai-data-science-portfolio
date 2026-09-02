/**
 * HEADING COMPONENT
 * Semantic heading with consistent styling
 */

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  gradient?: boolean;
}

const levelClasses = {
  1: "text-[clamp(2rem,5vw,3.75rem)] font-bold leading-tight tracking-tight",
  2: "text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight",
  3: "text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-snug tracking-normal",
  4: "text-[clamp(1.25rem,2.5vw,1.875rem)] font-semibold leading-snug tracking-normal",
};

export function Heading({
  level = 2,
  as,
  className,
  gradient = false,
  children,
  ...props
}: HeadingProps) {
  const Component = as || (`h${level}` as const);

  return (
    <Component
      className={cn(
        levelClasses[level],
        "text-[rgb(var(--color-foreground))]",
        gradient && "text-gradient",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
