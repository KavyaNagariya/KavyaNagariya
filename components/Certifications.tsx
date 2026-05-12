"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2024",
    link: "https://certificates.cs50.io/3a86f296-0415-45b2-836b-a35d1d7f36f4.pdf?size=letter",
    description: "An introduction to the intellectual enterprises of computer science and the art of programming."
  },
  {
    title: "CS50P: Introduction to Programming with Python",
    issuer: "Harvard University",
    date: "2025",
    link: "https://certificates.cs50.io/0c1251a6-3a3a-485e-8220-9a3b72a21b70.pdf?size=letter",
    description: "An introduction to programming using Python, focusing on solving problems with code."
  }
];

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        
        <div className="md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2 }}
            className="text-xs md:text-sm font-cinzel text-gold-muted/80 uppercase tracking-[0.3em]"
          >
            Achievements
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
          className="md:w-3/4 flex flex-col gap-16"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants} className="group flex flex-col border-t border-gold-muted/10 pt-10">
              <h3 className="text-xl md:text-2xl font-cinzel text-parchment mb-3 group-hover:text-gold-muted transition-colors duration-700">
                {cert.title}
              </h3>
              <p className="text-gold-muted/70 font-cinzel text-[10px] uppercase tracking-[0.2em] mb-6">
                {cert.issuer} • {cert.date}
              </p>
              
              <p className="font-spectral text-base md:text-lg text-parchment/60 leading-relaxed font-light mb-6">
                {cert.description}
              </p>

              <div>
                <a 
                  href={cert.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-cinzel text-gold-muted/60 uppercase tracking-[0.2em] hover:text-gold-bright transition-colors duration-500 group/link"
                >
                  <span className="w-6 h-[1px] bg-gold-muted/20 group-hover/link:bg-gold-bright/50 transition-colors duration-500" />
                  View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
