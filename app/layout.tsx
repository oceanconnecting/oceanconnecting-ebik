import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/sections/Navbar";
import "./globals.css";
import Footer from "@/sections/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e.bike",
  description: "your go to e-bike delivery service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        <Navbar />
        <BackToTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
