/**
 * SECTION COMPONENT
 * Reusable section wrapper with consistent vertical spacing
 */

import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "default" | "narrow" | "wide" | "full";
  spacing?: "default" | "compact" | "spacious";
  id?: string;
}

const spacingClasses = {
  default: "py-16 md:py-24 lg:py-32",
  compact: "py-12 md:py-16 lg:py-20",
  spacious: "py-20 md:py-32 lg:py-40",
};

export function Section({
  children,
  className,
  containerSize = "default",
  spacing = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(spacingClasses[spacing], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
