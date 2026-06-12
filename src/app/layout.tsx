import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist_latin.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/Geist_Mono_latin.woff2",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Software Hub — Demo Site (Learning Project)",
  description:
    "A demo Next.js static site showcasing a software directory UI pattern. " +
    "No real download links — created for educational and open-source learning purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
