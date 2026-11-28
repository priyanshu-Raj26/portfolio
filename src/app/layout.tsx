import type { Metadata, Viewport } from "next";
import {
  Anton,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Michroma
} from "next/font/google";
import "../styles/globals.scss";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "italic",
  preload: false
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: false
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio.",
  robots: {
    index: false,
    follow: false
  }
};

export const viewport: Viewport = {
  themeColor: "#D9482B"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${instrumentSerif.variable} ${inter.variable} ${jetBrainsMono.variable} ${michroma.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
