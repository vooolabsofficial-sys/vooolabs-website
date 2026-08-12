import React from 'react';
import { Link } from 'react-router-dom';
import { Folder, Brain, Phone, ArrowRight, ShieldCheck, Lock, Sparkles, Database, Clock, Briefcase, Zap } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide2_ProductBento() {
  const products = [
    {
      id: 'files',
      icon: Folder,
      iconBg: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      badge: 'Android · Active Alpha',
      badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200',
      name: 'VOOO Files',
      tagline: 'Complete storage ecosystem & media manager.',
      description: 'Smart file storage with built-in Gallery, Music Player, Document Viewer, Biometric Vault, and Zip archive manager.',
      features: ['Smart Storage Intelligence', 'AES-256 Biometric Vault', 'Material Design 3 Engine'],
      link: '/products#vooo-files',
      linkText: 'Explore VOOO Files',
      linkColor: 'text-blue-600 hover:text-blue-700 border-blue-500/20',
    },
    {
      id: 'smaran',
      icon: Brain,
      iconBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      badge: 'Android & Web · In Planning',
      badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200',
      name: 'SMARAN AI',
      tagline: 'Your AI memory companion.',
      description: '100% guaranteed alarms even on silent mode, 5-minute auto-purge privacy, and Family Circle sync.',
      features: ['Silent Mode Override', '5-Min Auto-Purge Protocol', '3 Gen Modes (Student, Pro, Elder)'],
      link: '/products#smaran-ai',
      linkText: 'Explore SMARAN AI',
      linkColor: 'text-purple-600 hover:text-purple-700 border-purple-500/20',
    },
    {
      id: 'callmind',
      icon: Phone,
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      badge: 'Android · Public Beta',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      name: 'CallMind CRM',
      tagline: 'Simplifying CRM for solo sales & SMBs.',
      description: 'Automatic call tracking, 5-stage sales lead pipeline, WhatsApp direct follow-ups, and AI caller insight cards.',
      features: ['Automatic Call Tracking', '5-Stage Sales Pipeline', '₹499/mo SMB Pricing'],
      link: '/products#callmind',
      linkText: 'Explore CallMind CRM',
      linkColor: 'text-emerald-600 hover:text-emerald-700 border-emerald-500/20',
    },
  ];

  return (
    <section className="snap-section bg-white flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase mb-4 text-center">
            Product Portfolio
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={25}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            The <span className="shimmer-text">VOOO Suite.</span>
          </h2>
          <p className="font-kanit font-light text-base sm:text-lg text-slate-500 text-center max-w-lg mx-auto mb-16">
            Privacy-first Android & Web tools designed with clean architecture.
          </p>
        </FadeIn>

        {/* PRODUCT CARDS (3 CLEAN COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {products.map((prod, idx) => {
            const IconComp = prod.icon;
            return (
              <FadeIn key={prod.id} delay={idx * 0.12} y={30} className="w-full">
                <div className="rounded-3xl bg-white border border-black/10 p-8 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-black/20 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group">
                  
                  <div>
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${prod.iconBg} group-hover:scale-105 transition-transform`}>
                        <IconComp size={24} />
                      </div>
                      <span className={`font-kanit text-[10px] font-medium border px-3 py-1 rounded-full ${prod.badgeStyle}`}>
                        {prod.badge}
                      </span>
                    </div>

                    {/* NAME & TAGLINE */}
                    <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-1">{prod.name}</h3>
                    <p className="font-kanit font-medium text-xs text-slate-500 mb-4">{prod.tagline}</p>
                    <p className="font-kanit font-light text-sm text-slate-600 leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    {/* FEATURES BULLETS */}
                    <div className="flex flex-col gap-2.5 mb-8 border-t border-slate-100 pt-5">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 font-kanit text-xs text-slate-700 font-medium">
                          <Zap size={12} className="text-blue-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LINK CTA */}
                  <Link
                    to={prod.link}
                    className={`inline-flex items-center gap-1.5 font-kanit font-medium text-xs py-2 border-t ${prod.linkColor}`}
                  >
                    <span>{prod.linkText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
