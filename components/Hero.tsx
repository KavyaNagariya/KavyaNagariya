"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="text-center px-4 max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-gold-muted tracking-[0.2em] mb-4 text-sm md:text-base font-cinzel uppercase">
            The Portfolio of
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-parchment mb-6 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Kavya Nagariya
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold-muted to-transparent mb-8" />
          
          <p className="font-spectral text-lg md:text-xl text-parchment/80 max-w-2xl mx-auto mb-12 italic leading-relaxed">
            "Software Engineer in Progress. Builder of logic, seeker of algorithms.
            Forging paths in C++, Python, and Artificial Intelligence."
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Journey
            </Button>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://github.com/KavyaNagariya', '_blank')}
            >
              View GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
