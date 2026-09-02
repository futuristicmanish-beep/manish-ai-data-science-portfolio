/**
 * GOOGLE ANALYTICS 4 INTEGRATION
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Privacy-focused analytics implementation
 */

// Google Analytics global function types
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: GtagConfigParams | GtagEventParams
    ) => void;
    dataLayer?: unknown[];
  }
}

interface GtagConfigParams {
  page_title?: string;
  page_location?: string;
  [key: string]: unknown;
}

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

// Google Analytics Measurement ID from environment variable
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Check if Google Analytics is enabled and properly configured
 */
export const isAnalyticsEnabled = (): boolean => {
  return Boolean(GA_MEASUREMENT_ID);
};

/**
 * Initialize Google Analytics gtag
 * Call this once when analytics is enabled
 */
export const initAnalytics = (): void => {
  if (!isAnalyticsEnabled()) {
    console.info('Analytics disabled - no NEXT_PUBLIC_GA_ID configured');
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `;
  document.head.appendChild(script2);
};

/**
 * Track page view
 * @param url - Page URL (optional, defaults to current location)
 * @param title - Page title (optional, defaults to document title)
 */
export const trackPageView = (url?: string, title?: string): void => {
  if (!isAnalyticsEnabled() || typeof window === 'undefined') {
    return;
  }

  // Ensure gtag is available
  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID!, {
    page_title: title || document.title,
    page_location: url || window.location.href,
  });
};

/**
 * Track custom event
 * @param action - Event action
 * @param category - Event category
 * @param label - Event label (optional)
 * @param value - Event value (optional)
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (!isAnalyticsEnabled() || typeof window === 'undefined') {
    return;
  }

  // Ensure gtag is available
  if (typeof window.gtag !== 'function') {
    return;
  }

  const eventParameters: GtagEventParams = {
    event_category: category,
  };

  if (label) {
    eventParameters.event_label = label;
  }

  if (typeof value === 'number') {
    eventParameters.value = value;
  }

  window.gtag('event', action, eventParameters);
};

/**
 * Predefined tracking functions for common portfolio interactions
 */
export const analytics = {
  /**
   * Track external link clicks (GitHub, LinkedIn, etc.)
   */
  trackExternalLink: (platform: string, url: string) => {
    trackEvent('click', 'external_link', `${platform}:${url}`);
  },

  /**
   * Track project case study views
   */
  trackProjectView: (projectSlug: string, projectTitle: string) => {
    trackEvent('view', 'project', `${projectSlug}:${projectTitle}`);
  },

  /**
   * Track contact interactions
   */
  trackContact: (method: 'email' | 'github' | 'linkedin') => {
    trackEvent('click', 'contact', method);
  },

  /**
   * Track navigation section interactions
   */
  trackNavigation: (section: string) => {
    trackEvent('click', 'navigation', section);
  },

  /**
   * Track resume download (when implemented)
   */
  trackResumeDownload: () => {
    trackEvent('download', 'resume', 'pdf');
  },
};

/**
 * Analytics debugging helper
 */
export const getAnalyticsStatus = () => {
  return {
    enabled: isAnalyticsEnabled(),
    measurementId: GA_MEASUREMENT_ID ? `${GA_MEASUREMENT_ID.substring(0, 5)}...` : null,
    gtagLoaded: typeof window?.gtag === 'function',
    environment: process.env.NODE_ENV,
  };
};