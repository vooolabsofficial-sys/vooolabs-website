import React from 'react';
import { ShieldCheck, Zap, Server, GitBranch, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide3_AppRoadmaps() {
  const engineeringStandards = [
    {
      pillar: 'Security Architecture',
      badge: 'Defensive Engineering',
      icon: ShieldCheck,
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-200',
      borderHover: 'hover:border-emerald-300 hover:shadow-lg',
      items: [
        { label: 'Zero-trust authentication & secure session token isolation' },
        { label: 'OWASP Top-10 API payload validation & SQL injection defense' },
        { label: 'Hardware-backed encrypted token vaults & HTTPS enforcement' },
        { label: 'Automated dependency vulnerability audits & rate limiting' },
        { label: 'Role-Based Access Control (RBAC) permission matrices' },
      ],
    },
    {
      pillar: 'Sub-Second Speed',
      badge: 'Performance Standard',
      icon: Zap,
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-50 border-blue-200',
      borderHover: 'hover:border-blue-300 hover:shadow-lg',
      items: [
        { label: 'Pure TypeScript web architecture & sub-millisecond execution' },
        { label: 'Sub-400ms First Contentful Paint benchmarks on real networks' },
        { label: 'Sub-150KB ultra-compressed production JavaScript bundles' },
        { label: 'Global Edge CDN caching with automated HTTP/3 transport' },
        { label: 'Zero bloated third-party plugins or framework baggage' },
      ],
    },
    {
      pillar: 'Cloud & Scalability',
      badge: 'Resilient Infrastructure',
      icon: Server,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-50 border-purple-200',
      borderHover: 'hover:border-purple-300 hover:shadow-lg',
      items: [
        { label: 'PostgreSQL database schemas with Row-Level Security (RLS)' },
        { label: 'Automated daily encrypted snapshot backups & zero-loss recovery' },
        { label: 'Auto-scaling serverless APIs with micro-latency responses' },
        { label: 'Multi-zone edge routing & zero-downtime deployment pipelines' },
        { label: 'Real-time telemetry, error monitoring, and automated alerts' },
      ],
    },
    {
      pillar: 'Full Code Ownership',
      badge: 'Client Autonomy',
      icon: GitBranch,
      iconColor: 'text-amber-700',
      iconBg: 'bg-amber-50 border-amber-200',
      borderHover: 'hover:border-amber-300 hover:shadow-lg',
      items: [
        { label: '100% intellectual property & complete GitHub repository handover' },
        { label: 'Transparent sprint logs, verified commits, and pull requests' },
        { label: 'Zero vendor lock-in or proprietary monthly runtime fees' },
        { label: 'Comprehensive schema & API architecture documentation' },
        { label: 'Fixed milestone proposals with zero unexpected billing' },
      ],
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-purple-600 uppercase tracking-widest block mb-2">
              ENGINEERING GUARANTEE
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Modular Engineering Standards
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              Every client project is built against these four rigorous architectural benchmarks.
            </p>
          </FadeIn>
        </div>

        {/* 4 MODULAR STANDARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringStandards.map((std, idx) => {
            const IconComp = std.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full">
                <div
                  className={`rounded-3xl p-6 sm:p-7 bg-[#FAFAFD] border border-slate-200/80 transition-all duration-300 h-full flex flex-col justify-between hover:-translate-y-1 ${std.borderHover}`}
                >
                  <div>
                    {/* ICON & BADGE */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${std.iconBg}`}>
                        <IconComp size={18} className={std.iconColor} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                        {std.badge}
                      </span>
                    </div>

                    {/* PILLAR TITLE */}
                    <h3 className="font-clash font-semibold text-xl text-slate-900 mb-4">
                      {std.pillar}
                    </h3>

                    {/* CHECKLIST */}
                    <ul className="space-y-2.5 font-sans text-xs text-slate-600">
                      {std.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className={`flex-shrink-0 mt-0.5 ${std.iconColor}`} />
                          <span className="leading-snug">{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Verified Production Standard</span>
                    <span className="text-emerald-600 font-semibold">100%</span>
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
