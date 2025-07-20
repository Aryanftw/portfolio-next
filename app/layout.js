import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter, DM_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aryan | Portfolio",
  description: "Portfolio built upon Next.Js framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
