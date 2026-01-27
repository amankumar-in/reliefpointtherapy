import type { Metadata } from "next";
import { DM_Serif_Text, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LeadMagnetPopup } from "@/components/home/lead-magnet-popup";

const dmSerifText = DM_Serif_Text({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://reliefpointtherapy.onrender.com'),
  title: {
    default: "Relief Point Therapy | Non-Invasive Pain Relief in the East Bay",
    template: "%s | Relief Point Therapy",
  },
  description: "Non-invasive, nurse-led pain relief in the East Bay. NFPM treatments covered by Medicare. In-home care for chronic pain, knee pain, back pain, and nerve-related conditions.",
  keywords: [
    "pain relief",
    "non-invasive pain treatment",
    "NFPM",
    "neurofunctional pain management",
    "East Bay pain relief",
    "Medicare pain treatment",
    "in-home pain therapy",
    "nurse-led pain care",
    "chronic pain treatment",
    "drug-free pain relief",
    "cellular activation",
    "Nrf2",
    "Relief Point Therapy",
  ],
  authors: [{ name: "Genis Matel, RN" }],
  creator: "Relief Point Therapy",
  publisher: "Relief Point Therapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Relief Point Therapy',
    title: 'Relief Point Therapy | Non-Invasive Pain Relief in the East Bay',
    description: 'Non-invasive, nurse-led pain relief in the East Bay. NFPM treatments covered by Medicare. In-home care for chronic pain, knee pain, back pain, and nerve-related conditions.',
    images: [
      {
        url: '/assets/thumb-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Relief Point Therapy - Non-Invasive Pain Relief',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relief Point Therapy | Non-Invasive Pain Relief',
    description: 'Non-invasive, nurse-led pain relief in the East Bay. NFPM treatments covered by Medicare.',
    images: ['/assets/thumb-share.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here if needed
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
        className={`${dmSerifText.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeadMagnetPopup />
      </body>
    </html>
  );
}
