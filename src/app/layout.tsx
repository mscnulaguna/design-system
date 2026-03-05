import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSC - NU Laguna | Design System",
  description: "Made with <3 by MSC - NU Laguna",
};

/**
 * RootLayout - Main App Container
 *
 * Includes:
 * - Global styling (globals.css)
 * - Google Font (Inter) with CSS variable
 * - Sonner Toaster for notifications
 * - TooltipProvider wrapper for tooltip components
 *
 * The Toaster is positioned at the bottom-right and uses the theme colors
 * from globals.css (--background, --foreground, etc.)
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {/* Navbar - Client Component with internal state */}
        <Navbar logoSrc="/logos/msclogo.svg" />
        {children}
        {/*
          SONNER TOASTER
          Displays toast notifications throughout the app.
          Position: bottom-right
          Theme: Inherits from CSS variables

          To use:
          import { toast } from "sonner"

          toast.success("Success message")
          toast.error("Error message")
          toast.info("Info message")
          toast.warning("Warning message")

          See: https://sonner.emilkowal.ski/
        */}
        <Toaster />
      </body>
    </html>
  );
}

