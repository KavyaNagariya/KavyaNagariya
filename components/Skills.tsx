"use client";

import { Panel } from "./ui/Panel";
import { Code, Terminal, Cpu, Brain } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    items: ["C++", "Python", "C", "Java"]
  },
  {
    title: "Core Arts",
    icon: Brain,
    items: ["Data Structures", "Algorithms", "OOP", "Memory Management"]
  },
  {
    title: "Artifacts",
    icon: Terminal,
    items: ["Git & GitHub", "VS Code", "AI Coding Tools", "WSL"]
  },
  {
    title: "Arcane Tech",
    icon: Cpu,
    items: ["Generative AI", "Agentic AI", "Prompt Engineering", "Web Dev"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, letterSpacing: "0.4em", filter: "blur(10px)" }}
        whileInView={{ opacity: 1, letterSpacing: "0.1em", filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-cinzel text-center text-gold-muted mb-16 drop-shadow-lg uppercase"
      >
        Inventory
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category) => (
          <Panel key={category.title} className="h-full">
            <div className="flex items-center gap-3 mb-6 border-b border-gold-muted/20 pb-4">
              <category.icon className="w-6 h-6 text-gold-bright" />
              <h3 className="text-xl font-cinzel text-parchment uppercase tracking-widest">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.div 
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#c3a267", // gold-muted
                    color: "#0a0a0c", // tarnished-dark
                    boxShadow: "0 0 15px rgba(195, 162, 103, 0.6)",
                    borderColor: "#ffd700" // gold-bright
                  }}
                  className="px-3 py-1 bg-black/40 border border-gold-muted/30 rounded text-sm font-spectral text-parchment/80 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </Panel>
        ))}
      </motion.div>
    </section>
  );
}
