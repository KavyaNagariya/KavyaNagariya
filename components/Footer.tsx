"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto py-12 px-6 md:px-12 lg:px-24 border-t border-gold-muted/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gold-muted/40 font-cinzel text-xs tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Kavya Nagariya
        </p>
      </div>
    </footer>
  );
}
