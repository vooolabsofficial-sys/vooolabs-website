import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
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
      className="w-full bg-[#080B14] text-white px-6 sm:px-16 pt-16 pb-32 sm:pb-36 relative overflow-hidden select-none border-t border-slate-800/80"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 z-10 mb-16">
        
        {/* COL 1: BRANDING (col-span-2) */}
        <div className="md:col-span-2 flex flex-col items-start gap-5">
          <Link to="/" className="flex items-baseline group" aria-label="VOOO LABS Home">
            <span className="shimmer-text font-crazyblocks text-3xl sm:text-4xl tracking-wider">VOOO</span>
            <span className="font-crazyblocks text-2xl sm:text-3xl text-white ml-2 tracking-wider">LABS</span>
          </Link>
          <p className="font-sans font-normal text-sm text-slate-300 max-w-[320px] leading-relaxed">
            {COMPANY.tagline}
          </p>

          {/* LOCATION & STUDIO BADGES */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-full border border-slate-700/80 px-3 py-1 font-sans font-medium text-xs text-slate-300 bg-white/[0.03] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Studio in {LOCATION.region}, {LOCATION.country}</span>
            </div>
            <div className="rounded-full border border-slate-700/80 px-3 py-1 font-sans font-medium text-xs text-slate-300 bg-white/[0.03] flex items-center gap-1.5">
              <MapPin size={11} className="text-blue-400" />
              <span>{LOCATION.hubs.join(' · ')}</span>
            </div>
          </div>

          <a
            href={`mailto:${COMPANY.email}`}
            className="font-sans font-medium text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            {COMPANY.email}
          </a>

          {/* SOCIALS & DIRECT TOUCHPOINTS */}
          <div className="flex items-center gap-2 mt-1">
            {[
              { icon: <GithubIcon size={17} />, href: SOCIALS.github, label: 'GitHub' },
              { icon: <LinkedinIcon size={17} />, href: SOCIALS.linkedin, label: 'LinkedIn' },
              { icon: <TwitterIcon size={17} />, href: SOCIALS.twitter, label: 'Twitter' },
              { icon: <InstagramIcon size={17} />, href: FOUNDER.instagram, label: "Founder's Instagram" },
              { icon: <WhatsappIcon size={17} />, href: whatsappLink, label: 'WhatsApp' },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 bg-white/[0.02] flex items-center justify-center text-slate-400 transition-all duration-200 hover:scale-105 hover:text-white hover:border-slate-600 hover:bg-white/[0.06] active:scale-95"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
            <a
              href={`mailto:${COMPANY.email}`}
              className="w-10 h-10 rounded-full border border-slate-800 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-white/[0.06] transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* COL 2: SERVICES */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-slate-400">Capabilities</h4>
          <div className="flex flex-col gap-2.5">
            <Link
              to="/services#websites"
              className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
            >
              Custom Websites
            </Link>
            <Link
              to="/services#custom-software"
              className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
            >
              Custom Business Software
            </Link>
            <Link
              to="/services#web-apps"
              className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
            >
              Custom Web Applications
            </Link>
            <Link
              to="/seo-ai"
              className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all"
            >
              AI Search Visibility (AEO/GEO)
            </Link>
          </div>
        </div>

        {/* COL 3: COMPANY & OUTCOME ACTIONS */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-slate-400">Studio & Inquiries</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/about" className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all">About Studio</Link>
            <Link to="/about#founder" className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all">Founder Profile</Link>
            <Link to="/roadmap" className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all">Delivery Roadmap</Link>
            <Link
              to="/contact"
              className="font-sans font-medium text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors pt-1"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={13} />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-normal text-sm text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare size={13} />
              <span>Discuss your project</span>
            </a>
          </div>
        </div>

        {/* COL 4: LEGAL */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-semibold text-xs tracking-wider uppercase text-slate-400">Legal & Guarantees</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/legal/privacy" className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all">Privacy Policy</Link>
            <Link to="/legal/terms" className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all">Terms of Service</Link>
            <Link to="/legal/ip-ownership" className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all">100% Code Ownership</Link>
            <Link to="/legal/refunds" className="font-sans font-normal text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all">Milestone Delivery Policy</Link>
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="relative max-w-7xl mx-auto border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left z-10">
        <p className="font-sans font-normal text-xs text-slate-400">
          {copyrightLine()}
        </p>
        <p className="font-sans font-medium text-xs text-slate-400 uppercase tracking-wider">
          Built with precision in {LOCATION.region}, {LOCATION.country}
        </p>
        <a
          href={`mailto:${COMPANY.email}`}
          className="font-sans font-normal text-xs text-slate-400 hover:text-white transition-colors"
        >
          {COMPANY.email}
        </a>
      </div>
    </footer>
  );
}
