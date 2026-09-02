/**
 * DIVIDER COMPONENT
 * Visual separator with optional text
 */

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  text?: string;
}

export function Divider({
  className,
  orientation = "horizontal",
  text,
  ...props
}: DividerProps) {
  if (text && orientation === "horizontal") {
    return (
      <div
        className={cn("relative flex items-center my-8", className)}
        {...props}
      >
        <div className="flex-grow border-t border-[rgb(var(--color-border))]" />
        <span className="flex-shrink mx-4 text-sm text-[rgb(var(--color-muted-foreground))]">
          {text}
        </span>
        <div className="flex-grow border-t border-[rgb(var(--color-border))]" />
      </div>
    );
  }

  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "w-px h-full bg-[rgb(var(--color-border))]",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <hr
      className={cn(
        "border-t border-[rgb(var(--color-border))] my-8",
        className
      )}
      {...props}
    />
  );
}
