/**
 * MOTION CONFIGURATION
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Global Framer Motion configuration with reduced motion support
 */

"use client";

import { MotionConfig as FramerMotionConfig } from "framer-motion";
import { type ReactNode } from "react";

interface MotionConfigProps {
  children: ReactNode;
}

export function MotionConfig({ children }: MotionConfigProps) {
  return (
    <FramerMotionConfig reducedMotion="user">
      {children}
    </FramerMotionConfig>
  );
}
