import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInProps {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  children: React.ReactNode;
  className?: string;
}

export default function FadeIn({
  delay = 0,
  duration,
  x = 0,
  y = 20,
  children,
  className = ''
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        type: 'spring',
        stiffness: 90,
        damping: 20,
        mass: 0.8,
        delay,
        ...(duration ? { duration } : {})
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
