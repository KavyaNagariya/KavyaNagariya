"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    items: ["C++", "Python", "C", "Java"]
  },
  {
    title: "Core Arts",
    items: ["Data Structures", "Algorithms", "OOP", "Memory Management"]
  },
  {
    title: "Artifacts",
    items: ["Git & GitHub", "VS Code", "AI Coding Tools", "WSL"]
  },
  {
    title: "Arcane Tech",
    items: ["Generative AI", "Agentic AI", "Prompt Engineering", "Web Dev"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        
        <div className="md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2 }}
            className="text-xs md:text-sm font-cinzel text-gold-muted/80 uppercase tracking-[0.3em]"
          >
            Inventory
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
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="flex flex-col gap-4">
              <h3 className="text-sm md:text-base font-cinzel text-parchment/40 uppercase tracking-[0.2em]">{category.title}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {category.items.map((skill) => (
                  <span 
                    key={skill}
                    className="text-sm md:text-base font-spectral text-gold-muted/70 tracking-wide font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
