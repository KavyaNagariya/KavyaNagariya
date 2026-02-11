"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; speed: number; opacity: number; size: number }[] = [];
    const particleCount = 80; // Increased count for better density

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.3 + 0.1, // Slow, floating embers
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 2 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Particles (Embers)
      particles.forEach((p) => {
        // Gold/Fire color: slightly reddish-yellow
        ctx.fillStyle = `rgba(195, 162, 103, ${p.opacity})`; 
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Move upwards slowly
        p.y -= p.speed;
        
        // Horizontal drift
        p.x += Math.sin(p.y * 0.01) * 0.2;

        // Reset if off screen (top)
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
      });

      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-[#0a0a0c] overflow-hidden">
      {/* Layer 0: The World (Video Background) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(3px) brightness(0.5)" }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Layer 0.5: Gradient Overlay for better text contrast */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: `
            radial-gradient(circle at 50% 120%, rgba(26, 26, 32, 0.2) 0%, rgba(10, 10, 12, 0.4) 60%),
            linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(10,10,12,0.6) 100%)
          `
        }}
      />
      
      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* Layer 1: The Atmosphere (Particles) */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Layer 2: Vignette to focus center content */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_10%,#000000_120%)] opacity-60" />
    </div>
  );
}