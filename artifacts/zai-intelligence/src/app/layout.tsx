import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
    default: "ZD Intelligence — AI Consulting for GCC & International Organisations",
    template: "%s | ZD Intelligence",
  },
  description:
    "ZD Intelligence helps organisations across the GCC and worldwide unlock the power of AI through productivity automation, workforce training, and robust governance frameworks.",
  keywords: [
    "AI consulting",
    "GCC",
    "UAE",
    "Saudi Arabia",
    "artificial intelligence",
    "digital transformation",
    "AI governance",
    "remote AI consulting",
    "international AI",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: "ZD Intelligence",
    title: "ZD Intelligence — AI Consulting for GCC & International Organisations",
    description:
      "ZD Intelligence helps organisations across the GCC and worldwide unlock the power of AI through productivity automation, workforce training, and robust governance frameworks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZD Intelligence — AI Consulting for GCC & International Organisations",
    description:
      "ZD Intelligence helps organisations across the GCC and worldwide unlock the power of AI through productivity automation, workforce training, and robust governance frameworks.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable}`}
    ><link rel="icon" href="/favicon.ico" />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
