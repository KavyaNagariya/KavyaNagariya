import type { Metadata } from "next";
import { Cinzel_Decorative, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
        className={`${cinzel.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0c] text-[#e5e5e5]`}
      >
        {children}
      </body>
    </html>
  );
}
