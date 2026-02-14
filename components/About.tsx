"use client";

import { Panel } from "./ui/Panel";
import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <Panel 
        title="Lore & Background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-spectral text-lg leading-relaxed space-y-6 text-parchment/90"
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
      </Panel>
    </section>
  );
}
