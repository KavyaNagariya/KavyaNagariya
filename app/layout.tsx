import type { Metadata } from "next";
import { Cinzel_Decorative, Spectral } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const spectral = Spectral({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Tarnished Archive",
  description: "The Portfolio of Kavya Nagariya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cinzel.variable} ${spectral.variable} antialiased bg-[#0a0a0c] text-[#e5e5e5]`}
      >
        {children}
      </body>
    </html>
  );
}
