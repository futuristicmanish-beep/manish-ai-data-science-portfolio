/**
 * MEET MANISH COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Interactive media introduction options
 */

"use client";

import { cn } from "@/lib/utils";
import { Mic, Video } from "lucide-react";
import { useState } from "react";
import { MediaModal } from "./MediaModal";

interface MeetManishProps {
  voiceSrc: string;
  videoSrc: string;
}

export function MeetManish({ voiceSrc, videoSrc }: MeetManishProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "voice" | "video" | null;
  }>({
    isOpen: false,
    type: null,
  });

  const openModal = (type: "voice" | "video") => {
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null });
  };

  return (
    <>
      <div className="flex flex-col items-center lg:items-start gap-4">
        <p className="text-sm font-medium text-[rgb(var(--color-muted-foreground))] uppercase tracking-wider">
          Meet Manish
        </p>

        <div className="flex gap-3">
          {/* Voice Button */}
          <button
            type="button"
            onClick={() => openModal("voice")}
            aria-label="Listen to voice introduction"
            className={cn(
              "flex items-center gap-2 px-6 py-3",
              "rounded-[var(--radius-lg)]",
              "bg-[rgb(var(--color-card))]",
              "border border-[rgb(var(--color-border))]",
              "text-sm font-medium",
              "text-[rgb(var(--color-foreground))]",
              "hover:bg-[rgb(var(--color-card-hover))]",
              "hover:border-[rgb(var(--color-primary))]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]",
              "transition-all duration-[var(--duration-base)]",
              "active:scale-95"
            )}
          >
            <Mic className="w-4 h-4" aria-hidden="true" />
            <span>Voice</span>
          </button>

          {/* Video Button */}
          <button
            type="button"
            onClick={() => openModal("video")}
            aria-label="Watch video introduction"
            className={cn(
              "flex items-center gap-2 px-6 py-3",
              "rounded-[var(--radius-lg)]",
              "bg-[rgb(var(--color-card))]",
              "border border-[rgb(var(--color-border))]",
              "text-sm font-medium",
              "text-[rgb(var(--color-foreground))]",
              "hover:bg-[rgb(var(--color-card-hover))]",
              "hover:border-[rgb(var(--color-primary))]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]",
              "transition-all duration-[var(--duration-base)]",
              "active:scale-95"
            )}
          >
            <Video className="w-4 h-4" aria-hidden="true" />
            <span>Video</span>
          </button>
        </div>
      </div>

      {/* Media Modal */}
      {modalState.type && (
        <MediaModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          type={modalState.type}
          src={modalState.type === "voice" ? voiceSrc : videoSrc}
          title={
            modalState.type === "voice"
              ? "Voice Introduction"
              : "Video Introduction"
          }
        />
      )}
    </>
  );
}
