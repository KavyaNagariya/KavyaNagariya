"use client";

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
}

export function Panel({ 
  children, 
  className, 
  title, 
  variants,
  initial,
  whileInView,
  viewport 
}: PanelProps) {
  
  const defaultVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={variants || defaultVariants}
      initial={initial || "hidden"}
      whileInView={whileInView || "visible"}
      viewport={viewport || { once: true, margin: "-100px" }}
      className={twMerge(
        'relative group w-full',
        className
      )}
    >
      <div className="relative z-10 py-12 md:py-24">
        {title && (
          <div className="mb-12 md:mb-20">
            <h2 className="text-sm md:text-base font-spectral text-gold-muted/60 uppercase tracking-[0.3em] group-hover:text-gold-muted transition-colors duration-700">
              {title}
            </h2>
            <div className="w-8 h-[1px] bg-gold-muted/20 mt-4 group-hover:bg-gold-muted/50 transition-colors duration-700" />
          </div>
        )}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
