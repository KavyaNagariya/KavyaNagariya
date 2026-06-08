"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState, useEffect, useRef } from "react";
import { GithubHeatmap } from "./GithubHeatmap";

const quotes = [
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
  { text: "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.", author: "Albert Einstein" }
];

export function Hero() {
  const [quote, setQuote] = useState(quotes[0]);
  const [clickCount, setClickCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const firstName = "Kavya";
  const lastName = "Nagariya";

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }
  }, []);

  const handleNameClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    clickTimeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, 2000);

    if (newCount === 3) {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play().catch((err) => console.warn("Playback blocked:", err));
          setIsPlaying(true);
        }
      }
      setClickCount(0);
    }
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const dividerVariants: any = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden px-4 md:px-8 max-w-7xl mx-auto z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Name and Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <audio ref={audioRef} loop src="/background-music.mp3" />
          <div 
            className="flex flex-col items-center lg:items-start mb-6 cursor-pointer select-none"
            onClick={handleNameClick}
          >
            <motion.h1 
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-iosevka text-parchment leading-tight tracking-wider drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
            >
              {firstName}
            </motion.h1>
            <motion.h1 
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-iosevka text-gold-muted leading-tight tracking-wider drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
            >
              {lastName}
            </motion.h1>
          </div>

          <motion.div 
            variants={dividerVariants}
            className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-gold-muted to-transparent lg:from-gold-muted lg:to-transparent mb-6 origin-left" 
          />
          
          <motion.div 
            variants={textVariants}
            className="max-w-md mb-8"
          >
            <p className="text-lg md:text-xl text-parchment/80 italic leading-relaxed mb-2">
              "{quote.text}"
            </p>
            <p className="text-gold-muted font-iosevka text-sm tracking-widest uppercase">
              — {quote.author}
            </p>
          </motion.div>

          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
          >
            <Button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:shadow-[0_0_20px_rgba(195,162,103,0.5)] transition-all duration-300 hover:scale-105"
            >
              Begin Journey
            </Button>
            <Button 
              onClick={() => window.open('https://drive.google.com/file/d/1xgBsi64puPPKC19Q1oIKLzLcjSrtUZSD/view?usp=sharing', '_blank')}
              className="hover:shadow-[0_0_20px_rgba(195,162,103,0.5)] transition-all duration-300 hover:scale-105"
            >
              View Resume
            </Button>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://github.com/KavyaNagariya', '_blank')}
              className="hover:shadow-[0_0_20px_rgba(229,229,229,0.2)] transition-all duration-300 hover:scale-105"
            >
              View GitHub
            </Button>
          </motion.div>
        </div>

        {/* Right Side: GitHub Heatmap */}
        <motion.div 
          variants={textVariants}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="w-full max-w-xl">
             <h3 className="text-gold-muted font-iosevka text-sm tracking-widest uppercase mb-4 text-center">GitHub Activity</h3>
             <GithubHeatmap />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
