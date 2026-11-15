import React from 'react';
import { Mail, ExternalLink, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from '../shared/BrandIcons';
import { COMPANY, SOCIALS, FOUNDER } from '../../content/company';

export default function Slide4_Connect() {
  const socialCards = [
    {
      name: 'GitHub',
      handle: '@vooolabs',
      badge: 'Open Repositories',
      desc: 'Explore our open-source boilerplates, architectural patterns, and production utility benchmarks.',
      icon: GithubIcon,
      link: SOCIALS.github,
      accentBorder: 'hover:border-slate-300 hover:shadow-md',
      iconColor: 'text-slate-900',
      iconBg: 'bg-slate-100 border-slate-200',
    },
    {
      name: 'LinkedIn',
      handle: 'VOOO LABS',
      badge: 'Company Milestones',
      desc: 'Follow our official engineering announcements, corporate case studies, and studio updates.',
      icon: LinkedinIcon,
      link: SOCIALS.linkedin,
      accentBorder: 'hover:border-blue-300 hover:shadow-md',
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-50 border-blue-200',
    },
    {
      name: 'Twitter / X',
      handle: '@vooolabs',
      badge: 'Engineering Feed',
      desc: 'Follow real-time development dispatches, benchmark results, and build-in-public insights.',
      icon: TwitterIcon,
      link: SOCIALS.twitter,
      accentBorder: 'hover:border-slate-300 hover:shadow-md',
      iconColor: 'text-slate-900',
      iconBg: 'bg-slate-100 border-slate-200',
    },
    {
      name: 'Instagram',
      handle: '@vrushyxx',
      badge: 'Studio & Founder',
      desc: 'Behind-the-scenes interface design explorations, typography showcases, and studio life.',
      icon: InstagramIcon,
      link: FOUNDER.instagram,
      accentBorder: 'hover:border-purple-300 hover:shadow-md',
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              PUBLIC CHANNELS & PROFILES
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Connect Across <span className="shimmer-text font-bold">Platforms</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              Follow our engineering dispatches, open source repositories, and release logs.
            </p>
          </FadeIn>
        </div>

        {/* 4 TECHNICAL DIRECTORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {socialCards.map((soc, idx) => {
            const IconComp = soc.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <a 
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 shadow-sm transition-all duration-300 h-full flex flex-col justify-between text-left group hover:-translate-y-1 ${soc.accentBorder}`}
                >
                  <div>
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${soc.iconBg} ${soc.iconColor} group-hover:scale-105 transition-transform duration-200`}>
                        <IconComp size={20} />
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-slate-600 uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                        {soc.badge}
                      </span>
                    </div>

                    <h3 className="font-clash font-semibold text-xl text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {soc.name}
                    </h3>
                    <p className="font-mono text-xs text-slate-500 mb-3">
                      {soc.handle}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {soc.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-sans font-medium text-xs text-slate-500 group-hover:text-blue-600 transition-colors">
                    <span>View Public Profile</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
