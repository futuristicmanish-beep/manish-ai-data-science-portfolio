/**
 * MEDIA MODAL COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Modal for voice and video introductions
 */

"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "voice" | "video";
  src: string;
  title: string;
}

export function MediaModal({
  isOpen,
  onClose,
  type,
  src,
  title,
}: MediaModalProps) {
  const [mediaError, setMediaError] = useState(false);
  const mediaRef = useRef<HTMLAudioElement | HTMLVideoElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Stop media when modal closes
  useEffect(() => {
    if (!isOpen && mediaRef.current) {
      if ("pause" in mediaRef.current) {
        mediaRef.current.pause();
      }
    }
  }, [isOpen]);

  const handleMediaError = () => {
    setMediaError(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[rgb(var(--color-background))] bg-opacity-80 backdrop-blur-sm z-[var(--z-modal-backdrop)]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "w-full max-w-2xl mx-4",
              "bg-[rgb(var(--color-card))]",
              "border border-[rgb(var(--color-border))]",
              "rounded-[var(--radius-2xl)]",
              "shadow-[var(--shadow-2xl)]",
              "z-[var(--z-modal)]",
              "overflow-hidden"
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="media-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[rgb(var(--color-border))]">
              <h2
                id="media-modal-title"
                className="text-xl font-semibold text-[rgb(var(--color-foreground))]"
              >
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className={cn(
                  "inline-flex items-center justify-center",
                  "h-11 w-11 rounded-[var(--radius-lg)]",
                  "text-[rgb(var(--color-foreground))]",
                  "hover:bg-[rgb(var(--color-card-hover))]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]",
                  "transition-colors"
                )}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!mediaError ? (
                <>
                  {type === "video" && (
                    <video
                      ref={mediaRef as React.RefObject<HTMLVideoElement>}
                      controls
                      className="w-full rounded-[var(--radius-lg)]"
                      onError={handleMediaError}
                    >
                      <source src={src} type="video/mp4" />
                      Your browser does not support the video element.
                    </video>
                  )}

                  {type === "voice" && (
                    <audio
                      ref={mediaRef as React.RefObject<HTMLAudioElement>}
                      controls
                      className="w-full"
                      onError={handleMediaError}
                    >
                      <source src={src} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted">
                    Media is currently unavailable. Please check back later.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
