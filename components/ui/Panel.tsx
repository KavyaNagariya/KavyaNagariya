"use client";

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { useRef } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);
  
  const defaultVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants || defaultVariants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={twMerge(
        'relative group',
        'bg-[#0c0c0e]/90 backdrop-blur-sm',
        'border border-gold-muted/20',
        'p-[1px] overflow-hidden rounded-sm',
        'transition-transform duration-300 hover:scale-[1.02]',
        className
      )}
    >
      {/* Static Spotlight Effect on Hover */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at center, rgba(195, 162, 103, 0.1), transparent 70%)" }}
      />

      {/* Content Container */}
      <div className="relative z-10 p-6 h-full bg-[#0a0a0c]/40 backdrop-blur-[2px]">
        {/* Outer Ornamental Border */}
        <div className="absolute inset-0 border border-gold-muted/10 pointer-events-none transition-all duration-500 group-hover:border-gold-muted/30 group-hover:shadow-[inset_0_0_20px_rgba(195,162,103,0.05)]" />
        
        {/* Corner Ornaments */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:-translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:-translate-x-1 group-hover:translate-y-1" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:translate-x-1 group-hover:translate-y-1" />

        {title && (
          <div className="relative mb-6">
            <h2 className="text-2xl font-iosevka text-gold-muted text-center tracking-widest uppercase pb-4 group-hover:text-gold-bright transition-colors duration-300">
              {title}
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-muted/40 to-transparent group-hover:via-gold-bright/60 transition-all duration-500 group-hover:w-32" />
          </div>
        )}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
