
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuto Kuroki",
  description:
    "Profile page of Yuto Kuroki, Project Fluence Founder / Developer & Operator, Freshman at Waseda University School of Fundamental Sciences, ISEF Alumni",
  keywords: [
    "Project Fluence",
    "VocabStream",
    "SpeakwiseGPT",
    "ISEF",
    "Note",
    "Waseda University",
    "Software Engineering",
    "Language Skills",
    "Technical Skills",
    "International Collaboration",
    "Machine Learning",
  ],
  authors: [{ name: "Yuto Kuroki" }],
  openGraph: {
    title: "Yuto Kuroki",
    description:
      "Profile page of Yuto Kuroki, Project Fluence Founder / Developer & Operator, Freshman at Waseda University School of Fundamental Sciences, ISEF Alumni",
    url: "https://yutokuroki.vercel.app",
    siteName: "Yuto Kuroki",
    images: [
      {
        url: "https://yutokuroki.vercel.app/images/profile3.JPG",
        width: 1200,
        height: 630,
        alt: "Yuto Kuroki Profile page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuto Kuroki",
    description:
      "Profile page of Yuto Kuroki, Project Fluence Founder / Developer & Operator, Freshman at Waseda University School of Fundamental Sciences, ISEF Alumni",
    images: ["https://yutokuroki.vercel.app/images/profile3.JPG"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Keep root layout as a server component; adding the font variables as classes
  // uses the font CSS variables so geistSans/geistMono are actually referenced.
  return (
    <html lang="en" className={geistSans.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* Analytics is now used so the import isn't unused */}
        <Analytics />
      </body>
    </html>
  );
}
