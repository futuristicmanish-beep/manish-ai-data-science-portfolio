/**
 * LINK COMPONENT
 * Enhanced Next.js Link with consistent styling
 */

import { cn } from "@/lib/utils";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps {
  variant?: "default" | "primary" | "muted" | "underline";
  external?: boolean;
}

const variantClasses = {
  default: "text-[rgb(var(--color-foreground))] hover:text-[rgb(var(--color-primary))]",
  primary: "text-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary-hover))]",
  muted: "text-[rgb(var(--color-muted-foreground))] hover:text-[rgb(var(--color-foreground))]",
  underline:
    "text-[rgb(var(--color-foreground))] underline underline-offset-4 decoration-[rgb(var(--color-muted))] hover:decoration-[rgb(var(--color-primary))]",
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, variant = "default", external = false, children, ...props },
    ref
  ) => {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <NextLink
        ref={ref}
        className={cn(
          "transition-colors duration-[var(--duration-fast)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:rounded-sm",
          variantClasses[variant],
          className
        )}
        {...externalProps}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
