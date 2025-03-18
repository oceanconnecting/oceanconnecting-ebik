import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/sections/Navbar";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/sections/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import OfflineChat from "@/components/OfflineChat";
import { redirect } from "next/navigation";
import { getMessages } from "next-intl/server";

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

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}


export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  const messages = await getMessages();
  const validLocales = ["fr", "en", "de", "zh"];

  if (!validLocales.includes(locale)) {
    redirect("/en");
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${sora.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <OfflineChat />
          <Navbar />
          <BackToTopButton />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
