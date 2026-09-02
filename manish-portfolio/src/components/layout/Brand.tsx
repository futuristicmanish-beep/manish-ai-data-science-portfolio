/**
 * BRAND COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Simple text-based brand that can be replaced with a logo later
 */

import { Link } from "@/components/ui";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
  compact?: boolean;
}

export function Brand({ className, compact = false }: BrandProps) {
  return (
    <Link
      href="/"
      variant="default"
      className={cn(
        "flex items-center gap-2 font-bold tracking-tight",
        "hover:text-[rgb(var(--color-primary))]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:rounded-sm",
        className
      )}
      aria-label="Manish Vidhya Narayanan - Home"
    >
      {compact ? (
        // Compact version for mobile
        <span className="text-xl">MVN</span>
      ) : (
        // Full version for desktop
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-gradient">MANISH</span>
          <span className="text-xs tracking-wider text-muted">
            VIDHYA NARAYANAN
          </span>
        </div>
      )}
    </Link>
  );
}
