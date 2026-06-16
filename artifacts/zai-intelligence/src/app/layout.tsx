import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZAI Intelligence — AI Automation & Intelligence Systems",
    template: "%s | ZAI Intelligence",
  },
  description:
    "ZAI Intelligence designs and builds AI automation workflows, intelligence systems, and data pipelines that help modern businesses work faster, make better decisions, and scale without adding overhead.",
  keywords: [
    "AI automation",
    "AI workflows",
    "intelligence systems",
    "AI consulting",
    "business automation",
    "machine learning",
    "AI strategy",
    "workflow automation",
    "data pipelines",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ZAI Intelligence",
    title: "ZAI Intelligence — AI Automation & Intelligence Systems",
    description:
      "We design and build AI automation workflows and intelligence systems for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAI Intelligence — AI Automation & Intelligence Systems",
    description:
      "We design and build AI automation workflows and intelligence systems for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
