import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
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
import { PRODUCTS } from '../../content/products';

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#0A0F1E] text-white px-6 sm:px-16 pt-16 pb-32 sm:pb-36 relative overflow-hidden select-none"
      role="contentinfo"
      aria-label="Footer"
    >
      
      {/* GHOST WATERMARK */}
      <div 
        className="absolute top-6 left-1/2 -translate-x-1/2 font-clash font-extrabold text-[8vw] sm:text-[10vw] text-white/[0.03] select-none pointer-events-none whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        VOOO LABS
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 z-10 mb-16">
        
        {/* COL 1: BRANDING (col-span-2) */}
        <div className="md:col-span-2 flex flex-col items-start gap-5">
          <Link to="/" className="flex items-baseline group" aria-label="VOOO LABS Home">
            <span className="shimmer-text font-clash font-bold text-3xl">VOOO</span>
            <span className="font-kanit font-light text-3xl text-white ml-1">LABS</span>
          </Link>
          <p className="font-kanit font-light text-sm text-slate-300 max-w-[280px] leading-relaxed">
            {COMPANY.tagline}
          </p>

          {/* LOCATION & MADE IN INDIA BADGES */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-full border border-white/15 px-3.5 py-1 font-kanit font-normal text-xs text-white/90 bg-white/[0.04] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span>Built in {LOCATION.country}</span>
            </div>
            <div className="rounded-full border border-white/15 px-3.5 py-1 font-kanit font-normal text-xs text-white/90 bg-white/[0.04] flex items-center gap-1.5">
              <MapPin size={12} className="text-emerald-400" />
              <span>{LOCATION.hubs.join(' · ')}</span>
            </div>
          </div>

          <a
            href={`mailto:${COMPANY.email}`}
            className="font-kanit font-normal text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            {COMPANY.email}
          </a>

          {/* SOCIALS - 44px (w-11 h-11) Touch Targets */}
          <div className="flex items-center gap-2.5 mt-2">
            {[
              { icon: <GithubIcon size={18} />, href: SOCIALS.github, label: 'GitHub', hover: 'hover:border-blue-400 hover:text-white hover:shadow-[0_0_15px_rgba(66,133,244,0.4)]' },
              { icon: <LinkedinIcon size={18} />, href: SOCIALS.linkedin, label: 'LinkedIn', hover: 'hover:border-blue-400 hover:text-white hover:shadow-[0_0_15px_rgba(66,133,244,0.4)]' },
              { icon: <TwitterIcon size={18} />, href: SOCIALS.twitter, label: 'Twitter', hover: 'hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]' },
              { icon: <InstagramIcon size={18} />, href: FOUNDER.instagram, label: "Founder's Instagram", hover: 'hover:border-pink-400 hover:text-white hover:shadow-[0_0_15px_rgba(244,114,182,0.4)]' },
              { icon: <WhatsappIcon size={18} />, href: whatsappLink, label: 'WhatsApp', hover: 'hover:border-emerald-400 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]' },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-slate-300 transition-all duration-200 hover:scale-105 active:scale-95 ${soc.hover}`}
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
            <a
              href={`mailto:${COMPANY.email}`}
              className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(66,133,244,0.4)] transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* COL 2: PRODUCTS */}
        <div className="flex flex-col gap-4">
          <h4 className="font-clash font-semibold text-sm tracking-wider uppercase text-white">Products</h4>
          <div className="flex flex-col gap-2.5">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                to={`/products#${product.slug}`}
                className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        {/* COL 3: COMPANY */}
        <div className="flex flex-col gap-4">
          <h4 className="font-clash font-semibold text-sm tracking-wider uppercase text-white">Company</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/about" className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">About Studio</Link>
            <Link to="/about#founder" className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">Founder Profile</Link>
            <Link to="/roadmap" className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">Product Roadmap</Link>
            <Link to="/contact" className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">Contact Us</Link>
          </div>
        </div>

        {/* COL 4: LEGAL */}
        <div className="flex flex-col gap-4">
          <h4 className="font-clash font-semibold text-sm tracking-wider uppercase text-white">Legal & Support</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/legal/privacy" className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">Privacy Policy</Link>
            <Link to="/legal/terms" className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">Terms of Service</Link>
            <Link to="/legal/app-permissions" className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">App Permissions</Link>
            <a href={`mailto:${COMPANY.email}`} className="font-kanit font-normal text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all">Support Inbox</a>
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="relative max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left z-10">
        <p className="font-kanit font-normal text-xs text-slate-400">
          {copyrightLine()}
        </p>
        <p className="shimmer-text font-kanit font-semibold text-xs uppercase tracking-wider">
          Built in {LOCATION.region}, {LOCATION.country}
        </p>
        <a
          href={`mailto:${COMPANY.email}`}
          className="font-kanit font-normal text-xs text-slate-400 hover:text-white transition-colors"
        >
          {COMPANY.email}
        </a>
      </div>
    </footer>
  );
}
