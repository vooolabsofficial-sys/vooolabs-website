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
      className="w-full bg-white text-slate-900 px-6 sm:px-12 lg:px-16 pt-16 pb-12 sm:pb-16 relative overflow-hidden select-none border-t border-slate-200/80"
      role="contentinfo"
      aria-label="VOOO LABS Studio Footer"
    >
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* TOP GRID: STUDIO ARCHITECTURE & DIRECT NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* COL 1: BRAND IDENTITY & STUDIO TELEMETRY (col-span-5) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link to="/" className="flex items-baseline group" aria-label="VOOO LABS Home">
              <span className="shimmer-text font-crazyblocks text-3xl sm:text-4xl tracking-wider">VOOO</span>
              <span className="font-crazyblocks text-2xl sm:text-3xl text-slate-900 ml-2 tracking-wider">LABS</span>
            </Link>

            <p className="font-sans font-normal text-sm text-slate-600 max-w-sm leading-relaxed">
              {COMPANY.tagline}
            </p>

            {/* LIVE STUDIO TELEMETRY TAGS */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] text-slate-700 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Studio Operational · {LOCATION.region}, {LOCATION.country}</span>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] text-slate-700 flex items-center gap-1.5">
                <MapPin size={11} className="text-blue-600" />
                <span>{LOCATION.hubs.join(' · ')}</span>
              </div>
            </div>

            {/* DIRECT ARCHITECT EMAIL */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-mono text-xs text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 pt-1"
            >
              <Terminal size={13} className="text-blue-600" />
              <span>{COMPANY.email}</span>
            </a>

            {/* SOCIAL TOUCHPOINTS */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { icon: <GithubIcon size={16} />, href: SOCIALS.github, label: 'GitHub' },
                { icon: <LinkedinIcon size={16} />, href: SOCIALS.linkedin, label: 'LinkedIn' },
                { icon: <TwitterIcon size={16} />, href: SOCIALS.twitter, label: 'Twitter' },
                { icon: <InstagramIcon size={16} />, href: FOUNDER.instagram, label: "Founder's Instagram" },
                { icon: <WhatsappIcon size={16} />, href: whatsappLink, label: 'WhatsApp' },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-all duration-200 hover:scale-105 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 active:scale-95 shadow-2xs"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
              <a
                href={`mailto:${COMPANY.email}`}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs"
                aria-label="Direct Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* COL 2: CORE SYSTEMS (col-span-2) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono font-semibold text-xs tracking-wider uppercase text-slate-900">
              Core Systems
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link
                to="/services#websites"
                className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all"
              >
                Business Websites
              </Link>
              <Link
                to="/services#web-apps"
                className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all"
              >
                Web Apps & Portals
              </Link>
              <Link
                to="/services#custom-software"
                className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all"
              >
                Custom Business Software
              </Link>
              <Link
                to="/seo-ai"
                className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all"
              >
                AI Search Visibility (AEO/GEO)
              </Link>
            </div>
          </div>

          {/* COL 3: STUDIO & INQUIRIES (col-span-2) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono font-semibold text-xs tracking-wider uppercase text-slate-900">
              Studio & Direct
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all">
                About Studio
              </Link>
              <Link to="/about#founder" className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all">
                Lead Architect
              </Link>
              <Link
                to="/contact"
                className="font-sans font-medium text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors pt-0.5"
              >
                <span>See project cost</span>
                <ArrowRight size={13} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare size={13} />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>

          {/* COL 4: IP & CLIENT PROTECTIONS (col-span-3) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono font-semibold text-xs tracking-wider uppercase text-slate-900">
              IP & Ownership
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/legal/ip-ownership" className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <span>100% Client Code Ownership</span>
              </Link>
              <Link to="/legal/terms" className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all">
                Direct Scope & Delivery Terms
              </Link>
              <Link to="/legal/refunds" className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all">
                Milestone Sign-Off Policy
              </Link>
              <Link to="/legal/privacy" className="font-sans text-sm text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all">
                Data Privacy & Non-Disclosure
              </Link>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA & TELEMETRY ROW */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-slate-500 font-mono">
          <p>
            {copyrightLine()}
          </p>
          <p className="tracking-wider uppercase text-slate-500 flex items-center gap-1.5">
            <Radio size={12} className="text-blue-600" />
            <span>18.5204° N, 73.8567° E · Pune & Kolhapur, Maharashtra</span>
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-slate-500 hover:text-blue-600 transition-colors"
          >
            {COMPANY.email}
          </a>
        </div>

      </div>
    </footer>
  );
}
