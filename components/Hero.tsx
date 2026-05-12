"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Github, Linkedin, Coffee } from "lucide-react";

export function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants: any = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative px-6 md:px-12 lg:px-24 pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto flex flex-col items-start"
      >
        <motion.h1 
          variants={textVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-parchment leading-[0.9] mb-8 -ml-1"
        >
          Kavya<br />Nagariya
        </motion.h1>
        <motion.div variants={textVariants} className="max-w-xl">
          <p className="font-spectral text-base md:text-lg text-parchment/60 leading-relaxed font-light italic">
            "Software is a great combination between artistry and engineering. First, solve the problem. Then, write the code."
          </p>
        </motion.div>

        <motion.div variants={textVariants} className="flex flex-wrap items-center gap-x-12 gap-y-8 mt-12">
          <div className="flex flex-wrap gap-8">
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Archive
            </Button>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://drive.google.com/file/d/1xgBsi64puPPKC19Q1oIKLzLcjSrtUZSD/view?usp=sharing', '_blank')}
            >
              Resume
            </Button>
          </div>

          <div className="flex gap-6 items-center border-l border-gold-muted/10 pl-12 hidden md:flex">
            {[
              { name: "GitHub", url: "https://github.com/KavyaNagariya", icon: Github },
              { name: "LinkedIn", url: "https://linkedin.com/in/kavya-nagariya-a55107318", icon: Linkedin },
              { name: "Support", url: "https://buymeacoffee.com/mehukavyanp", icon: Coffee }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-muted/40 hover:text-gold-bright transition-all duration-500 hover:scale-110"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
