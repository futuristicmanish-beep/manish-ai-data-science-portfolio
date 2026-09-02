/**
 * CONTACT SECTION COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Contact and call-to-action section
 */

"use client";

import { Container, Heading, Section } from "@/components/ui";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
  return (
    <Section spacing="spacious" id="contact">
      <Container size="wide">
        <div className="space-y-12">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <Heading level={2} gradient>
              Let&apos;s Connect
            </Heading>
            <p className="text-xl text-[rgb(var(--color-muted-foreground))]">
              Open to internship opportunities, project collaborations, and mentorship. Let&apos;s talk about AI, data science, or technology.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
          >
            {/* Contact Info - 2 columns on desktop */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <ContactInfo />
            </motion.div>

            {/* Contact Form - 3 columns on desktop */}
            <motion.div variants={staggerItem} className="lg:col-span-3">
              <div className="bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-[var(--radius-xl)] p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[rgb(var(--color-foreground))]">
                      Send a Message
                    </h2>
                    <p className="text-sm text-[rgb(var(--color-muted-foreground))] mt-2">
                      Fill out the form below and I&apos;ll get back to you as soon as possible
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
