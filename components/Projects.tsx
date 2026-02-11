"use client";

import { Panel } from "./ui/Panel";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Road Monitoring System",
    type: "Samsung Innovation Campus",
    tech: "Python, Data Processing",
    desc: "A tool to analyze road defects and assist in infrastructure maintenance. Worked on backend logic, data modeling, and automated maintenance report generation.",
    links: { github: "#" } // Placeholder as per info
  },
  {
    title: "EcoLearn",
    type: "Smart India Hackathon",
    tech: "Web Dev, UI/UX, Gamification",
    desc: "Game-based learning platform for environmental education. Designed interactive modules and implemented gamification mechanics.",
    links: { github: "#" }
  },
  {
    title: "HealthOnTrack",
    type: "Web Application",
    tech: "Web Dev, UI Design",
    desc: "Responsive web application for tracking user health metrics. Focused on UI optimization for mobile devices and cross-platform compatibility.",
    links: { live: "#" }
  },
  {
    title: "QR Code Generator",
    type: "CS50 Final Project",
    tech: "Python",
    desc: "Modular QR code generator using external libraries. Strengthened understanding of clean code structure and file handling.",
    links: { github: "#" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-cinzel text-center text-gold-muted mb-12 drop-shadow-md">
        Great Souls Found
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Panel key={index} title={project.title}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-gold-muted/80 font-cinzel text-sm mb-2 uppercase tracking-wide">
                  {project.type}
                </p>
                <p className="text-parchment/70 font-spectral italic text-sm mb-4">
                  {project.tech}
                </p>
                <p className="font-spectral text-parchment/90 leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>
              
              <div className="flex gap-4 mt-auto pt-4 border-t border-gold-muted/20">
                {project.links.github && (
                  <a href={project.links.github} className="flex items-center gap-2 text-sm font-cinzel text-gold-muted hover:text-gold-bright transition-colors">
                    <Github className="w-4 h-4" />
                    Examine Map
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="flex items-center gap-2 text-sm font-cinzel text-gold-muted hover:text-gold-bright transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Travel to Location
                  </a>
                )}
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
