/**
 * CONTACT FORM COMPONENT
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Contact form with validation and states
 */

"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState("submitting");

    try {
      // TODO: Connect to backend/API when available
      // For now, simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate success
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});

      // Reset success state after 5 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 5000);
    } catch {
      setFormState("error");
      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 5000);
    }
  };

  // Input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const isSubmitting = formState === "submitting";
  const isSuccess = formState === "success";
  const isError = formState === "error";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          Name <span className="text-[rgb(var(--color-primary))]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            "w-full h-12 px-4 rounded-[var(--radius-lg)]",
            "bg-[rgb(var(--color-card))]",
            "border border-[rgb(var(--color-border))]",
            "text-[rgb(var(--color-foreground))]",
            "placeholder:text-[rgb(var(--color-muted-foreground))]",
            "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent",
            "transition-all duration-[var(--duration-base)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            errors.name && "border-red-500 focus:ring-red-500"
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          Email <span className="text-[rgb(var(--color-primary))]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            "w-full h-12 px-4 rounded-[var(--radius-lg)]",
            "bg-[rgb(var(--color-card))]",
            "border border-[rgb(var(--color-border))]",
            "text-[rgb(var(--color-foreground))]",
            "placeholder:text-[rgb(var(--color-muted-foreground))]",
            "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent",
            "transition-all duration-[var(--duration-base)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            errors.email && "border-red-500 focus:ring-red-500"
          )}
          placeholder="name@email.com"
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
          className={cn(
            "w-full h-12 px-4 rounded-[var(--radius-lg)]",
            "bg-[rgb(var(--color-card))]",
            "border border-[rgb(var(--color-border))]",
            "text-[rgb(var(--color-foreground))]",
            "placeholder:text-[rgb(var(--color-muted-foreground))]",
            "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent",
            "transition-all duration-[var(--duration-base)]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          placeholder="What would you like to discuss?"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[rgb(var(--color-foreground))]"
        >
          Message <span className="text-[rgb(var(--color-primary))]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-[var(--radius-lg)]",
            "bg-[rgb(var(--color-card))]",
            "border border-[rgb(var(--color-border))]",
            "text-[rgb(var(--color-foreground))]",
            "placeholder:text-[rgb(var(--color-muted-foreground))]",
            "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent",
            "transition-all duration-[var(--duration-base)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "resize-none",
            errors.message && "border-red-500 focus:ring-red-500"
          )}
          placeholder="Tell me about your project, opportunity, or idea..."
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="space-y-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          className="w-full"
          rightIcon={!isSubmitting ? <Send className="w-5 h-5" /> : undefined}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {/* Success Message */}
        {isSuccess && (
          <div
            className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400"
            role="alert"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold">Message sent successfully!</p>
              <p className="mt-1">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div
            className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400"
            role="alert"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold">Something went wrong</p>
              <p className="mt-1">
                Please try again or contact me directly by email.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Note about backend */}
      <p className="text-xs text-[rgb(var(--color-muted-foreground))] text-center">
        * This form is currently frontend-only. Backend integration coming soon.
      </p>
    </form>
  );
}
