/**
 * HERO COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Premium hero section with animations
 */

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { ProfileImage } from "./ProfileImage";
import { HeroActions } from "./HeroActions";
import { MeetManish } from "./MeetManish";
import { ScrollIndicator } from "./ScrollIndicator";
import { profileData } from "@/data/profile";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  const { name, title, tagline, bio, status, assets, actions } = profileData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-32"
    >
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            {/* Status Indicators */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-2 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)]">
                <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-primary))] animate-pulse" />
                <span className="text-xs font-medium text-[rgb(var(--color-primary))]">
                  {status.primary}
                </span>
              </div>
              <span className="text-xs text-muted">•</span>
              <span className="text-xs text-muted">{status.secondary}</span>
              <span className="text-xs text-muted">•</span>
              <span className="text-xs text-muted">{status.tertiary}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={staggerItem}
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
                "font-bold tracking-tight leading-tight",
                "text-gradient"
              )}
            >
              {name}
            </motion.h1>

            {/* Title */}
            <motion.div variants={staggerItem}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[rgb(var(--color-foreground))]">
                {title}
              </h2>
              <p className="text-lg sm:text-xl text-[rgb(var(--color-muted-foreground))] mt-2">
                {tagline}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-[rgb(var(--color-muted-foreground))] max-w-2xl mx-auto lg:mx-0"
            >
              {bio}
            </motion.p>

            {/* Actions */}
            <motion.div variants={staggerItem}>
              <HeroActions
                primaryAction={actions.primary}
                secondaryAction={actions.secondary}
                tertiaryAction={actions.tertiary}
              />
            </motion.div>

            {/* Meet Manish */}
            <motion.div variants={staggerItem}>
              <MeetManish
                voiceSrc={assets.voiceIntro}
                videoSrc={assets.videoIntro}
              />
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileImage
              src={assets.profileImage}
              alt={`${name} - ${title} professional`}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ScrollIndicator />
        </motion.div>
      </Container>
    </section>
  );
}
