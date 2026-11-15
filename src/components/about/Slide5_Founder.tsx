import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MessageSquare, ShieldCheck } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../shared/BrandIcons';
import {
  LOCATION,
  FOUNDER,
} from '../../content/company';

export default function Slide5_Founder() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="founder" className="bg-white py-20 lg:py-28 px-6 sm:px-8 select-none antialiased border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        {/* EDITORIAL HEADER */}
        <div className="mb-14 pb-8 border-b border-zinc-200 text-left">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-medium text-blue-600 uppercase tracking-wider block mb-2">
              STUDIO LEADERSHIP & ACCOUNTABILITY
            </span>
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-zinc-950 tracking-tight leading-snug mb-3">
              A Direct Letter from the Founder
            </h2>
            <p className="font-sans text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
              When you work with VOOO LABS, you work directly with the software engineer who designs, codes, and maintains your systems. No salespeople, no account managers, and no outsourced junior staff.
            </p>
          </FadeIn>
        </div>

        {/* EDITORIAL LETTER SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* LEFT COLUMN: FOUNDER IDENTITY & SPEC (4 COLS) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* PORTRAIT CONTAINER */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 group shadow-2xs">
              {!imageError ? (
                <img
                  src="/founder.jpg"
                  alt={FOUNDER.name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-zinc-50">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 mb-3 shadow-2xs">
                    <span className="font-sans font-bold text-2xl tracking-wider text-zinc-900">
                      {FOUNDER.initials}
                    </span>
                  </div>
                  <span className="font-sans font-semibold text-base text-zinc-950">
                    {FOUNDER.name}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 mt-1">
                    {FOUNDER.role}
                  </span>
                </div>
              )}

              {/* STATUS PILL */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-zinc-200 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[11px] text-zinc-900 font-medium">Available for Projects</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase">{LOCATION.country}</span>
              </div>
            </div>

            {/* IDENTITY SPEC SHEET */}
            <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                <span className="text-zinc-500">Engineer</span>
                <span className="font-semibold text-zinc-900">{FOUNDER.name}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                <span className="text-zinc-500">Role</span>
                <span className="font-semibold text-zinc-900">{FOUNDER.role}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                <span className="text-zinc-500">Hubs</span>
                <span className="font-semibold text-zinc-900">{LOCATION.hubs.join(' · ')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Ownership</span>
                <span className="font-semibold text-emerald-700">100% Client IP</span>
              </div>
            </div>

            {/* SOCIAL PROFILES */}
            <div className="flex items-center gap-2">
              <a
                href={FOUNDER.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-white hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-white hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={FOUNDER.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-white hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={FOUNDER.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-sans font-medium flex items-center gap-1.5 hover:bg-white hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <span>Portfolio</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: EDITORIAL LETTER CONTENT (8 COLS) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* FOUNDER'S DIRECT QUOTE IN EDITORIAL CALLOUT */}
              <blockquote className="p-6 rounded-2xl bg-zinc-50 border-l-2 border-zinc-900 border-y border-r border-zinc-200 text-zinc-900 font-sans text-sm sm:text-base leading-relaxed italic">
                "{FOUNDER.quote}"
              </blockquote>

              {/* EDITORIAL LETTER PROSE */}
              <div className="space-y-4 font-sans text-base text-zinc-700 leading-relaxed font-normal">
                <p>
                  Dear Business Owner,
                </p>
                <p>
                  I started <strong>VOOO LABS</strong> with a very grounded conviction: growing businesses in Maharashtra and across India deserve websites and software engineered with the same rigor, speed, and clean code that global technology firms demand—without paying inflated agency overhead or being trapped in perpetual monthly subscription lock-ins.
                </p>
                <p>
                  Most digital agencies run on a broken model. You speak to a polished salesperson who promises the world, but once you pay an advance, your project gets tossed down to an inexperienced contractor or built on a bloated WordPress theme with 40 unvetted plugins that break after six months. When you need a change, you get billed extra or wait weeks for a reply.
                </p>
                <p>
                  At VOOO LABS, we work entirely differently. We keep our studio intentionally lean and technical. When you hire us for a website, an internal operations system, or AI search discoverability, you work directly with me. Every database model, UI layout, domain configuration, and cloud deployment is engineered to run reliably for years.
                </p>
                <p>
                  Most importantly: <strong>you own everything we build</strong>. 100% of the code, domain records, hosting accounts, and customer databases are handed over to you on completion. We don't hold your business hostage.
                </p>
                <p>
                  If you have an idea, a manual workflow that needs software, or a website that isn't generating real customer calls, let's talk.
                </p>
              </div>

              {/* EDITORIAL SIGNATURE BLOCK */}
              <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif italic text-xl sm:text-2xl text-zinc-950 font-normal">
                    {FOUNDER.name}
                  </div>
                  <div className="font-mono text-xs text-zinc-500 mt-0.5">
                    {FOUNDER.role} • VOOO LABS
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs">
                  <ShieldCheck size={15} className="text-emerald-600" />
                  <span>Pune • Nashik • Satara</span>
                </div>
              </div>

            </div>

            {/* DIRECT ACTION BAR */}
            <div className="mt-10 p-6 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-sans font-bold text-base text-white">
                  Have a specific software or web requirement?
                </h4>
                <p className="font-sans text-xs text-zinc-400 mt-0.5">
                  Send your project requirements directly to the founder. No sales pressure.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-3d-base btn-3d-white rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 font-sans font-semibold text-xs px-5 py-2.5 flex items-center gap-2 flex-shrink-0"
              >
                <MessageSquare size={14} />
                <span>Discuss your project with the founder</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
