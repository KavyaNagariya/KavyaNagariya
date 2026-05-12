"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video auto-play failed:", err);
      });
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; speed: number; opacity: number; size: number }[] = [];
    const particleCount = 30; // Reduced for extreme minimal

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.1 + 0.05, // Slower, ethereal
        opacity: Math.random() * 0.3 + 0.05,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(195, 162, 103, ${p.opacity})`; 
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.speed;
        p.x += Math.sin(p.y * 0.005) * 0.1;

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
      {/* Video Background - Darker, more blurred */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(8px) brightness(0.4)" }}
      >
        <source src="/new_low_background.mp4" type="video/mp4" />
      </video>

      {/* Mist Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-gold-muted/5 blur-[120px] rounded-full animate-mist-1" />
        <div className="absolute top-[40%] -right-[10%] w-[70%] h-[70%] bg-gold-muted/5 blur-[150px] rounded-full animate-mist-2" />
        <div className="absolute -bottom-[20%] left-[20%] w-[80%] h-[50%] bg-parchment/5 blur-[100px] rounded-full animate-mist-3" />
      </div>

      {/* Extreme Vignette for Focus */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0c_100%)] opacity-95" />
      
      {/* Canvas for sparse particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50" />
    </div>
  );
}
