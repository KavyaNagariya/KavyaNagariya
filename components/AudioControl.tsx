"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Audio playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <audio ref={audioRef} loop src="/background-music.mp3" />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="relative group flex items-center justify-center w-12 h-12 rounded-full border border-gold-muted/30 bg-[#0a0a0c]/80 backdrop-blur-md text-gold-muted hover:text-gold-bright hover:border-gold-bright/50 transition-all duration-300 shadow-[0_0_15px_rgba(195,162,103,0.1)] hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="volume-on"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Volume2 size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="volume-off"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <VolumeX size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Ring Animation */}
        {isPlaying && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-gold-bright/30"
          />
        )}
      </motion.button>

      {/* Label Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-tarnished-panel border border-gold-muted/20 text-gold-muted text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-cinzel">
        {isPlaying ? "Mute Atmosphere" : "Awaken Atmosphere"}
      </span>
    </div>
  );
}
