import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';

interface BrandPreloaderProps {
  onComplete?: () => void;
}

export default function BrandPreloader({ onComplete }: BrandPreloaderProps) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 2.0s calibrated dwell time: allows full bounce + wave jump + stable rest
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // High-rebound bouncy elastic letter drop for 'V'
  const vDropBounce: TargetAndTransition = {
    opacity: 1,
    y: [-120, 24, -12, 5, 0],
    scaleY: [1.5, 0.7, 1.25, 0.92, 1],
    scaleX: [0.7, 1.35, 0.85, 1.08, 1],
    transition: {
      delay: 0.08,
      duration: 0.8,
      times: [0, 0.45, 0.68, 0.85, 1],
      ease: [0.22, 1, 0.36, 1] as any,
    },
  };

  // Wave-jump rebound for the three 'O's
  const oWaveJump = (delay: number): TargetAndTransition => ({
    opacity: 1,
    y: [-120, 24, -12, 5, 0, 0, -22, 0],
    scaleY: [1.5, 0.7, 1.25, 0.92, 1, 1, 1.2, 1],
    scaleX: [0.7, 1.35, 0.85, 1.08, 1, 1, 0.88, 1],
    transition: {
      delay,
      duration: 1.2,
      times: [0, 0.32, 0.52, 0.68, 0.78, 0.83, 0.92, 1],
      ease: [0.22, 1, 0.36, 1] as any,
    },
  });

  // Bouncy pop-in for 'LABS'
  const labsBounce: TargetAndTransition = {
    opacity: 1,
    scale: [0.2, 1.35, 0.88, 1.1, 1],
    y: [30, -12, 4, -1, 0],
    transition: {
      delay: 0.52,
      duration: 0.85,
      times: [0, 0.45, 0.68, 0.86, 1],
      ease: [0.22, 1, 0.36, 1] as any,
    },
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        // ONLY reveal website once the exit animation has 100% completed!
        if (onComplete) onComplete();
      }}
    >
      {!isFinished && (
        <motion.div
          key="brand-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -24,
            scale: 1.02,
            filter: 'blur(6px)',
            transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } 
          }}
          onClick={() => setIsFinished(true)}
          className="fixed inset-0 z-[999999] bg-white flex flex-col items-center justify-center select-none overflow-hidden cursor-pointer"
          title="Click to enter immediately"
          role="status"
          aria-label="VOOO LABS loading system"
        >
          {/* AMBIENT BRAND GLOW BACKDROP */}
          <div 
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[110px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-500/10 blur-[110px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/8 blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />

          {/* MAIN BRAND LOGO STAGE */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            {/* BOUNCY LOGO LETTERS — LOCKED EXACTLY TO CRAZYBLOCKS FONT */}
            <div className="flex items-baseline justify-center">
              
              {/* LETTER 'V' — GOOGLE / BRAND BLUE */}
              <motion.span
                initial={{ opacity: 0, y: -120, scaleY: 1.5, scaleX: 0.7 }}
                animate={vDropBounce}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#4285F4] tracking-wider leading-none inline-block drop-shadow-sm origin-bottom"
              >
                V
              </motion.span>

              {/* LETTER 'O' #1 — BLUE-PURPLE INDIGO */}
              <motion.span
                initial={{ opacity: 0, y: -120, scaleY: 1.5, scaleX: 0.7 }}
                animate={oWaveJump(0.18)}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#5B5BD6] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* LETTER 'O' #2 — ROYAL PURPLE */}
              <motion.span
                initial={{ opacity: 0, y: -120, scaleY: 1.5, scaleX: 0.7 }}
                animate={oWaveJump(0.28)}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#7C3AED] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* LETTER 'O' #3 — VIBRANT ORANGE */}
              <motion.span
                initial={{ opacity: 0, y: -120, scaleY: 1.5, scaleX: 0.7 }}
                animate={oWaveJump(0.38)}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#F97316] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* 'LABS' — MULTI-COLOUR GRADIENT WITH SHIMMER SWEEP */}
              <motion.span
                initial={{ opacity: 0, scale: 0.2, y: 30 }}
                animate={labsBounce}
                className="font-crazyblocks font-normal text-4xl sm:text-5xl md:text-6xl ml-3.5 sm:ml-5 tracking-wider leading-none inline-block shimmer-text origin-center"
                style={{
                  background: 'linear-gradient(135deg, #4285F4 0%, #7C3AED 50%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                LABS
              </motion.span>
            </div>

            {/* 3 RHYTHMIC JELLY-BOUNCE DOTS IN BRAND COLORS */}
            <div className="flex items-center gap-3 mt-8">
              <motion.span 
                animate={{ y: [0, -14, 0], scaleY: [1, 0.65, 1.25, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                className="w-2.5 h-2.5 rounded-full bg-[#4285F4] shadow-xs" 
              />
              <motion.span 
                animate={{ y: [0, -14, 0], scaleY: [1, 0.65, 1.25, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-xs" 
              />
              <motion.span 
                animate={{ y: [0, -14, 0], scaleY: [1, 0.65, 1.25, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-xs" 
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
