import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25']
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length;
        const end = (wordIndex + 1) / words.length;
        return (
          <Word key={wordIndex} word={word} progress={scrollYProgress} start={start} end={end} />
        );
      })}
    </p>
  );
}

interface WordProps {
  word: string;
  progress: any;
  start: number;
  end: number;
}

function Word({ word, progress, start, end }: WordProps) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mx-1 my-0.5 inline-block">
      {word}
    </motion.span>
  );
}
