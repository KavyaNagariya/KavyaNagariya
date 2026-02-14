"use client";

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const currMouseX = e.clientX - rect.left;
    const currMouseY = e.clientY - rect.top;
    
    const xPct = currMouseX / width - 0.5;
    const yPct = currMouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    mouseX.set(currMouseX);
    mouseY.set(currMouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const background = useTransform(
    [mouseX, mouseY],
    ([xVal, yVal]) => `radial-gradient(600px circle at ${xVal}px ${yVal}px, rgba(195, 162, 103, 0.15), transparent 80%)`
  );

  const defaultVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: 15,
      filter: "blur(10px)",
      clipPath: "inset(100% 0% 0% 0%)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { 
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={variants || defaultVariants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={twMerge(
        'relative group',
        'bg-[#0c0c0e]/90 backdrop-blur-md',
        'border border-gold-muted/20',
        'p-[1px] overflow-hidden rounded-sm',
        className
      )}
    >
      {/* Animated Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* 3D Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10 p-6 h-full bg-[#0a0a0c]/40 backdrop-blur-sm"
      >
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Outer Ornamental Border */}
        <div className="absolute inset-0 border border-gold-muted/10 pointer-events-none transition-all duration-500 group-hover:border-gold-muted/30 group-hover:shadow-[inset_0_0_20px_rgba(195,162,103,0.05)]" />
        
        {/* Corner Ornaments */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:-translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:-translate-x-1 group-hover:translate-y-1" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-muted/40 transition-all duration-500 group-hover:border-gold-bright group-hover:translate-x-1 group-hover:translate-y-1" />

        {title && (
          <div className="relative mb-6">
            <h2 className="text-2xl font-cinzel text-gold-muted text-center tracking-widest uppercase pb-4 group-hover:text-gold-bright transition-colors duration-300">
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
