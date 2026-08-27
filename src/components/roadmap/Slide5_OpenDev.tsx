import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Megaphone, type LucideIcon } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

interface ColumnItem {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  desc: string;
  btnLabel: string;
  link: string;
}

export default function Slide5_OpenDev() {
  const columns: ColumnItem[] = [
    {
      icon: Mail,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      title: 'Beta Waitlist',
      desc: 'Join early access. Get features before public launch and help us debug core workflows.',
      btnLabel: 'Join Waitlist',
      link: '/contact#waitlist',
    },
    {
      icon: MessageSquare,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      title: 'Give Feedback',
      desc: 'Tell us what you need. We build based on real user requirements, not investor specs.',
      btnLabel: 'Send Feedback',
      link: '/contact',
    },
    {
      icon: Megaphone,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-500/10 border-orange-500/20',
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
            <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-600 mt-4 max-w-xl mx-auto leading-relaxed">
              We build in the open. Follow our progress, give feedback, and help shape the products.
            </p>
          </FadeIn>
        </div>

        {/* 3 ENGAGEMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2 mb-16">
          {columns.map((col, idx) => {
            const IconComp = col.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.12} y={35} className="w-full">
                <div 
                  className="rounded-[28px] p-8 border border-black/[0.08] bg-white shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center group"
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 ${col.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                    <IconComp className={`w-7 h-7 ${col.iconColor}`} />
                  </div>
                  <h3 className="font-clash font-semibold text-lg sm:text-xl text-[#0A0F1E] mb-3">
                    {col.title}
                  </h3>
                  <p className="font-kanit font-light text-xs sm:text-sm text-slate-600 leading-relaxed text-center mb-6">
                    {col.desc}
                  </p>
                  <Link
                    to={col.link}
                    className="rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-6 py-2.5 font-kanit font-medium text-xs text-white transition-all hover:scale-[1.04] active:scale-[0.98] mt-auto shadow-xs"
                  >
                    {col.btnLabel}
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM CONTACT BUTTON */}
        <FadeIn delay={0.4} y={15}>
          <Link
            to="/contact"
            className="rounded-full border-2 border-slate-200 bg-white hover:bg-slate-50 px-8 py-3.5 font-kanit font-semibold text-sm sm:text-base text-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs inline-flex items-center min-h-[44px]"
          >
            Say Hello →
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
