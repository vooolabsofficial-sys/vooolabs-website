import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Server, Sparkles } from 'lucide-react';

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
        
        {/* STUDIO PHILOSOPHY BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASING }}
          className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-1.5 mb-6 text-xs sm:text-sm text-slate-300 font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>"First make it work, then make it beautiful."</span>
        </motion.div>

        {/* HEADLINE: UNDER 8 WORDS */}
        <motion.h2 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASING }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4"
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
          Direct engineer access, fixed timelines, and full source code ownership from day one.
        </motion.p>

        {/* BUTTON CTAS WITH TACTILE KEY-PRESS PHYSICS */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28, ease: EASING }}
          className="flex flex-wrap gap-3.5 justify-center items-center mb-12"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-medium text-sm sm:text-base px-8 py-3.5 shadow-[0_4px_20px_rgba(66,133,244,0.35)] hover:shadow-[0_8px_28px_rgba(66,133,244,0.45)] transition-all duration-200 hover:-translate-y-[2px] active:translate-y-[2px] active:scale-[0.985] overflow-hidden"
          >
            <span className="relative z-10 font-medium">See what your project will cost</span>
            <ArrowRight size={16} className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" />
            <span className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </Link>

          <Link
            to="/seo-ai"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-8 py-3.5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-[2px] active:translate-y-[2px] active:scale-[0.985]"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span>Discover what you're missing</span>
          </Link>
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
            <span>100% Source Code Ownership</span>
          </span>
          <span className="flex items-center gap-2">
            <Server size={15} className="text-blue-400" />
            <span>All-Inclusive Domain & Hosting</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-orange-400 font-bold">₹0</span>
            <span>Zero Monthly Software Rent</span>
          </span>
        </motion.div>

      </div>
    </motion.section>
  );
}
