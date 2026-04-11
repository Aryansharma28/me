import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://me-seven-eosin.vercel.app"),
  title: "Aryan Sharma — Builder",
  description:
    "Builder in Amsterdam. Building at LangWatch, incoming at Booking.com. Backend systems, applied AI, and small products with real users.",
  openGraph: {
    title: "Aryan Sharma — Builder",
    description:
      "Builder in Amsterdam. Building at LangWatch, incoming at Booking.com.",
    url: "https://me-seven-eosin.vercel.app",
    siteName: "Aryan Sharma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Sharma — Builder",
    description:
      "Builder in Amsterdam. Building at LangWatch, incoming at Booking.com.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
