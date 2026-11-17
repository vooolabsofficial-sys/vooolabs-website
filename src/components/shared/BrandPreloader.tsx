import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrandPreloaderProps {
  onComplete?: () => void;
}

export default function BrandPreloader({ onComplete }: BrandPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Calibrated progress simulation with realistic acceleration curve
    const startTime = performance.now();
    const duration = 1250; // 1.25s total preloader duration

    let frameId: number;
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Easing curve: quick start, brief dwell, fast completion
      const eased = Math.pow(rawProgress, 0.85) * 100;
      setProgress(Math.round(eased));

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 180);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  // Letter motion variant with tuned spring physics
  const letterVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.85 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.08,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    }),
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="brand-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
          }}
          onClick={() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center select-none overflow-hidden cursor-pointer"
          title="Click to enter immediately"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="VOOO LABS loading system"
        >
          {/* AMBIENT BRAND COLOR GLOWS */}
          <div 
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/8 blur-[90px] pointer-events-none" 
            aria-hidden="true" 
          />

          {/* MAIN BRAND CONTAINER */}
          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
            
            {/* LOGO ASSEMBLY WITH INDIVIDUAL LETTER PHYSICS */}
            <div className="flex items-baseline justify-center mb-6">
              
              {/* LETTER 'V' — GOOGLE BLUE */}
              <motion.span
                custom={0}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-crazyblocks text-5xl sm:text-6xl text-[#4285F4] tracking-wider leading-none inline-block drop-shadow-sm"
              >
                V
              </motion.span>

              {/* LETTER 'O' #1 — BLUE-PURPLE TRANSITION */}
              <motion.span
                custom={1}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-crazyblocks text-5xl sm:text-6xl text-[#5B5BD6] tracking-wider leading-none inline-block"
              >
                O
              </motion.span>

              {/* LETTER 'O' #2 — ROYAL PURPLE */}
              <motion.span
                custom={2}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-crazyblocks text-5xl sm:text-6xl text-[#7C3AED] tracking-wider leading-none inline-block"
              >
                O
              </motion.span>

              {/* LETTER 'O' #3 — VIBRANT ORANGE */}
              <motion.span
                custom={3}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-crazyblocks text-5xl sm:text-6xl text-[#F97316] tracking-wider leading-none inline-block"
              >
                O
              </motion.span>

              {/* 'LABS' — MULTI-COLOUR GRADIENT WITH SHIMMER SWEEP */}
              <motion.span
                custom={4}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-crazyblocks text-3xl sm:text-4xl ml-3.5 tracking-wider leading-none inline-block shimmer-text font-bold"
                style={{
                  background: 'linear-gradient(135deg, #4285F4 0%, #7C3AED 50%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                LABS
              </motion.span>
            </div>

            {/* 3-DOT KINETIC PULSE RINGS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" style={{ animationDelay: '300ms' }} />
            </motion.div>

            {/* HIGH-PRECISION 2PX MULTI-COLOUR PROGRESS BAR */}
            <div className="w-full max-w-[220px] h-[3px] bg-slate-100 rounded-full overflow-hidden relative shadow-inner mb-4">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #4285F4 0%, #7C3AED 50%, #F97316 100%)',
                  boxShadow: '0 0 10px rgba(66, 133, 244, 0.4)',
                }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* MONOSPACED TELEMETRY & LIVE COUNTER */}
            <div className="w-full max-w-[240px] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="tracking-widest uppercase text-slate-500 font-medium">
                {progress < 40 && 'INITIALIZING...'}
                {progress >= 40 && progress < 85 && 'CALIBRATING CORE...'}
                {progress >= 85 && progress < 100 && 'SYNCHRONIZING...'}
                {progress === 100 && 'SYSTEM VERIFIED'}
              </span>
              <span className="text-slate-700 font-semibold tabular-nums">
                {progress}%
              </span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
