"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "Grace", href: "#hero" }, // Home
  { name: "Lore", href: "#about" }, // About
  { name: "Inventory", href: "#skills" }, // Skills
  { name: "Quests", href: "#projects" }, // Projects
  { name: "Summon", href: "#contact" }, // Contact
];

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-gold-muted/20"
    >
      <div className="container mx-auto h-full flex items-center justify-center px-4">
        <ul className="flex space-x-6 md:space-x-12">
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
                <span className="font-cinzel text-xs md:text-sm tracking-[0.2em] text-gold-muted/70 group-hover:text-gold-bright transition-colors duration-300 uppercase">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
