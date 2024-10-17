import type { Metadata } from "next";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { inter, spaceGrotesk } from "@/lib/theme";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "j13a: Justin Michaliga | Product Engineer",
  description: "Justin Michaliga | Staff Product Engineer from Brooklyn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <ThemeProvider attribute="class">
        <body className={inter.className}>
          {children}
        </body>
        <Toaster />
        <GoogleAnalytics gaId="UA-6741593-1" />
      </ThemeProvider>
    </html>
  );
}
