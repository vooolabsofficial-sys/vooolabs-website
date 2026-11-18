import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, MessageSquare, ShieldCheck, Terminal, Radio } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  WhatsappIcon,
} from './BrandIcons';
import {
  COMPANY,
  LOCATION,
  SOCIALS,
  FOUNDER,
  whatsappLink,
  copyrightLine,
} from '../../content/company';

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#05070E] text-white px-6 sm:px-12 lg:px-16 pt-20 pb-16 sm:pb-20 relative overflow-hidden select-none border-t border-white/[0.08]"
      role="contentinfo"
      aria-label="VOOO LABS Studio Footer"
    >
      {/* SUBTLE AMBIENT STUDIO GLOW (ULTRA-LOW OPACITY, TECHIE VIBE) */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-radial from-blue-500/[0.07] via-purple-500/[0.02] to-transparent blur-[120px]" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* TOP GRID: STUDIO ARCHITECTURE & DIRECT NAVIGATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* COL 1: BRAND IDENTITY & STUDIO TELEMETRY (lg:col-span-3) */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-start gap-4">
            <Link to="/" className="flex items-baseline group" aria-label="VOOO LABS Home">
              <span className="shimmer-text font-crazyblocks text-3xl sm:text-4xl tracking-wider">VOOO</span>
              <span className="font-crazyblocks text-2xl sm:text-3xl text-white ml-2 tracking-wider">LABS</span>
            </Link>

            <p className="font-sans font-normal text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              {COMPANY.tagline}
            </p>

            {/* LIVE STUDIO TELEMETRY TAGS */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="rounded-full border border-white/[0.08] px-3 py-1 font-mono text-[11px] text-slate-300 bg-white/[0.02] backdrop-blur-md flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Operational · {LOCATION.region}</span>
              </div>
              <div className="rounded-full border border-white/[0.08] px-3 py-1 font-mono text-[11px] text-slate-300 bg-white/[0.02] backdrop-blur-md flex items-center gap-1.5">
                <MapPin size={11} className="text-blue-400" />
                <span>{LOCATION.hubs.join(' · ')}</span>
              </div>
            </div>

            {/* DIRECT ARCHITECT EMAIL */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-mono text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 pt-1"
            >
              <Terminal size={13} className="text-blue-400" />
              <span>{COMPANY.email}</span>
            </a>

            {/* SOCIAL TOUCHPOINTS */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { icon: <GithubIcon size={15} />, href: SOCIALS.github, label: 'GitHub' },
                { icon: <LinkedinIcon size={15} />, href: SOCIALS.linkedin, label: 'LinkedIn' },
                { icon: <TwitterIcon size={15} />, href: SOCIALS.twitter, label: 'Twitter' },
                { icon: <InstagramIcon size={15} />, href: FOUNDER.instagram, label: "Founder's Instagram" },
                { icon: <WhatsappIcon size={15} />, href: whatsappLink, label: 'WhatsApp' },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-slate-400 transition-all duration-200 hover:scale-105 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 active:scale-95"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
              <a
                href={`mailto:${COMPANY.email}`}
                className="w-8 h-8 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Direct Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* COL 2: CORE SYSTEMS (lg:col-span-2) */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-semibold text-xs tracking-wider uppercase text-slate-400">
              Core Systems
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/services"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                All Systems Overview
              </Link>
              <Link
                to="/services/websites"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                01 · Business Websites
              </Link>
              <Link
                to="/services/web-apps"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                02 · Custom Web Apps
              </Link>
              <Link
                to="/services/business-software"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                03 · Business Software
              </Link>
            </div>
          </div>

          {/* COL 3: SEARCH, AI & ADS (lg:col-span-3) */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-semibold text-xs tracking-wider uppercase text-slate-400">
              Search, AI & Ads
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/seo-ai"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                Overview & 4 Channels
              </Link>
              <Link
                to="/seo-ai/google-seo"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                01 · Technical Google SEO
              </Link>
              <Link
                to="/seo-ai/ai-search"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                02 · ChatGPT & AI Search (AEO)
              </Link>
              <Link
                to="/seo-ai/google-maps"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                03 · Google Maps Local 3-Pack
              </Link>
              <Link
                to="/seo-ai/google-ads"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                04 · Targeted Google Ads
              </Link>
            </div>
          </div>

          {/* COL 4: STUDIO & DIRECT (lg:col-span-2) */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-semibold text-xs tracking-wider uppercase text-slate-400">
              Studio & Direct
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/about"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                About Studio
              </Link>
              <Link
                to="/about#founder"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                Lead Architect
              </Link>
              <Link
                to="/contact"
                className="font-sans font-medium text-xs sm:text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors pt-0.5"
              >
                <span>Project Blueprint</span>
                <ArrowRight size={12} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare size={13} />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>

          {/* COL 5: IP & CLIENT PROTECTIONS (lg:col-span-2) */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-semibold text-xs tracking-wider uppercase text-slate-400">
              IP & Ownership
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/legal/ip-ownership"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1.5"
              >
                <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                <span>100% Code Handover</span>
              </Link>
              <Link
                to="/legal/terms"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                Scope & Delivery Terms
              </Link>
              <Link
                to="/legal/refunds"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                Milestone Sign-Off Policy
              </Link>
              <Link
                to="/legal/privacy"
                className="font-sans text-xs sm:text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
              >
                Data Privacy & NDA
              </Link>
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════
            SIGNATURE ARCHITECTURAL BRAND HORIZON
            (Spans across the entire footer width with low opacity)
           ══════════════════════════════════════════════════════ */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none py-10 sm:py-14 flex justify-center items-center border-t border-white/[0.06] mt-6">
          <span 
            className="font-crazyblocks tracking-wider text-center block text-[13vw] sm:text-[14vw] md:text-[15vw] leading-none whitespace-nowrap bg-gradient-to-b from-white/[0.12] via-white/[0.03] to-transparent bg-clip-text text-transparent font-normal"
            aria-hidden="true"
          >
            VOOO LABS
          </span>
        </div>

        {/* BOTTOM METADATA & TELEMETRY ROW */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-slate-400 font-mono">
          <p>
            {copyrightLine()}
          </p>
          <p className="tracking-wider uppercase text-slate-400 flex items-center gap-1.5">
            <Radio size={12} className="text-blue-400 animate-pulse" />
            <span>18.5204° N, 73.8567° E · Pune & Kolhapur, Maharashtra</span>
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {COMPANY.email}
          </a>
        </div>

      </div>
    </footer>
  );
}
