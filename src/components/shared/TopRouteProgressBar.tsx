import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopRouteProgressBar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Trigger on route change
    setIsVisible(true);
    setProgress(30);

    const midTimer = setTimeout(() => {
      setProgress(80);
    }, 120);

    const finishTimer = setTimeout(() => {
      setProgress(100);
    }, 280);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 550);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(finishTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="top-route-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-[99999] h-[3px] pointer-events-none overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-label="Route change progress"
        >
          <motion.div
            className="h-full relative"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #4285F4 0%, #7C3AED 50%, #F97316 100%)',
              boxShadow: '0 0 12px rgba(66, 133, 244, 0.6), 0 0 4px rgba(249, 115, 22, 0.6)',
            }}
            transition={{
              duration: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* TRAILING GLOW TIP */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-8 bg-white/40 blur-[2px]" 
              aria-hidden="true" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
