import React from 'react';
import { Lock, ShieldCheck, Server, Cpu } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_SecurityMatrix() {
  const securityPillars = [
    {
      icon: Lock,
      iconColor: 'text-purple-500',
      title: 'AES-256 Biometric Vault',
      description: 'Encrypted hardware keystores on Android devices. Files and sensitive memos remain unreadable to outside apps.',
      bgColor: 'bg-purple-500/[0.04]',
      borderColor: 'border-purple-500/15',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-500',
      title: 'Auto-Purge Privacy Protocol',
      description: 'Temporary memory states and sensitive notes auto-purge after 5 minutes to guarantee zero data footprints.',
      bgColor: 'bg-emerald-500/[0.04]',
      borderColor: 'border-emerald-500/15',
    },
    {
      icon: Server,
      iconColor: 'text-blue-500',
      title: 'Zero Server Logging Policy',
      description: 'Your data is yours. We do not track, aggregate, or monetize user behaviors. Zero third-party ad networks.',
      bgColor: 'bg-blue-500/[0.04]',
      borderColor: 'border-blue-500/15',
    },
    {
      icon: Cpu,
      iconColor: 'text-orange-500',
      title: 'On-Device AI Engine',
      description: 'Powered by Gemini AI and local task processing to keep machine learning inferencing fast and private.',
      bgColor: 'bg-orange-500/[0.04]',
      borderColor: 'border-orange-500/15',
    },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase mb-4 text-center">
            Security & Trust
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={25}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            Built on <span className="shimmer-text">Uncompromising Security.</span>
          </h2>
          <p className="font-kanit font-light text-base sm:text-lg text-slate-500 text-center max-w-lg mx-auto mb-16">
            Privacy is not an add-on feature. It is our core engineering foundation.
          </p>
        </FadeIn>

        {/* SECURITY PILLARS GRID (4 CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {securityPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} y={30} className="w-full">
                <div 
                  className={`rounded-[28px] ${pillar.bgColor} border ${pillar.borderColor} p-8 flex items-start gap-5 hover:-translate-y-1 transition-all duration-300 h-full group`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 shadow-xs flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-xl text-[#0A0F1E] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
