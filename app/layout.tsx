import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--Plus_Jakarta_Sans",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--Instrument_Serif",
  subsets: ["latin"],
  weight: "400"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PostBridge",
  description: "Schedule your content everywhere in seconds",
  openGraph: {
    title: "PostBridge",
    description: "Schedule your content everywhere in seconds",
    type: "website",
    url: "https://post-bridge.com",
    siteName: "PostBridge",
    images: [
      {
        url: "/postbridge-opengraph.png",
        width: 657,
        height: 327,
        alt: "PostBridge - Schedule your content everywhere in seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PostBridge",
    description: "Schedule your content everywhere in seconds",
    images: ["/postbridge-opengraph.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} ${instrument.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
