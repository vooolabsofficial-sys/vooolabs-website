import React from 'react';
import { Mail } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Slide4_Connect() {
  const socialCards = [
    {
      name: 'GitHub',
      handle: '@vooolabs',
      desc: 'Explore our open source templates, project blueprints, and active beta repositories.',
      icon: <GithubIcon size={36} />,
      link: 'https://github.com/vooolabs',
      hoverStyle: 'hover:border-slate-800 hover:shadow-[0_20px_50px_rgba(36,41,46,0.1)]',
      iconColor: 'text-[#24292e]',
    },
    {
      name: 'LinkedIn',
      handle: 'VOOO LABS',
      desc: 'Follow our official corporate milestones, professional network announcements, and careers.',
      icon: <LinkedinIcon size={36} />,
      link: 'https://linkedin.com/company/vooolabs',
      hoverStyle: 'hover:border-blue-600 hover:shadow-[0_20px_50px_rgba(10,102,194,0.1)]',
      iconColor: 'text-[#0a66c2]',
    },
    {
      name: 'Twitter / X',
      handle: '@vooolabs',
      desc: 'Get rapid releases, developer logs, code snippets, and direct founder building updates.',
      icon: <TwitterIcon size={36} />,
      link: 'https://twitter.com/vooolabs',
      hoverStyle: 'hover:border-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]',
      iconColor: 'text-black',
    },
    {
      name: 'Email Support',
      handle: 'vooolabsofficial@gmail.com',
      desc: 'Drop a message for collaborations, general requests, client consulting, or beta help.',
      icon: <Mail size={36} />,
      link: 'mailto:vooolabsofficial@gmail.com',
      hoverStyle: 'hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)]',
      iconColor: 'text-[#7C3AED]',
    },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              Find Us <span className="shimmer-text">Everywhere</span>
            </h2>
          </FadeIn>
        </div>

        {/* 4 SOCIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
          {socialCards.map((soc, idx) => (
            <FadeIn key={idx} delay={idx * 0.12} y={35} className="w-full">
              <a 
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-[28px] bg-white border border-black/5 p-8 sm:p-10 transition-all duration-300 h-full flex flex-col items-start text-left cursor-pointer ${soc.hoverStyle}`}
              >
                
                {/* ICON */}
                <div className={`mb-6 ${soc.iconColor} select-none`}>
                  {soc.icon}
                </div>

                {/* NAME & HANDLE */}
                <h3 className="font-clash font-semibold text-xl sm:text-2xl text-[#0A0F1E] mb-1">
                  {soc.name}
                </h3>
                <span className="font-kanit font-medium text-xs sm:text-sm text-slate-400 mb-4 block">
                  {soc.handle}
                </span>

                {/* DESCRIPTION */}
                <p className="font-kanit font-light text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {soc.desc}
                </p>

              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
