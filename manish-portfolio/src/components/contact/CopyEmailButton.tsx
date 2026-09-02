/**
 * COPY EMAIL BUTTON COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Button to copy email to clipboard with feedback
 */

"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({ email, className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Modern Clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
          document.execCommand("copy");
          setCopied(true);
        } catch (err) {
          console.error("Failed to copy email:", err);
        } finally {
          document.body.removeChild(textArea);
        }
      }

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
        "text-sm font-medium",
        "bg-[rgb(var(--color-card))] hover:bg-[rgb(var(--color-primary)/0.1)]",
        "border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary)/0.3)]",
        "text-[rgb(var(--color-foreground))]",
        "transition-all duration-[var(--duration-base)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]",
        copied && "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400",
        className
      )}
      aria-label={copied ? "Email copied" : "Copy email to clipboard"}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" aria-hidden="true" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" aria-hidden="true" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
}
