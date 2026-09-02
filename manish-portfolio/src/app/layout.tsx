import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import { ThemeScript } from "@/lib/theme-script";
import { MotionConfig } from "@/lib/motion-config";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { BackToTop } from "@/components/ui";
import { defaultMetadata, getWebsiteJsonLd, getPersonJsonLd } from "@/config/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Generate JSON-LD structured data
  const websiteJsonLd = getWebsiteJsonLd();
  const personJsonLd = getPersonJsonLd();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="WNODy3MfVrh5xsm2Ev4fpLtBfsw41KlmK-k-xeVzL88" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <MotionConfig>
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <BackToTop />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
