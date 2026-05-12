"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const navItems = [
  { name: "Grace", href: "#hero" }, // Home
  { name: "Lore", href: "#about" }, // About
  { name: "Inventory", href: "#skills" }, // Skills
  { name: "Achievements", href: "#certifications" }, // Certifications
  { name: "Quests", href: "#projects" }, // Projects
  { name: "Summon", href: "#contact" }, // Contact
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={twMerge(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-1000 flex items-center",
        scrolled ? "bg-[#0a0a0c]/80 backdrop-blur-lg border-b border-gold-muted/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-center px-4">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 md:gap-x-16">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="relative group block py-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="font-spectral text-xs md:text-sm tracking-[0.2em] text-gold-muted/50 group-hover:text-parchment transition-colors duration-700 uppercase">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
