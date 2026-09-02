/**
 * TEXTAREA COMPONENT
 * Multi-line text input field with consistent styling
 */

import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[rgb(var(--color-foreground))] mb-2"
          >
            {label}
            {props.required && (
              <span className="text-[rgb(var(--color-error))] ml-1">*</span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            // Base styles
            "w-full px-4 py-3",
            "bg-[rgb(var(--color-card))]",
            "border border-[rgb(var(--color-border))]",
            "rounded-[var(--radius-lg)]",
            "text-[rgb(var(--color-foreground))]",
            "placeholder:text-[rgb(var(--color-muted-foreground))]",
            "transition-all duration-[var(--duration-base)]",
            "resize-y min-h-[120px]",
            // Focus styles
            "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent",
            // Hover styles
            "hover:border-[rgb(var(--color-primary))]",
            // Disabled styles
            "disabled:opacity-50 disabled:cursor-not-allowed",
            // Error styles
            error &&
              "border-[rgb(var(--color-error))] focus:ring-[rgb(var(--color-error))]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[rgb(var(--color-error))]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
