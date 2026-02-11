"use client";

import { Panel } from "./ui/Panel";

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <Panel title="Lore & Background">
        <div className="font-spectral text-lg leading-relaxed space-y-6 text-parchment/90">
          <p>
            I am a second-year B.Tech student in Computer Science (Artificial Intelligence) at the University of Lucknow. 
            My journey began with the fundamental incantations of computer science, gradually evolving into the craft of 
            building real-world applications through hackathons and disciplined study.
          </p>
          <p>
            Wielding the languages of C, C++, Python, and Java, I focus not just on the visible surface, but on the 
            deep mechanics of how systems function. Through the trials of CS50x and CS50P, I have fortified my understanding 
            of memory management and algorithmic problem-solving.
          </p>
          <p>
            I have tested my mettle in national arenas such as the Smart India Hackathon and Samsung Innovation Campus, 
            collaborating to forge backend logic, data processing systems, and intuitive interfaces.
            Currently, I seek to master the arcane arts of Data Structures and Algorithms, aiming to contribute to the 
            great open-source archives.
          </p>
        </div>
      </Panel>
    </section>
  );
}
