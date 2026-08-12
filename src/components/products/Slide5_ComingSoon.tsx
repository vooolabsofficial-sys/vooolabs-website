import React, { useState } from 'react';
import { Sparkles, Check, Send, ShieldCheck, Zap, Layers } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide5_ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const previewFeatures = [
    { icon: <Zap size={14} className="text-amber-400" />, title: 'Smart Sync Across Devices' },
    { icon: <ShieldCheck size={14} className="text-emerald-400" />, title: 'On-Device Zero Knowledge' },
    { icon: <Layers size={14} className="text-purple-400" />, title: 'AI Automation Pipelines' },
  ];

  return (
    <section className="snap-section bg-[#0A0F1E] noise flex flex-col justify-center items-center px-6 py-24 text-center relative overflow-hidden select-none">
      
      {/* GLOW BLOBS */}
      <div className="absolute top-[15%] left-[20%] w-[350px] h-[350px] rounded-full bg-purple-600/10 blur-[80px] animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[90px] animate-blob-2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* PRE-RELEASE BADGE */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 font-kanit font-medium text-xs text-purple-300 mb-6">
            <Sparkles size={14} className="text-purple-400 animate-pulse" />
            Project #4 — In Active R&D
          </div>
        </FadeIn>

        {/* HEADINGS */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            VOOO <span className="shimmer-text">AI Workspace</span>
          </h2>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Unifying files, voice notes, and smart memory into a seamless, offline-first personal intelligence hub.
          </p>
        </FadeIn>

        {/* FEATURE TEASERS */}
        <FadeIn delay={0.2} y={15} className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            {previewFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-2.5 font-kanit text-xs sm:text-sm text-white/80 flex items-center gap-2.5 shadow-sm"
              >
                {feat.icon}
                <span className="font-medium">{feat.title}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* WAITLIST FORM CONTAINER */}
        <FadeIn delay={0.3} y={20} className="w-full max-w-lg mb-8">
          <div className="rounded-3xl border border-white/10 p-6 sm:p-8 bg-white/[0.03] backdrop-blur-xl shadow-2xl">
            <h3 className="font-clash font-semibold text-lg sm:text-xl text-white mb-2">
              Be the First to Experience It
            </h3>
            <p className="font-kanit font-light text-xs sm:text-sm text-white/50 mb-6">
              Join the private beta waitlist for early invitation drops.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-center justify-center gap-3 text-emerald-300">
                <Check size={20} />
                <span className="font-kanit font-medium text-sm">You are on the VIP waitlist! We'll reach out soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 font-kanit text-sm text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-6 py-3.5 font-kanit font-semibold text-sm text-white hover:scale-[1.02] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  Join Waitlist <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
