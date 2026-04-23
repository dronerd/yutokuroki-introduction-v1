
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
  description: "Profile Page of Yuto Kuroki, Student at Waseda University CS, AI Research & Software Engineering, ISEF2025 Finalist",

  icons: {
    icon: "/icon.png",        // ← app/icon.png (192x192)
    apple: "/icon.png",       // iOS Safari 対応（任意だが推奨）
  },

  alternates: {
    languages: {
      "en-US": "https://yutokuroki.vercel.app",
      "ja-JP": "https://yutokuroki.vercel.app/ja",
    },
  },

  openGraph: {
    images: ["https://yutokuroki.vercel.app/images/profile3.JPG"],
  },
  twitter: {
    card: "summary_large_image",
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
