import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';

interface BrandPreloaderProps {
  onComplete?: () => void;
}

export default function BrandPreloader({ onComplete }: BrandPreloaderProps) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Calibrated studio sweet-spot timing: 1.25s total duration
    const timer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 1250);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // High-rebound bouncy elastic letter drop keyframes
  const dropBounce = {
    initial: { 
      opacity: 0, 
      y: -95, 
      scaleY: 1.4, 
      scaleX: 0.75 
    },
    animate: (delay: number) => ({
      opacity: 1,
      y: [-95, 18, -10, 4, 0],
      scaleY: [1.4, 0.75, 1.2, 0.94, 1],
      scaleX: [0.75, 1.3, 0.88, 1.06, 1],
      transition: {
        delay,
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    }),
  };

  // Secondary joyful wave jump for the three 'O's
  const oWaveJump = (delay: number): TargetAndTransition => ({
    opacity: 1,
    y: [-95, 18, -10, 4, 0, 0, -18, 0],
    scaleY: [1.4, 0.75, 1.2, 0.94, 1, 1, 1.15, 1],
    scaleX: [0.75, 1.3, 0.88, 1.06, 1, 1, 0.9, 1],
    transition: {
      delay,
      duration: 1.05,
      times: [0, 0.35, 0.55, 0.7, 0.8, 0.85, 0.93, 1],
      ease: 'easeOut',
    },
  });

  // Bouncy pop-in for 'LABS'
  const labsBounce = {
    initial: { 
      opacity: 0, 
      scale: 0.3, 
      y: 20 
    },
    animate: {
      opacity: 1,
      scale: [0.3, 1.28, 0.9, 1.08, 1],
      y: [20, -8, 3, -1, 0],
      transition: {
        delay: 0.44,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="brand-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.04,
            filter: 'blur(4px)',
            transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } 
          }}
          onClick={() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center select-none overflow-hidden cursor-pointer"
          title="Click to enter immediately"
          role="status"
          aria-label="VOOO LABS loading system"
        >
          {/* AMBIENT BRAND GLOWS */}
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
            
            {/* BOUNCY LOGO LETTERS */}
            <div className="flex items-baseline justify-center">
              
              {/* LETTER 'V' — GOOGLE/BRAND BLUE */}
              <motion.span
                variants={dropBounce}
                initial="initial"
                animate={dropBounce.animate(0.04)}
                className="font-crazyblocks text-6xl sm:text-7xl md:text-8xl text-[#4285F4] tracking-wider leading-none inline-block drop-shadow-sm origin-bottom"
              >
                V
              </motion.span>

              {/* LETTER 'O' #1 — BLUE-PURPLE INDIGO */}
              <motion.span
                initial={{ opacity: 0, y: -95, scaleY: 1.4, scaleX: 0.75 }}
                animate={oWaveJump(0.14)}
                className="font-crazyblocks text-6xl sm:text-7xl md:text-8xl text-[#5B5BD6] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* LETTER 'O' #2 — ROYAL PURPLE */}
              <motion.span
                initial={{ opacity: 0, y: -95, scaleY: 1.4, scaleX: 0.75 }}
                animate={oWaveJump(0.24)}
                className="font-crazyblocks text-6xl sm:text-7xl md:text-8xl text-[#7C3AED] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* LETTER 'O' #3 — VIBRANT ORANGE */}
              <motion.span
                initial={{ opacity: 0, y: -95, scaleY: 1.4, scaleX: 0.75 }}
                animate={oWaveJump(0.34)}
                className="font-crazyblocks text-6xl sm:text-7xl md:text-8xl text-[#F97316] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* 'LABS' — MULTI-COLOUR GRADIENT WITH SHIMMER SWEEP */}
              <motion.span
                variants={labsBounce}
                initial="initial"
                animate="animate"
                className="font-crazyblocks text-4xl sm:text-5xl md:text-6xl ml-3.5 sm:ml-5 tracking-wider leading-none inline-block shimmer-text font-bold origin-center"
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
                animate={{ y: [0, -12, 0], scaleY: [1, 0.7, 1.2, 1] }}
                transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                className="w-2.5 h-2.5 rounded-full bg-[#4285F4] shadow-xs" 
              />
              <motion.span 
                animate={{ y: [0, -12, 0], scaleY: [1, 0.7, 1.2, 1] }}
                transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-xs" 
              />
              <motion.span 
                animate={{ y: [0, -12, 0], scaleY: [1, 0.7, 1.2, 1] }}
                transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-xs" 
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
