"use client";

import { Panel } from "./ui/Panel";
import { Code, Terminal, Cpu, Brain } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    items: ["Python", "C", "SQL", "HTML/CSS"]
  },
  {
    title: "Frameworks & Databases",
    icon: Brain,
    items: ["FastAPI", "Celery", "PostgreSQL", "MongoDB", "Redis", "Pinecone"]
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    items: ["Git & GitHub", "Docker", "VS Code", "MCP"]
  },
  {
    title: "Arcane Tech",
    icon: Cpu,
    items: ["LangChain", "RAG", "Agentic AI", "Asynchronous Pipelines"]
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-iosevka text-center text-gold-muted mb-16 drop-shadow-lg uppercase tracking-widest"
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
              <h3 className="text-xl font-iosevka text-parchment uppercase tracking-widest">{category.title}</h3>
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
                  className="px-3 py-1 bg-black/40 border border-gold-muted/30 rounded text-sm text-parchment/80 transition-all duration-300 cursor-default"
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
