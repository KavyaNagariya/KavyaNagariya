import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
}

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-spectral tracking-widest text-xs md:text-sm uppercase transition-all duration-700 group overflow-hidden";
  
  const variants = {
    primary: "px-6 py-3 text-gold-muted hover:text-parchment",
    secondary: "px-6 py-3 text-parchment/60 hover:text-parchment",
    text: "text-gold-muted/60 hover:text-gold-muted py-2"
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {variant !== 'text' && (
        <>
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gold-muted/20 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-out" />
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-parchment origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
        </>
      )}
      
      {variant === 'text' && (
        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gold-muted/50 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
      )}
    </button>
  );
}
