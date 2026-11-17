import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Server, Sparkles, UserCheck } from 'lucide-react';
import LiquidButton from '../shared/LiquidButton';

const EASING = [0.22, 1, 0.36, 1] as const;

export default function Slide4_ClosingCTA() {
  return (
    <motion.section 
      initial={{ scale: 0.97, opacity: 0.85 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASING }}
      className="bg-[#0A0F1E] text-white py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden select-none"
      aria-label="Start Your Project"
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* STUDIO PHILOSOPHY (MATCHED SCALE, BOLD & BRAND ACCENT COLOR) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASING }}
          className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg tracking-tight mb-4 select-none"
        >
          <span className="font-bold text-white">
            First make it work,
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
          <span className="font-medium text-slate-300">
            then make it
          </span>
          <span className="font-extrabold text-blue-400">
            beautiful.
          </span>
        </motion.div>

        {/* HEADLINE: UNDER 8 WORDS (BOLD & CRISP) */}
        <motion.h2 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4"
        >
          Build Bold. Ship Smart. <br />
          <span className="shimmer-text">Live Different.</span>
        </motion.h2>

        {/* SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.20, ease: EASING }}
          className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed"
        >
          <span className="font-medium text-white">Direct engineer access</span>, fixed timelines, and <span className="font-bold text-blue-400">100% source code ownership</span> from day one.
        </motion.p>

        {/* BUTTON CTAS WITH LIQUID MAGNETIC PHYSICS */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28, ease: EASING }}
          className="flex flex-wrap gap-3.5 justify-center items-center mb-12"
        >
          <LiquidButton
            to="/contact"
            variant="gradient"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <span>See what your project will cost</span>
            <ArrowRight size={16} />
          </LiquidButton>

          <LiquidButton
            to="/seo-ai"
            variant="dark"
            rounded="pill"
            size="lg"
            magnetic={true}
          >
            <Sparkles size={16} className="text-purple-400" />
            <span>Discover what you're missing</span>
          </LiquidButton>
        </motion.div>

        {/* 3 FACTUAL TRUST SIGNALS */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs text-slate-400 font-mono"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-emerald-400" />
            <span><strong className="font-bold text-emerald-400">100%</strong> Source Code Ownership</span>
          </span>
          <span className="flex items-center gap-2">
            <Server size={15} className="text-blue-400" />
            <span><strong className="font-bold text-blue-400">Complete</strong> Cloud & Domain Setup</span>
          </span>
          <span className="flex items-center gap-2">
            <UserCheck size={15} className="text-orange-400" />
            <span><strong className="font-bold text-orange-400">Direct</strong> Lead Architect Access</span>
          </span>
        </motion.div>

      </div>
    </motion.section>
  );
}
