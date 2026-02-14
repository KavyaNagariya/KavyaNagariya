"use client";

import { Panel } from "./ui/Panel";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, letterSpacing: "0.4em", filter: "blur(10px)" }}
        whileInView={{ opacity: 1, letterSpacing: "0.1em", filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-cinzel text-center text-gold-muted mb-16 drop-shadow-lg uppercase"
      >
        Great Souls Found
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 justify-items-center"
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full max-w-md h-full">
            <Panel title={project.title} className="h-full">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <p className="text-gold-muted/80 font-cinzel text-xs mb-2 uppercase tracking-[0.2em] font-bold">
                    {project.type}
                  </p>
                  <p className="text-gold-bright/60 font-spectral italic text-sm mb-4">
                    {project.tech}
                  </p>
                  <p className="font-spectral text-parchment/80 leading-relaxed mb-6 text-sm md:text-base">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex gap-6 mt-auto pt-6 border-t border-gold-muted/10">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-cinzel text-gold-muted hover:text-gold-bright transition-all hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Examine Map
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-cinzel text-gold-muted hover:text-gold-bright transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Travel to Location
                    </a>
                  )}
                </div>
              </div>
            </Panel>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
