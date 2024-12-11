import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensures smooth font loading
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKEPSIS | TECHNICAL COMMITTEE OF SNU",
  description: "The official website of the Skepsis technical committee at Sister Nivedita University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full bg-gray-50 text-gray-900 antialiased flex flex-col`}
        style={{ fontFeatureSettings: '"kern"' }} 
      >
        {/* Page Wrapper */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 py-8">{children}</main>

          {/* Footer Section */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
