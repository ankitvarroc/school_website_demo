import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// 1. Bootstrap CSS & Bootstrap Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// 2. Global Institutional Design Tokens & Overrides
import "./globals.css";

// 3. Dynamic Bootstrap JS Loader & SEO Structured Data
import BootstrapClient from "@/components/BootstrapClient";
import SchoolJsonLd from "@/components/SchoolJsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import { ClickSpark } from "@/components/reactbits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dynamicpublicschool.edu"),
  title: "Dynamic Public School | Premier CBSE Day-Cum-Boarding Institution",
  description:
    "Official portal of Dynamic Public School. Nurturing holistic excellence, 99.8% CBSE board distinction, 35-acre smart green campus, robotics AI labs, and Olympic sports. Admissions open for 2026-27.",
  keywords: [
    "Dynamic Public School",
    "DPS",
    "CBSE Affiliated School",
    "Admissions 2026-27",
    "Best CBSE School",
    "STEM AI Robotics School",
    "Olympic Swimming School",
    "Holistic Education",
  ],
  authors: [{ name: "Dynamic Public School Educational Trust" }],
  openGraph: {
    title: "Dynamic Public School | Nurturing Brilliant Minds & Eternal Values",
    description:
      "Premier CBSE-affiliated senior secondary institution combining moral character with modern STEM robotics and Olympic athletic excellence.",
    url: "https://dynamicpublicschool.edu",
    siteName: "Dynamic Public School",
    images: [
      {
        url: "/images/hero_campus.jpg",
        width: 1280,
        height: 720,
        alt: "Dynamic Public School Panoramic Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Public School | Excellence in Holistic Education",
    description:
      "Where moral values unite with 21st-century AI innovation, sports mastery, and 100% university placements.",
    images: ["/images/hero_campus.jpg"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-bs-theme="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <SchoolJsonLd />
      </head>
      <body className="min-vh-100 d-flex flex-column position-relative">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <BootstrapClient />
        <SmoothScroll>
          <ClickSpark isGlobal sparkColor={["#d4af37", "#f59e0b", "#fbbf24", "#ffffff"]}>
            {children}
          </ClickSpark>
        </SmoothScroll>
      </body>
    </html>
  );
}
