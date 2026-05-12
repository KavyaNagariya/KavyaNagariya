"use client";

import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        
        <div className="md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2 }}
            className="text-xs md:text-sm font-cinzel text-gold-muted/80 uppercase tracking-[0.3em]"
          >
            Lore & Background
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
          className="md:w-3/4 font-spectral text-base md:text-lg leading-relaxed space-y-6 text-parchment/60 font-light"
        >
          <motion.p variants={textVariants}>
            I am a second-year B.Tech student in Computer Science (Artificial Intelligence) at the University of Lucknow. 
            My journey began with the fundamental incantations of computer science, gradually evolving into the craft of 
            building real-world applications through hackathons and disciplined study.
          </motion.p>
          <motion.p variants={textVariants}>
            Wielding the languages of C, C++, Python, and Java, I focus not just on the visible surface, but on the 
            deep mechanics of how systems function. Through the trials of CS50x and CS50P, I have fortified my understanding 
            of memory management and algorithmic problem-solving.
          </motion.p>
          <motion.p variants={textVariants}>
            I have tested my mettle in national arenas such as the Smart India Hackathon and Samsung Innovation Campus, 
            collaborating to forge backend logic, data processing systems, and intuitive interfaces.
            Currently, I seek to master the arcane arts of Data Structures and Algorithms, aiming to contribute to the 
            great open-source archives.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
