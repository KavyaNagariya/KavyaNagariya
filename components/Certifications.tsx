"use client";

import { Panel } from "./ui/Panel";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, letterSpacing: "0.4em", filter: "blur(10px)" }}
        whileInView={{ opacity: 1, letterSpacing: "0.1em", filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-iosevka text-center text-gold-muted mb-16 drop-shadow-lg uppercase"
      >
        Achievements
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {certifications.map((cert) => (
          <Panel key={cert.title} className="flex flex-col h-full">
            <div className="flex items-start gap-4 mb-6 border-b border-gold-muted/20 pb-4">
              <div className="p-3 bg-gold-muted/10 rounded-sm">
                <Award className="w-8 h-8 text-gold-bright" />
              </div>
              <div>
                <h3 className="text-xl font-iosevka text-parchment uppercase tracking-wider leading-tight mb-1">{cert.title}</h3>
                <p className="text-gold-muted text-sm font-iosevka tracking-widest">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
            
            <p className="text-parchment/70 mb-8 flex-grow leading-relaxed">
              {cert.description}
            </p>

            <div className="mt-auto">
              <Button 
                onClick={() => window.open(cert.link, '_blank')}
                className="w-full text-xs"
              >
                View Credential <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Panel>
        ))}
      </motion.div>
    </section>
  );
}
