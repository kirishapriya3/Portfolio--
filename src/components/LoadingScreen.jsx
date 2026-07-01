import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Core pulsing circle */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-primary/20 blur-xl"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Outer rotating ring */}
        <motion.svg
          className="absolute w-full h-full text-primary"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            className="opacity-20"
          />
        </motion.svg>
        
        {/* Progress ring */}
        <svg className="absolute w-32 h-32" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#1a2035"
            strokeWidth="2"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(0,245,212,0.5)]"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5D4" />
              <stop offset="50%" stopColor="#7B61FF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute flex flex-col items-center">
          <span className="text-2xl font-bold text-gradient font-mono tracking-tighter">
            KP
          </span>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
          Initializing System
        </span>
        <div className="text-xs text-primary font-mono">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
}
