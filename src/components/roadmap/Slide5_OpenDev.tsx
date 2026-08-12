import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';

export default function Slide5_OpenDev() {
  const columns = [
    {
      emoji: '📧',
      title: 'Beta Waitlist',
      desc: 'Join early access. Get features before public launch and help us debug core workflows.',
      btnLabel: 'Join Waitlist',
      link: '/contact#waitlist',
    },
    {
      emoji: '💬',
      title: 'Give Feedback',
      desc: 'Tell us what you need. We build based on real user requirements, not investor specs.',
      btnLabel: 'Send Feedback',
      link: '/contact',
    },
    {
      emoji: '📣',
      title: 'Stay Updated',
      desc: 'Follow our progress. Hear first about new releases, features updates, and app pipelines.',
      btnLabel: 'Follow Updates',
      link: '/contact',
    },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 text-center select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              Built <span className="shimmer-text">Transparently</span>
            </h2>
            <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              We build in the open. Follow our progress, give feedback, and help shape the products.
            </p>
          </FadeIn>
        </div>

        {/* 3 ENGAGEMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2 mb-16">
          {columns.map((col, idx) => (
            <FadeIn key={idx} delay={idx * 0.12} y={35} className="w-full">
              <div 
                className="rounded-[28px] p-8 border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center"
              >
                <span className="text-4xl mb-5 select-none leading-none">{col.emoji}</span>
                <h3 className="font-clash font-semibold text-lg sm:text-xl text-[#0A0F1E] mb-3">
                  {col.title}
                </h3>
                <p className="font-kanit font-light text-xs sm:text-sm text-slate-500 leading-relaxed text-center mb-6">
                  {col.desc}
                </p>
                <Link
                  to={col.link}
                  className="rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-5 py-2 font-kanit font-medium text-xs text-white transition-transform hover:scale-[1.03] mt-auto"
                >
                  {col.btnLabel}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* BOTTOM CONTACT BUTTON */}
        <FadeIn delay={0.4} y={15}>
          <Link
            to="/contact"
            className="rounded-full border-2 border-slate-200 bg-white hover:bg-slate-50 px-8 py-3 font-kanit font-semibold text-sm sm:text-base text-slate-700 transition-colors shadow-xs"
          >
            Say Hello →
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
