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
  title: "Sascha Fischer - Creative Developer & Designer",
  description:
    "Portfolio of a full-stack developer specializing in React, Next.js, and modern web design. Explore my projects and get in touch.",
  keywords: ["developer", "designer", "portfolio", "react", "next.js", "typescript"],
  authors: [{ name: "Sascha Fischer" }],
  openGraph: {
    title: "Sascha Fischer - Creative Developer & Designer",
    description:
      "Portfolio of a full-stack developer specializing in React, Next.js, and modern web design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
