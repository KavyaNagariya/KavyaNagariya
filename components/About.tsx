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
          className="text-lg leading-relaxed space-y-6 text-parchment/90"
        >
          <motion.p variants={textVariants}>
            I am a B.Tech student in Computer Science (Artificial Intelligence) at the University of Lucknow.
            My journey began with the fundamental incantations of computer science, gradually evolving into the craft of
            building resilient, production-grade applications through hackathons and disciplined engineering.
          </motion.p>
          <motion.p variants={textVariants}>
            Wielding the languages of Python, C, SQL, and HTML/CSS, I focus on the deep mechanics of backend systems.
            Through the trials of CS50x and CS50P, and by mastering FastAPI, Celery, and database concurrency, I have
            fortified my understanding of data structures, asynchronous task execution, and secure API design.
          </motion.p>
          <motion.p variants={textVariants}>
            I have tested my mettle in national arenas, standing as a Finalist in the UIDAI Data Hackathon 2026 out of 30,000+ teams,
            where I co-forged 'Aadhaar Pulse' a predictive analytics platform. From the Smart India Hackathon to Samsung Innovation Campus,
            I continue to design scalable RAG platforms, peer-to-peer marketplaces, and autonomous AI agents.
          </motion.p>
        </motion.div>
      </Panel>
    </section>
  );
}
