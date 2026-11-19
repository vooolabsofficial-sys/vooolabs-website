import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';

interface BrandPreloaderProps {
  onComplete?: () => void;
}

export default function BrandPreloader({ onComplete }: BrandPreloaderProps) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    // 2.1s calibrated dwell time: allows full physics drop, wave bounce, and stable showcase
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 2100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // 120 FPS Subdivided Elastic Drop for 'V'
  const vDropBounce: TargetAndTransition = {
    opacity: 1,
    y: [-130, 26, -16, 8, -3, 0],
    scaleY: [1.6, 0.65, 1.3, 0.88, 1.06, 1],
    scaleX: [0.65, 1.42, 0.82, 1.12, 0.96, 1],
    rotate: [0, -6, 4, -2, 1, 0],
    transition: {
      delay: 0.06,
      duration: 0.9,
      times: [0, 0.42, 0.64, 0.79, 0.9, 1],
      ease: [0.22, 1, 0.36, 1] as any,
    },
  };

  // 120 FPS High-Rebound Wave Jump for the three 'O's with rotational inertia
  const oWaveJump = (delay: number, tiltDirection: number): TargetAndTransition => ({
    opacity: 1,
    // Step 1: Initial drop & slam -> Step 2: High spring rebound wave -> Step 3: Settle
    y: [-130, 26, -14, 5, 0, 0, -32, 6, -2, 0],
    scaleY: [1.6, 0.65, 1.28, 0.9, 1, 0.72, 1.32, 0.88, 1.05, 1],
    scaleX: [0.65, 1.42, 0.82, 1.1, 1, 1.36, 0.82, 1.12, 0.96, 1],
    rotate: [0, tiltDirection * 8, tiltDirection * -5, tiltDirection * 2, 0, 0, tiltDirection * -12, tiltDirection * 4, 0, 0],
    transition: {
      delay,
      duration: 1.35,
      times: [0, 0.28, 0.44, 0.56, 0.65, 0.72, 0.82, 0.9, 0.96, 1],
      ease: [0.22, 1, 0.36, 1] as any,
    },
  });

  // 120 FPS Bouncy Pop-In with Spring Overshoot for 'LABS'
  const labsBounce: TargetAndTransition = {
    opacity: 1,
    scale: [0.15, 1.42, 0.84, 1.14, 0.96, 1],
    y: [40, -16, 8, -3, 1, 0],
    rotate: [-4, 3, -1.5, 0.5, 0],
    transition: {
      delay: 0.48,
      duration: 0.95,
      times: [0, 0.45, 0.68, 0.82, 0.92, 1],
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
            y: -28,
            scale: 1.03,
            filter: 'blur(8px)',
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
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/12 blur-[120px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-500/12 blur-[120px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/10 blur-[110px] pointer-events-none" 
            aria-hidden="true" 
          />

          {/* MAIN BRAND LOGO STAGE */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            {/* 120 FPS BOUNCY LOGO LETTERS — LOCKED TO CRAZYBLOCKS FONT */}
            <div className="flex items-baseline justify-center relative">
              
              {/* LETTER 'V' — GOOGLE / BRAND BLUE */}
              <motion.span
                initial={{ opacity: 0, y: -130, scaleY: 1.6, scaleX: 0.65 }}
                animate={vDropBounce}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#4285F4] tracking-wider leading-none inline-block drop-shadow-sm origin-bottom"
              >
                V
              </motion.span>

              {/* LETTER 'O' #1 — BLUE-PURPLE INDIGO */}
              <motion.span
                initial={{ opacity: 0, y: -130, scaleY: 1.6, scaleX: 0.65 }}
                animate={oWaveJump(0.16, -1)}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#5B5BD6] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* LETTER 'O' #2 — ROYAL PURPLE */}
              <motion.span
                initial={{ opacity: 0, y: -130, scaleY: 1.6, scaleX: 0.65 }}
                animate={oWaveJump(0.26, 1)}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#7C3AED] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* LETTER 'O' #3 — VIBRANT ORANGE */}
              <motion.span
                initial={{ opacity: 0, y: -130, scaleY: 1.6, scaleX: 0.65 }}
                animate={oWaveJump(0.36, -1)}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                className="font-crazyblocks font-normal text-6xl sm:text-7xl md:text-8xl text-[#F97316] tracking-wider leading-none inline-block origin-bottom"
              >
                O
              </motion.span>

              {/* 'LABS' — MULTI-COLOUR GRADIENT WITH SHIMMER SWEEP */}
              <motion.span
                initial={{ opacity: 0, scale: 0.15, y: 40 }}
                animate={labsBounce}
                style={{
                  background: 'linear-gradient(135deg, #4285F4 0%, #7C3AED 50%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  willChange: 'transform, opacity',
                  transform: 'translateZ(0)',
                }}
                className="font-crazyblocks font-normal text-4xl sm:text-5xl md:text-6xl ml-3.5 sm:ml-5 tracking-wider leading-none inline-block shimmer-text origin-center"
              >
                LABS
              </motion.span>
            </div>

            {/* 3 RHYTHMIC JELLY-SQUASH DOTS WITH 120 FPS FLUIDITY */}
            <div className="flex items-center gap-3 mt-8">
              <motion.span 
                animate={{ 
                  y: [0, -18, 0], 
                  scaleY: [0.65, 1.35, 0.65],
                  scaleX: [1.38, 0.78, 1.38]
                }}
                transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                style={{ willChange: 'transform' }}
                className="w-2.5 h-2.5 rounded-full bg-[#4285F4] shadow-sm origin-bottom" 
              />
              <motion.span 
                animate={{ 
                  y: [0, -18, 0], 
                  scaleY: [0.65, 1.35, 0.65],
                  scaleX: [1.38, 0.78, 1.38]
                }}
                transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut', delay: 0.14 }}
                style={{ willChange: 'transform' }}
                className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-sm origin-bottom" 
              />
              <motion.span 
                animate={{ 
                  y: [0, -18, 0], 
                  scaleY: [0.65, 1.35, 0.65],
                  scaleX: [1.38, 0.78, 1.38]
                }}
                transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut', delay: 0.28 }}
                style={{ willChange: 'transform' }}
                className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-sm origin-bottom" 
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
