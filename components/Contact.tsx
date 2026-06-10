"use client";

import { Panel } from "./ui/Panel";
import { Mail, Github, Linkedin, MapPin, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-4xl mx-auto pb-32">
      <Panel 
        title="Summoning Pool"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center justify-center p-4"
        >
          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-iosevka text-parchment">
              Leave a Message
            </h3>
            <p className="text-parchment/80 max-w-md">
              Whether you seek to ally for a new quest or simply wish to exchange knowledge, 
              my summoning sign is always active.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start text-gold-muted">
                <MapPin className="w-5 h-5" />
                <span>Lucknow, India</span>
              </div>
              <a href="mailto:kavyanagaria402@gmail.com" className="flex items-center gap-3 justify-center md:justify-start text-gold-muted hover:text-gold-bright transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-jetbrains">kavyanagaria402@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6">
            <motion.a 
              href="https://github.com/KavyaNagariya" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border border-gold-muted/40 rounded-full hover:border-gold-bright hover:bg-gold-muted/10 transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-gold-muted group-hover:text-gold-bright" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/kavya-nagariya-a55107318" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border border-gold-muted/40 rounded-full hover:border-gold-bright hover:bg-gold-muted/10 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-gold-muted group-hover:text-gold-bright" />
            </motion.a>
            <motion.a 
              href="https://x.com/nagariya_kavya" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border border-gold-muted/40 rounded-full hover:border-gold-bright hover:bg-gold-muted/10 transition-all group"
              aria-label="X"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 fill-gold-muted group-hover:fill-gold-bright transition-colors"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
            <motion.a 
              href="https://buymeacoffee.com/mehukavyanp" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border border-gold-muted/40 rounded-full hover:border-gold-bright hover:bg-gold-muted/10 transition-all group"
              aria-label="Buy Me a Coffee"
            >
              <Coffee className="w-8 h-8 text-gold-muted group-hover:text-gold-bright" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Panel>
    </section>
  );
}
