/**
 * ACHIEVEMENTS & RECOGNITION SECTION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Achievements, certifications, and recognition
 */

"use client";

import { Container, Divider, Heading, Section, Card } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { achievements } from "@/data/achievements";
import { certifications } from "@/data/certifications";
import { Trophy, Award, Calendar, ExternalLink, MapPin, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AchievementsSection() {
  const hasAchievements = achievements.length > 0;
  const hasCertifications = certifications.length > 0;

  // Type badge colors
  const getTypeBadgeStyle = (type: string) => {
    const styles: Record<string, string> = {
      hackathon: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400",
      competition: "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400",
      academic: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
      program: "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400",
      recognition: "bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400",
      project: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    };
    return styles[type] || "bg-[rgb(var(--color-primary)/0.1)] border-[rgb(var(--color-primary)/0.2)] text-[rgb(var(--color-primary))]";
  };

  return (
    <Section spacing="spacious" id="achievements">
      <Container size="wide">
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <Heading level={2} gradient>
              Achievements & Recognition
            </Heading>
            <p className="text-xl text-[rgb(var(--color-muted-foreground))]">
              Milestones, participation and accomplishments from my academic and technical journey
            </p>
          </motion.div>

          <Divider />

          {/* Achievements */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <Heading level={2}>Achievements</Heading>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-5xl mx-auto"
            >
              {hasAchievements ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements
                    .sort((a, b) => a.order - b.order)
                    .map((achievement) => (
                      <motion.div key={achievement.id} variants={staggerItem}>
                        <Card 
                          variant="default" 
                          className="h-full overflow-hidden hover:border-[rgb(var(--color-primary)/0.3)] transition-colors"
                        >
                          <div className="p-6 space-y-4">
                            {/* Header with Icon */}
                            <div className="flex items-start gap-4">
                              <div
                                className={cn(
                                  "flex-shrink-0 w-12 h-12 rounded-lg",
                                  "flex items-center justify-center",
                                  "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                                  "text-white"
                                )}
                              >
                                <Trophy className="w-6 h-6" aria-hidden="true" />
                              </div>

                              <div className="flex-1 min-w-0">
                                {/* Type Badge */}
                                <div className={cn(
                                  "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wide border mb-2",
                                  getTypeBadgeStyle(achievement.type)
                                )}>
                                  {achievement.type}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[rgb(var(--color-foreground))]">
                                  {achievement.title}
                                </h3>

                                {/* Event/Organization */}
                                {achievement.event && (
                                  <p className="text-sm text-[rgb(var(--color-primary))] font-medium mt-1">
                                    {achievement.event}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-3 text-sm text-[rgb(var(--color-muted-foreground))]">
                              {achievement.organization && (
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="w-4 h-4" aria-hidden="true" />
                                  <span>{achievement.organization}</span>
                                </div>
                              )}
                              {achievement.date && (
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="w-4 h-4" aria-hidden="true" />
                                  <span>{achievement.date}</span>
                                </div>
                              )}
                            </div>

                            {/* Placement Badge */}
                            {achievement.placement && (
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-sm font-medium text-[rgb(var(--color-primary))]">
                                <Award className="w-4 h-4" aria-hidden="true" />
                                {achievement.placement}
                              </div>
                            )}

                            {/* Description */}
                            {achievement.description && (
                              <p className="text-sm text-[rgb(var(--color-muted-foreground))] leading-relaxed">
                                {achievement.description}
                              </p>
                            )}

                            {/* Technologies */}
                            {achievement.technologies && achievement.technologies.length > 0 && (
                              <div className="space-y-2 pt-2">
                                <div className="flex items-center gap-2">
                                  <Code2 className="w-4 h-4 text-[rgb(var(--color-primary))]" aria-hidden="true" />
                                  <span className="text-xs font-semibold text-[rgb(var(--color-foreground))] uppercase tracking-wide">
                                    Technologies
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {achievement.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-xs px-2.5 py-1 rounded-md bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-[rgb(var(--color-primary))]"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Related Project Link */}
                            {achievement.relatedProject && (
                              <div className="pt-2">
                                <Link 
                                  href={`/projects/${achievement.relatedProject}`}
                                  className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--color-primary))] hover:underline"
                                >
                                  View Related Project
                                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                </Link>
                              </div>
                            )}

                            {/* Credential Link */}
                            {achievement.credentialUrl && (
                              <div className="pt-2">
                                <a
                                  href={achievement.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn(
                                    "inline-flex items-center justify-center gap-2 w-full",
                                    "h-9 px-4 text-sm font-medium rounded-[var(--radius-lg)]",
                                    "bg-transparent text-[rgb(var(--color-foreground))]",
                                    "border border-[rgb(var(--color-border))]",
                                    "hover:bg-[rgb(var(--color-card))] hover:border-[rgb(var(--color-primary))]",
                                    "transition-all duration-[var(--duration-base)]",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]"
                                  )}
                                >
                                  View Details
                                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Gradient Footer */}
                          <div
                            className="h-1.5 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]"
                            aria-hidden="true"
                          />
                        </Card>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <Card variant="default" className="p-12 text-center space-y-4 max-w-2xl mx-auto">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-[rgb(var(--color-primary))]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
                      Building Achievements
                    </h3>
                    <p className="text-base text-[rgb(var(--color-muted-foreground))]">
                      More milestones will be added as my technical journey continues
                    </p>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>

          <Divider />

          {/* Certifications */}
          <div className="space-y-8" id="certifications">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center"
            >
              <Heading level={2}>Certifications</Heading>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-5xl mx-auto"
            >
              {hasCertifications ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications
                    .sort((a, b) => a.order - b.order)
                    .map((cert) => (
                      <motion.div key={cert.id} variants={staggerItem}>
                        <Card 
                          variant="default" 
                          className="h-full overflow-hidden hover:border-[rgb(var(--color-primary)/0.3)] transition-colors"
                        >
                          <div className="p-6 space-y-4">
                            {/* Header with Icon */}
                            <div className="flex items-start gap-3">
                              <div
                                className={cn(
                                  "flex-shrink-0 w-10 h-10 rounded-lg",
                                  "flex items-center justify-center",
                                  "bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
                                  "text-white"
                                )}
                              >
                                <Award className="w-5 h-5" aria-hidden="true" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <h3 className="text-base font-bold text-[rgb(var(--color-foreground))] line-clamp-2">
                                  {cert.name}
                                </h3>
                              </div>
                            </div>

                            {/* Issuer */}
                            <p className="text-sm text-[rgb(var(--color-primary))] font-medium">
                              {cert.issuer}
                            </p>

                            {/* Issue Date */}
                            {cert.issueDate && (
                              <div className="flex items-center gap-2 text-sm text-[rgb(var(--color-muted-foreground))]">
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <span>Issued: {cert.issueDate}</span>
                              </div>
                            )}

                            {/* Description */}
                            {cert.description && (
                              <p className="text-sm text-[rgb(var(--color-muted-foreground))] leading-relaxed line-clamp-3">
                                {cert.description}
                              </p>
                            )}

                            {/* Skills */}
                            {cert.skills && cert.skills.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {cert.skills.slice(0, 3).map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--color-primary)/0.1)] border border-[rgb(var(--color-primary)/0.2)] text-[rgb(var(--color-primary))]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                                {cert.skills.length > 3 && (
                                  <span className="text-xs px-2 py-1 text-[rgb(var(--color-muted-foreground))]">
                                    +{cert.skills.length - 3} more
                                  </span>
                                )}
                              </div>
                            )}

                            {/* Credential Link */}
                            {cert.credentialUrl && (
                              <div className="pt-2">
                                <a
                                  href={cert.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn(
                                    "inline-flex items-center justify-center gap-2 w-full",
                                    "h-9 px-4 text-sm font-medium rounded-[var(--radius-lg)]",
                                    "bg-transparent text-[rgb(var(--color-foreground))]",
                                    "border border-[rgb(var(--color-border))]",
                                    "hover:bg-[rgb(var(--color-card))] hover:border-[rgb(var(--color-primary))]",
                                    "transition-all duration-[var(--duration-base)]",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]"
                                  )}
                                >
                                  View Credential
                                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Gradient Footer */}
                          <div
                            className="h-1.5 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]"
                            aria-hidden="true"
                          />
                        </Card>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <Card variant="default" className="p-12 text-center space-y-4 max-w-2xl mx-auto">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center">
                      <Award className="w-8 h-8 text-[rgb(var(--color-primary))]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
                      Building Credentials
                    </h3>
                    <p className="text-base text-[rgb(var(--color-muted-foreground))]">
                      Certifications will be added as they are earned through continuous learning
                    </p>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
