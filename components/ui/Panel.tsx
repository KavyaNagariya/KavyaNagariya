import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Panel({ children, className, title }: PanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={twMerge(
        'relative group',
        'bg-tarnished-panel/80 backdrop-blur-sm',
        'border-2 border-gold-muted/30', // Inner border base
        'p-1', // Spacing for double border effect
        className
      )}
    >
      {/* Outer Ornamental Border */}
      <div className="absolute inset-0 border border-gold-muted/50 pointer-events-none transition-all duration-500 group-hover:border-gold-bright group-hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]" />
      
      {/* Corner Ornaments */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold-bright" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold-bright" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold-bright" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold-bright" />

      {/* Content Container */}
      <div className="relative z-10 p-6 h-full border border-black/20">
        {title && (
          <h2 className="text-3xl font-cinzel text-gold-muted mb-6 text-center tracking-widest uppercase border-b border-gold-muted/20 pb-2 group-hover:text-gold-bright transition-colors duration-300">
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.div>
  );
}
