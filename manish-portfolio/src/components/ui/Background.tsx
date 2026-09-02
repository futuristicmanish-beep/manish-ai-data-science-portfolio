/**
 * BACKGROUND COMPONENT
 * Futuristic background patterns and effects
 */

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "grid" | "dots" | "gradient" | "glow";
}

export function Background({
  className,
  variant = "default",
  ...props
}: BackgroundProps) {
  const variantStyles = {
    default: "",
    grid: `
      bg-[linear-gradient(to_right,rgb(var(--color-border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--color-border))_1px,transparent_1px)]
      bg-[size:4rem_4rem]
    `,
    dots: `
      bg-[radial-gradient(circle,rgb(var(--color-border))_1px,transparent_1px)]
      bg-[size:2rem_2rem]
    `,
    gradient: `
      bg-[radial-gradient(ellipse_at_top,rgb(var(--color-primary)/0.1),transparent_50%)]
    `,
    glow: `
      bg-[radial-gradient(ellipse_at_center,rgb(var(--color-primary)/0.15),transparent_70%)]
    `,
  };

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden pointer-events-none",
        variantStyles[variant],
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

/**
 * GRADIENT ORBS
 * Floating gradient orbs for premium background effect
 */
interface GradientOrbProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  color?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  blur?: "sm" | "md" | "lg";
}

const positionClasses = {
  "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const colorClasses = {
  primary: "bg-[rgb(var(--color-primary))]",
  secondary: "bg-[rgb(var(--color-secondary))]",
  accent: "bg-[rgb(var(--color-accent))]",
};

const sizeClasses = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[600px] h-[600px]",
};

const blurClasses = {
  sm: "blur-[80px]",
  md: "blur-[120px]",
  lg: "blur-[150px]",
};

export function GradientOrb({
  position = "center",
  color = "primary",
  size = "md",
  blur = "lg",
}: GradientOrbProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full opacity-20",
        positionClasses[position],
        colorClasses[color],
        sizeClasses[size],
        blurClasses[blur],
        "pointer-events-none"
      )}
      aria-hidden="true"
    />
  );
}
