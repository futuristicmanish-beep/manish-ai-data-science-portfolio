/**
 * CONTAINER COMPONENT
 * Responsive page container with consistent max-width and padding
 */

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

const sizeClasses = {
  default: "max-w-7xl", // 1280px
  narrow: "max-w-4xl", // 896px
  wide: "max-w-[1600px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        "px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
