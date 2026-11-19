import React from 'react';
import { Link } from 'react-router-dom';
import {
  LOCATION,
  SOCIALS,
  FOUNDER,
  whatsappLink,
  copyrightLine,
} from '../../content/company';

const STUDIO_EMAIL = 'astrastudiosteam@gmail.com';

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#05070E] text-white border-t border-white/[0.08] relative overflow-hidden select-none"
      role="contentinfo"
      aria-label="VOOO LABS Studio Footer"
    >
      {/* SUBTLE AMBIENT TOP RADIAL GLOW */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(66,133,244,0.08),transparent_65%)] blur-[100px]" 
        aria-hidden="true" 
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 sm:pt-20 pb-4 z-10">
        
        {/* 12-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
          
          {/* COLUMN 1: BRAND IDENTITY & STUDIO TELEMETRY (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-baseline group" aria-label="VOOO LABS Home">
              <span className="shimmer-text font-crazyblocks text-3xl sm:text-4xl tracking-wider leading-none">
                VOOO
              </span>
              <span className="font-crazyblocks text-2xl sm:text-3xl text-white ml-2 tracking-wider leading-none">
                LABS
              </span>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              Custom business websites, web portals, internal software, and search visibility—engineered with 100% client source code ownership.
            </p>

            {/* LIVE OPERATIONAL STATUS PILL */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-slate-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Studio Operational · {LOCATION.region}, {LOCATION.country}</span>
              </div>

              <div className="font-mono text-[11px] text-slate-400 tracking-wider uppercase px-2 py-1">
                {LOCATION.hubs.join(' · ')}
              </div>
            </div>

            <a
              href={`mailto:${STUDIO_EMAIL}`}
              className="inline-block font-mono text-xs text-slate-400 hover:text-white transition-colors"
            >
              {STUDIO_EMAIL}
            </a>
          </div>

          {/* COLUMN 2: CORE SYSTEMS (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
              CORE SYSTEMS
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-slate-300">
              <Link
                to="/services"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                All Systems Overview
              </Link>
              <Link
                to="/services/websites"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                01 · Business Websites
              </Link>
              <Link
                to="/services/web-apps"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                02 · Custom Web Apps & Portals
              </Link>
              <Link
                to="/services/business-software"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                03 · Custom Business Software
              </Link>
            </div>
          </div>

          {/* COLUMN 3: SEARCH & AI (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
              SEARCH & AI
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-slate-300">
              <Link
                to="/seo-ai"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                4-Channel Overview
              </Link>
              <Link
                to="/seo-ai/google-seo"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                Google Search SEO
              </Link>
              <Link
                to="/seo-ai/ai-search"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                ChatGPT & AI (AEO)
              </Link>
              <Link
                to="/seo-ai/google-maps"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                Google Maps Local
              </Link>
              <Link
                to="/seo-ai/google-ads"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                Targeted Google Ads
              </Link>
            </div>
          </div>

          {/* COLUMN 4: STUDIO & DIRECT (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
              STUDIO & DIRECT
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-slate-300">
              <Link
                to="/about"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit"
              >
                About VOOO LABS
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-400 hover:translate-x-0.5 transition-all w-fit font-medium flex items-center gap-1.5"
              >
                <span>Configure Project Blueprint</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 hover:translate-x-0.5 transition-all w-fit"
              >
                Direct WhatsApp Inquiries
              </a>
              <Link
                to="/about#founder"
                className="hover:text-white hover:translate-x-0.5 transition-all w-fit text-xs text-slate-400 pt-1"
              >
                Lead Architect: Vrushabh Shinde
              </Link>
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════
            BALANCED SOCIAL & LEGAL ROW
            LEFT: Social Media Logos (WhatsApp, Insta, LinkedIn, GitHub, X, Email)
            RIGHT (OPPOSITE SIDE): Terms of Service · Privacy · Refunds · Code Ownership
           ══════════════════════════════════════════════════════ */}
        <div className="border-t border-white/[0.08] pt-6 pb-2 flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* LEFT: 6 RAZOR-SHARP GLASS CIRCLE SVG BUTTONS */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* 1. WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.09] hover:border-emerald-400/50 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Direct WhatsApp"
              title="Direct WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            {/* 2. INSTAGRAM */}
            <a
              href={FOUNDER.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.09] hover:border-[#4285F4]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Founder's Instagram"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* 3. LINKEDIN */}
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.09] hover:border-[#4285F4]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* 4. GITHUB */}
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.09] hover:border-[#4285F4]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* 5. X / TWITTER */}
            <a
              href={SOCIALS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.09] hover:border-[#4285F4]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="X (Twitter)"
              title="X"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* 6. DIRECT EMAIL */}
            <a
              href={`mailto:${STUDIO_EMAIL}`}
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.09] hover:border-[#4285F4]/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Direct Email"
              title={`Email: ${STUDIO_EMAIL}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

          </div>

          {/* RIGHT (OPPOSITE SIDE): CLEAN HORIZONTAL STANDARD LEGAL POLICY LINKS */}
          <nav 
            aria-label="Legal and Compliance"
            className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 text-xs font-medium text-slate-400"
          >
            <Link
              to="/legal/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-white/20 select-none" aria-hidden="true">·</span>
            <Link
              to="/legal/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20 select-none" aria-hidden="true">·</span>
            <Link
              to="/legal/refunds"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
            <span className="text-white/20 select-none" aria-hidden="true">·</span>
            <Link
              to="/legal/ip-ownership"
              className="hover:text-white transition-colors"
            >
              Code Ownership
            </Link>
          </nav>

        </div>

        {/* ══════════════════════════════════════════════════════
            SIGNATURE ARCHITECTURAL BRAND WATERMARK
            (Positioned lower down, directly above the bottom line, zero text clash)
           ══════════════════════════════════════════════════════ */}
        <div 
          className="relative w-full overflow-hidden select-none pointer-events-none pt-2 sm:pt-4 pb-1 sm:pb-2 flex justify-center items-center"
          aria-hidden="true"
        >
          <span 
            className="text-[13.5vw] sm:text-[14.5vw] font-crazyblocks tracking-[0.06em] leading-none select-none pointer-events-none text-center bg-gradient-to-b from-white/[0.09] via-white/[0.025] to-transparent bg-clip-text text-transparent blur-[1.2px] block"
          >
            VOOO LABS
          </span>
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════
          BOTTOM BAR: COPYRIGHT (LEFT) & TELEMETRY (RIGHT)
         ══════════════════════════════════════════════════════ */}
      <div className="border-t border-white/[0.08] relative z-10 bg-black/30 backdrop-blur-xs">
        <div className="max-w-6xl mx-auto px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* LEFT SIDE: COPYRIGHT */}
          <div className="text-slate-300 font-normal text-center sm:text-left">
            {copyrightLine()}
          </div>

          {/* RIGHT SIDE: OPERATIONAL TELEMETRY & LOCATION */}
          <div className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5 select-none text-center sm:text-right">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>18.5204° N, 73.8567° E · Pune & Kolhapur</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
