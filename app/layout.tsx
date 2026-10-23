import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Noto_Serif_JP } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Tsuki | Interior Design Studio in Mumbai",
  description:
    "Discover Studio Tsuki, an interior design studio in Mumbai creating timeless homes and commercial spaces through thoughtful planning, natural materials and personalised design.",
  keywords: [
    "Studio Tsuki",
    "interior design studio",
    "residential interior design",
    "commercial interior design",
    "Japandi interior design",
    "minimalist interior design",
    "bespoke interior design",
    "turnkey interior solutions",
  ],
  openGraph: {
    title: "Studio Tsuki | Timeless Interior Design Studio",
    description:
      "Thoughtfully designed, timeless interiors inspired by simplicity, natural materials, and the quiet beauty of the moon.",
    type: "website",
    siteName: "Studio Tsuki",
  },
};

const japaneseFont = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-japanese",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${japaneseFont.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
