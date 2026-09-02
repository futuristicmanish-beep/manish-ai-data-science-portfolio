/**
 * HERO ACTIONS COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Primary call-to-action buttons
 */

"use client";

import { Button } from "@/components/ui";
import { ArrowRight, Mail } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

interface HeroActionsProps {
  primaryAction: {
    label: string;
    href: string;
    type: "scroll" | "link" | "download";
  };
  secondaryAction: {
    label: string;
    href: string;
    type: "scroll" | "link" | "download";
  };
  tertiaryAction?: {
    label: string;
    href: string;
    type: "scroll" | "link" | "download";
  };
}

export function HeroActions({
  primaryAction,
  secondaryAction,
  tertiaryAction,
}: HeroActionsProps) {
  const handleAction = (
    href: string,
    type: "scroll" | "link" | "download"
  ) => {
    if (type === "scroll" && href.startsWith("#")) {
      smoothScrollTo(href, 80);
    } else if (type === "download") {
      // Check if file exists
      window.open(href, "_blank");
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      {/* Primary Action */}
      <Button
        variant="primary"
        size="lg"
        onClick={() => handleAction(primaryAction.href, primaryAction.type)}
        rightIcon={<ArrowRight className="w-5 h-5" />}
      >
        {primaryAction.label}
      </Button>

      {/* Secondary Action */}
      <Button
        variant="outline"
        size="lg"
        onClick={() => handleAction(secondaryAction.href, secondaryAction.type)}
        rightIcon={<Mail className="w-5 h-5" />}
      >
        {secondaryAction.label}
      </Button>

      {/* Tertiary Action (optional) */}
      {tertiaryAction && (
        <Button
          variant="ghost"
          size="lg"
          onClick={() => handleAction(tertiaryAction.href, tertiaryAction.type)}
          rightIcon={<ArrowRight className="w-5 h-5" />}
          className="hidden lg:inline-flex"
        >
          {tertiaryAction.label}
        </Button>
      )}
    </div>
  );
}
