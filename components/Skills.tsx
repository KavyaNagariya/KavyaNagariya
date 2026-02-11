"use client";

import { Panel } from "./ui/Panel";
import { Code, Terminal, Cpu, Database, Brain, Globe, BookOpen, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    items: ["C++", "Python", "C", "Java", "TypeScript"]
  },
  {
    title: "Core Arts",
    icon: Brain,
    items: ["Data Structures", "Algorithms", "OOP", "Memory Management"]
  },
  {
    title: "Artifacts",
    icon: Terminal,
    items: ["Git & GitHub", "VS Code", "Replit", "Linux"]
  },
  {
    title: "Arcane Tech",
    icon: Cpu,
    items: ["Generative AI", "Agentic AI", "Prompt Engineering", "Web Dev"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-cinzel text-center text-gold-muted mb-12 drop-shadow-md">
        Inventory
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <Panel key={category.title} className="h-full">
            <div className="flex items-center gap-3 mb-6 border-b border-gold-muted/20 pb-4">
              <category.icon className="w-6 h-6 text-gold-bright" />
              <h3 className="text-xl font-cinzel text-parchment">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <div 
                  key={skill}
                  className="px-3 py-1 bg-black/40 border border-gold-muted/30 rounded text-sm font-spectral text-parchment/80 hover:border-gold-bright/60 hover:text-gold-bright transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
