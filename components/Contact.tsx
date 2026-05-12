"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Coffee } from "lucide-react";

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 mb-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        
        <div className="md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2 }}
            className="text-xs md:text-sm font-cinzel text-gold-muted/80 uppercase tracking-[0.3em]"
          >
            Summoning Pool
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-10 h-[1px] bg-gold-muted/30 mt-4 origin-left"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:w-3/4 flex flex-col gap-12"
        >
          <motion.div variants={textVariants}>
            <p className="font-spectral text-lg md:text-xl text-parchment/60 font-light leading-relaxed mb-10 italic">
              "Whether you seek to ally for a new quest or simply wish to exchange knowledge, 
              my summoning sign is always active."
            </p>
          </motion.div>

          <motion.div variants={textVariants} className="flex flex-col gap-4">
            <a href="mailto:kavyanagaria402@gmail.com" className="text-gold-muted/80 hover:text-parchment transition-colors duration-700 font-cinzel tracking-[0.2em] text-xs md:text-sm uppercase">
              kavyanagaria402@gmail.com
            </a>
            <div className="text-gold-muted/30 font-spectral tracking-[0.2em] text-[10px] uppercase">
              Lucknow, India
            </div>
          </motion.div>

          <motion.div variants={textVariants} className="flex gap-8 mt-6 pt-10 border-t border-gold-muted/5">
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
                <link.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
