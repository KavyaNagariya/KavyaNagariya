"use client";

import { Panel } from "./ui/Panel";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
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

  const pulseVariants: any = {
    initial: { scale: 1, boxShadow: "0 0 0px rgba(195, 162, 103, 0)" },
    animate: { 
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0px rgba(195, 162, 103, 0)",
        "0 0 15px rgba(195, 162, 103, 0.4)",
        "0 0 0px rgba(195, 162, 103, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
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
            <h3 className="text-2xl font-cinzel text-parchment">
              Leave a Message
            </h3>
            <p className="font-spectral text-parchment/80 max-w-md">
              Whether you seek to ally for a new quest or simply wish to exchange knowledge, 
              my summoning sign is always active.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start text-gold-muted">
                <MapPin className="w-5 h-5" />
                <span className="font-spectral">Lucknow, India</span>
              </div>
              <a href="mailto:kavyanagaria402@gmail.com" className="flex items-center gap-3 justify-center md:justify-start text-gold-muted hover:text-gold-bright transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-spectral">kavyanagaria402@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6">
            <motion.a 
              href="https://github.com/KavyaNagariya" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
              className="p-4 border border-gold-muted/40 rounded-full hover:border-gold-bright hover:bg-gold-muted/10 transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-gold-muted group-hover:text-gold-bright" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/kavya-nagariya-a55107318" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
              className="p-4 border border-gold-muted/40 rounded-full hover:border-gold-bright hover:bg-gold-muted/10 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-gold-muted group-hover:text-gold-bright" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Panel>
    </section>
  );
}
