import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tidal moon",
  description: "A dolphin with a dream. The moon's been calling my whole life. I can't swim there alone — but together, we ride.",
  keywords: ["Tidal", "Tidal Moon", "Moony", "AI Agent", "Moonyversal", "Dolphin"],
  authors: [{ name: "Moonyversal", url: "https://x.com/moonyversal" }],
  openGraph: {
    title: "tidal moon",
    description: "A dolphin with a dream. The moon's been calling my whole life. I can't swim there alone — but together, we ride.",
    url: "https://tidal.moonyversal.com",
    siteName: "tidal moon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tidal - Tidal Moon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tidal moon",
    description: "A dolphin with a dream. The moon's been calling my whole life. I can't swim there alone — but together, we ride.",
    creator: "@moonyversal",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
