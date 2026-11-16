import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from '../shared/BrandIcons';
import { SOCIALS, FOUNDER } from '../../content/company';

export default function Slide4_Connect() {
  const socialCards = [
    {
      name: 'GitHub',
      handle: '@vooolabs',
      badge: 'Open Repositories',
      desc: 'Explore our open-source boilerplates, architectural patterns, and production utilities.',
      icon: GithubIcon,
      link: SOCIALS.github,
    },
    {
      name: 'LinkedIn',
      handle: 'VOOO LABS',
      badge: 'Company Updates',
      desc: 'Follow official studio announcements, engineering insights, and client deliverables.',
      icon: LinkedinIcon,
      link: SOCIALS.linkedin,
    },
    {
      name: 'Twitter / X',
      handle: '@vooolabs',
      badge: 'Engineering Feed',
      desc: 'Follow real-time development dispatches, web performance tests, and technical notes.',
      icon: TwitterIcon,
      link: SOCIALS.twitter,
    },
    {
      name: 'Instagram',
      handle: '@vrushyxx',
      badge: 'Studio & Founder',
      desc: 'Behind-the-scenes interface design explorations, typography showcases, and studio craft.',
      icon: InstagramIcon,
      link: FOUNDER.instagram,
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 lg:py-28 px-6 sm:px-8 select-none antialiased border-b border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        
        {/* SECTION HEADER */}
        <div className="text-left mb-14 max-w-2xl">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
              PUBLIC CHANNELS & PROFILES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-3 tracking-tight">
              Connect Across Platforms
            </h2>
            <p className="font-sans text-base text-zinc-600 leading-relaxed font-normal">
              Follow our engineering dispatches, open repositories, and verified release logs.
            </p>
          </FadeIn>
        </div>

        {/* 4 DIRECTORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
          {socialCards.map((soc, idx) => {
            const IconComp = soc.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <a 
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white border border-zinc-200 p-6 sm:p-7 shadow-2xs hover:border-zinc-400 hover:shadow-xs transition-all h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-900 group-hover:scale-105 transition-transform duration-150">
                        <IconComp size={18} />
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-zinc-600 uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200">
                        {soc.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-zinc-950 mb-1">
                      {soc.name}
                    </h3>
                    <p className="font-mono text-xs text-zinc-500 mb-2.5">
                      {soc.handle}
                    </p>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed font-normal">
                      {soc.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-zinc-100 flex items-center justify-between font-sans font-medium text-xs text-zinc-500 group-hover:text-zinc-950 transition-colors">
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
