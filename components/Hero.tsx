"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState, useEffect } from "react";

const quotes = [
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
  { text: "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.", author: "Albert Einstein" }
];

export function Hero() {
  const [quote, setQuote] = useState(quotes[0]);
  const firstName = "Kavya";
  const lastName = "Nagariya";

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants: any = {
    hidden: { 
      opacity: 0,
      y: 50,
      clipPath: "inset(0% 0% 100% 0%)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const letterVariants: any = {
    hidden: { 
      opacity: 0, 
      filter: "blur(8px)",
      scale: 1.5,
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  const subtitleVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 2,
        ease: "easeOut"
      },
    },
  };

  const dividerVariants: any = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1.5, delay: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="text-center px-4 max-w-4xl mx-auto z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5 }}
            className="text-gold-muted tracking-[0.2em] mb-4 text-sm md:text-base font-cinzel uppercase"
          >
            The Portfolio of
          </motion.h2>
          
          <div className="flex flex-col items-center mb-8">
            <motion.h1 
              variants={lineVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-parchment leading-tight tracking-wider drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] flex justify-center"
            >
              {firstName.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h1 
              variants={lineVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-gold-muted leading-tight tracking-wider drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] flex justify-center"
            >
              {lastName.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.div 
            variants={dividerVariants}
            className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold-muted to-transparent mb-8 origin-center" 
          />
          
          <motion.div 
            variants={subtitleVariants}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="font-spectral text-lg md:text-xl text-parchment/80 italic leading-relaxed mb-2">
              "{quote.text}"
            </p>
            <p className="text-gold-muted font-cinzel text-sm tracking-widest uppercase">
              — {quote.author}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
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
        </motion.div>
      </div>
    </section>
  );
}
