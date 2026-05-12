"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Road Monitoring System",
    type: "Samsung Innovation Campus",
    tech: "Python, Data Processing",
    desc: "A tool to analyze road defects and assist in infrastructure maintenance. Worked on backend logic, data modeling, and automated maintenance report generation.",
    links: { github: "https://github.com/KavyaNagariya/road_monitoring" }
  },
  {
    title: "EcoLearn",
    type: "Smart India Hackathon",
    tech: "Web Dev, UI/UX, Gamification",
    desc: "Game-based learning platform for environmental education. Designed interactive modules and implemented gamification mechanics.",
    links: { github: "https://github.com/KavyaNagariya/fresh_ecolearn" }
  },
  {
    title: "HealthOnTrack",
    type: "Web Application",
    tech: "Web Dev, UI Design",
    desc: "Responsive web application for tracking user health metrics. Focused on UI optimization for mobile devices and cross-platform compatibility.",
    links: { 
      live: "https://projecthealthontrack.netlify.app/", 
      github: "https://github.com/KavyaNagariya/HealthOnTrack/tree/edits" 
    }
  },
  {
    title: "Radahn - Coding AI Agent",
    type: "CLI Tool",
    tech: "Python, Gemini AI",
    desc: "Radahn is an AI-powered coding assistant CLI tool that uses Google's Gemini AI to help automate coding tasks. It allows an AI agent to safely interact with your codebase.",
    links: { github: "https://github.com/KavyaNagariya/Radahn" }
  }
];

export function Projects() {
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
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        
        <div className="md:w-1/4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2 }}
            className="text-xs md:text-sm font-cinzel text-gold-muted/80 uppercase tracking-[0.3em]"
          >
            Great Souls Found
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
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group flex flex-col md:flex-row gap-6 md:gap-12 border-t border-gold-muted/10 pt-10">
              <div className="md:w-1/3">
                <h3 className="text-xl md:text-2xl font-cinzel text-parchment mb-3 group-hover:text-gold-muted transition-colors duration-700">
                  {project.title}
                </h3>
                <p className="text-gold-muted/70 font-cinzel text-[10px] uppercase tracking-[0.2em] mb-1">
                  {project.type}
                </p>
                <p className="text-parchment/40 font-spectral italic text-xs">
                  {project.tech}
                </p>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-between">
                <p className="font-spectral text-base md:text-lg text-parchment/60 leading-relaxed font-light mb-6">
                  {project.desc}
                </p>
                
                <div className="flex gap-6">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-cinzel text-gold-muted/60 uppercase tracking-[0.2em] hover:text-gold-bright transition-colors duration-500 group/link"
                    >
                      <span className="w-6 h-[1px] bg-gold-muted/20 group-hover/link:bg-gold-bright/50 transition-colors duration-500" />
                      Examine Map
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-cinzel text-gold-muted/60 uppercase tracking-[0.2em] hover:text-gold-bright transition-colors duration-500 group/link"
                    >
                      <span className="w-6 h-[1px] bg-gold-muted/20 group-hover/link:bg-gold-bright/50 transition-colors duration-500" />
                      Travel to Location
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
