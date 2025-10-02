import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoldMark Agency - Digital Marketing & Web Development",
  description: "Transform your digital presence with BoldMark Agency. We specialize in SEO, social media marketing, web development, and branding solutions.",
  keywords: "digital marketing, SEO, web development, social media marketing, branding, PPC advertising",
  authors: [{ name: "BoldMark Agency" }],
  openGraph: {
    title: "BoldMark Agency - Digital Marketing & Web Development",
    description: "Transform your digital presence with innovative marketing strategies and cutting-edge web solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldMark Agency - Digital Marketing & Web Development",
    description: "Transform your digital presence with innovative marketing strategies and cutting-edge web solutions.",
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
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}