/**
 * PROFILE IMAGE COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Premium profile photo with fallback
 */

"use client";

import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "relative",
        "w-64 h-64 lg:w-80 lg:h-80",
        "rounded-2xl overflow-hidden",
        "border-2 border-[rgb(var(--color-border))]",
        "shadow-[var(--shadow-xl)]",
        "bg-[rgb(var(--color-card))]",
        className
      )}
    >
      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--color-primary)) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Image or fallback */}
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          onError={() => setImageError(true)}
          sizes="(max-width: 1024px) 256px, 320px"
        />
      ) : (
        // Fallback when image is missing
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]">
          <User className="w-32 h-32 text-white opacity-50" aria-hidden="true" />
        </div>
      )}

      {/* Decorative corner accents */}
      <div
        className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[rgb(var(--color-accent))]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[rgb(var(--color-accent))]"
        aria-hidden="true"
      />
    </div>
  );
}
