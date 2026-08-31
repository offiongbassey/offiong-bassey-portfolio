import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted variable fonts (Open Font License) — no runtime dependency on
// Google's font CDN, and the exact weights/optical sizes are available.
const newsreader = localFont({
  variable: "--font-newsreader",
  display: "swap",
  src: [
    {
      path: "../fonts/Newsreader-Variable.ttf",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../fonts/Newsreader-Italic-Variable.ttf",
      weight: "200 800",
      style: "italic",
    },
  ],
});

const sourceSerif = localFont({
  variable: "--font-source-serif",
  display: "swap",
  src: [
    {
      path: "../fonts/SourceSerif4-Variable.ttf",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "../fonts/SourceSerif4-Italic-Variable.ttf",
      weight: "200 900",
      style: "italic",
    },
  ],
});

const plexSans = localFont({
  variable: "--font-plex-sans",
  display: "swap",
  src: [
    {
      path: "../fonts/IBMPlexSans-Variable.ttf",
      weight: "100 700",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexSans-Italic-Variable.ttf",
      weight: "100 700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.offiongbassey.com.ng"),
  title: "Offiong Bassey Edet — Machine Learning Researcher",
  description:
    "Offiong Bassey Edet is a machine learning researcher working on speech and language technology for low-resource African languages, including automatic speech recognition, text-to-speech, and machine translation for Efik.",
  openGraph: {
    title: "Offiong Bassey Edet — Machine Learning Researcher",
    description:
      "Speech and language technology for low-resource African languages.",
    url: "https://www.offiongbassey.com.ng",
    siteName: "Offiong Bassey Edet",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSerif.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
