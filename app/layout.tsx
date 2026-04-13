
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
  title: "黒木勇人 | Yuto Kuroki",
  description:
    "Profile page of Yuto Kuroki, Project Fluence Founder / Developer & Operator, Freshman at Waseda University School of Fundamental Sciences, ISEF Alumni |  黒木勇人のプロフィールページ：Project Fluence 創設者/開発者および運営者、早稲田大学基幹理工学部（情報系）、ISEF（国際学生科学技術フェア）出場経験者",

  icons: {
    icon: "/icon.png",        // ← app/icon.png (192x192)
    apple: "/icon.png",       // iOS Safari 対応（任意だが推奨）
  },

  keywords: [
    "Yuto Kuroki",
    "黒木勇人",
    "Project Fluence",
    "VocabStream",
    "ISEF",
    "国際学生科学技術フェア",
    "Note",
    "Waseda University",
    "早稲田大学",
    "Software Engineering",
    "Language Skills",
    "Technical Skills",
    "International Collaboration",
    "Machine Learning",
  ],
  authors: [{ name: "Yuto Kuroki" }],
  openGraph: {
    title: "黒木勇人 | Yuto Kuroki",
    description:
     "Profile page of Yuto Kuroki, Project Fluence Founder / Developer & Operator, Freshman at Waseda University School of Fundamental Sciences, ISEF Alumni |  黒木勇人のプロフィールページ：Project Fluence 創設者/開発者および運営者、早稲田大学基幹理工学部（情報系）、ISEF（国際学生科学技術フェア）出場経験者",
    url: "https://yutokuroki.vercel.app",
    siteName: "黒木勇人 | Yuto Kuroki",
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
