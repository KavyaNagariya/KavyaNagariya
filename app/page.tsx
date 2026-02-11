import { Background } from "@/components/Background";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AudioControl } from "@/components/AudioControl";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-gold-muted/30 selection:text-gold-bright">
      <Background />
      <Navigation />
      <AudioControl />
      
      <div className="relative z-10 flex flex-col gap-10 md:gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
