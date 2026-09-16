import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MagicBackdrop } from "@/components/magic-backdrop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stack the Magic",
  description: "Your virtual travel agent and companion for Walt Disney World.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MagicBackdrop />
        {children}
      </body>
    </html>
  );
}
