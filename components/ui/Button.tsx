import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'relative px-8 py-3 overflow-hidden transition-all duration-300 group',
        'font-cinzel tracking-wider text-sm font-bold uppercase',
        'border border-gold-muted text-gold-muted',
        'hover:text-black hover:border-gold-bright hover:shadow-[0_0_20px_rgba(195,162,103,0.4)]',
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gold-bright/0 group-hover:bg-gold-bright transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-0" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-1 h-1 bg-gold-muted transition-colors group-hover:bg-gold-bright" />
      <span className="absolute bottom-0 right-0 w-1 h-1 bg-gold-muted transition-colors group-hover:bg-gold-bright" />
    </button>
  );
}
