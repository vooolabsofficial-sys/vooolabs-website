import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { COMPANY, SOCIALS } from '../../content/company';

export default function FixedBottomBar() {
  return (
    <div className="fixed bottom-4 sm:bottom-5 inset-x-0 z-[9000] flex justify-center px-3 sm:px-4 pointer-events-none">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-3 sm:gap-4 rounded-full border border-black/[0.08] bg-white/90 px-4 py-2 sm:py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.08)] backdrop-blur-xl select-none whitespace-nowrap max-w-[95vw] overflow-x-auto no-scrollbar"
      >
      {/* BRAND PULSE */}
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </div>
        <span className="font-clash font-semibold text-[11px] sm:text-xs g-text tracking-wider">VOOO LABS</span>
      </div>

      {/* DIVIDER */}
      <div className="w-[1px] h-4 bg-slate-200 flex-shrink-0" />

      {/* EMAIL */}
      <a
        href={`mailto:${COMPANY.email}`}
        className="font-kanit text-[11px] sm:text-xs text-slate-500 hover:text-blue-600 transition-colors"
      >
        {COMPANY.email}
      </a>

      {/* DIVIDER */}
      <div className="w-[1px] h-4 bg-slate-200 flex-shrink-0" />

      {/* SOCIALS */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/5 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-black/20 hover:bg-black/5 active:scale-95 transition-all duration-200"
          aria-label="GitHub"
        >
          <GithubIcon size={14} />
        </a>
        <a
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/5 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-500/20 hover:bg-blue-500/5 active:scale-95 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={14} />
        </a>
        <a
          href={`mailto:${COMPANY.email}`}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/5 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-500/20 hover:bg-blue-500/5 active:scale-95 transition-all duration-200"
          aria-label="Email"
        >
          <Mail size={14} />
        </a>
      </div>

      {/* DIVIDER */}
      <div className="w-[1px] h-4 bg-slate-200 flex-shrink-0" />

      {/* QUICK CTA */}
      <Link
        to="/contact"
        className="rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-4 py-1.5 font-kanit font-medium text-[11px] sm:text-xs text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] shadow-sm"
      >
        Contact →
      </Link>
    </motion.div>
    </div>
  );
}

