import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Sparkles, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION } from '../../content/company';

const CAPABILITIES = [
  'Custom Web Applications',
  'Business Management Portals',
  'High-Conversion Websites',
  'Operations Software Systems',
];

function CleanTypewriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = CAPABILITIES[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % CAPABILITIES.length);
        }
      }
    }, isDeleting ? 30 : 65);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="shimmer-text font-semibold">{displayText}</span>
      <span className="typewriter-cursor ml-0.5 bg-blue-600" aria-hidden="true" />
    </span>
  );
}

export default function Slide1_Hero() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to see how custom software and web development can help my business.")}`;

  return (
    <section 
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none border-b border-slate-200/80"
      aria-label="Hero — VOOO LABS Introduction"
    >
      {/* ORIGINAL VIBRANT AMBIENT GLOW BACKDROP */}
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[20%] right-[-160px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-100px] left-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/8 blur-[100px] pointer-events-none z-0" aria-hidden="true" />

      {/* NAVBAR SPACER */}
      <div className="h-[95px] sm:h-[110px]" />

      {/* MAIN EDITORIAL HERO CONTENT */}
      <div className="relative z-10 flex-1 max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto py-10 lg:py-14 text-left">
        <div className="max-w-3xl space-y-6">
          
          {/* EYEBROW BADGE */}
          <FadeIn delay={0.02} y={15}>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 text-blue-700 font-mono text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Web Software & Digital Systems Studio • {LOCATION.hubs.join(' • ').toUpperCase()}</span>
            </div>
          </FadeIn>

          {/* HEADLINE (ORIGINAL RESTORED TAGLINE WITH STRICT 4-TIER H1 SCALE) */}
          <FadeIn delay={0.08} y={20}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-slate-900">
              We engineer custom web software <br className="hidden sm:inline" />
              <span className="shimmer-text">that powers real businesses.</span>
            </h1>
          </FadeIn>

          {/* SUBHEADLINE WITH CLEAN TYPEWRITER */}
          <FadeIn delay={0.16} y={18}>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
              Replacing bloated agency templates and SaaS rent with high-performance <br className="hidden sm:inline" />
              <CleanTypewriter />
            </p>
          </FadeIn>

          {/* VALUE EXPLANATION (MINIMUM 16PX BODY COPY) */}
          <FadeIn delay={0.2} y={16}>
            <p className="text-base leading-relaxed text-slate-600 max-w-2xl">
              What used to cost lakhs is now practical. In the AI era, we build custom websites, client portals, and internal business software for small, mid-sized, and growing companies—complete with domain, 24/7 cloud hosting, and 100% client code ownership.
            </p>
          </FadeIn>

          {/* CTAs (PRESERVING 3D TACTILE HOVER & PRESS BEHAVIOR) */}
          <FadeIn delay={0.26} y={15}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="btn-3d-base btn-3d-primary rounded-full bg-slate-900 hover:bg-blue-600 text-white px-7 py-3.5 font-sans font-semibold text-sm sm:text-base inline-flex items-center gap-2"
              >
                <span>See what your project will cost</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-base btn-3d-secondary rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 px-6 py-3.5 font-sans font-medium text-sm sm:text-base text-slate-700 hover:text-slate-900 inline-flex items-center gap-2"
              >
                <MessageSquare size={16} className="text-emerald-600" />
                <span>See how it can help your business</span>
              </a>
            </div>
          </FadeIn>

          {/* VALUE COMMITMENT ROW (CLEAN TYPOGRAPHIC ROW DIRECTLY ON SURFACE) */}
          <FadeIn delay={0.32} y={12}>
            <div className="pt-3 flex flex-wrap items-center gap-x-8 gap-y-2.5 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" />
                100% Client Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-blue-600" />
                Domain & 24/7 Hosting Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-purple-600" />
                ₹0 Monthly Software Rent
              </span>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* 4 PILLARS QUICK-ACCESS STRIP (OPEN EDITORIAL SURFACE) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 mt-4 mb-4">
        <div className="rounded-2xl bg-slate-50/90 border border-slate-200/80 p-2.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-left">
          
          <Link to="/services#websites" className="p-3 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200/80 hover:shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/60 group-hover:scale-105 transition-transform">
              <Globe size={16} />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 truncate">01 / Business Websites</div>
              <div className="text-xs text-slate-500 truncate">Domain, 24/7 Hosting & Leads</div>
            </div>
          </Link>

          <Link to="/services#web-apps" className="p-3 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200/80 hover:shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/60 group-hover:scale-105 transition-transform">
              <Laptop size={16} />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-purple-600 truncate">02 / Custom Web Apps</div>
              <div className="text-xs text-slate-500 truncate">Portals & Booking Systems</div>
            </div>
          </Link>

          <Link to="/services#custom-software" className="p-3 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200/80 hover:shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60 group-hover:scale-105 transition-transform">
              <Cpu size={16} />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-600 truncate">03 / Business Software</div>
              <div className="text-xs text-slate-500 truncate">GST Invoicing & Operations</div>
            </div>
          </Link>

          <Link to="/seo-ai" className="p-3 rounded-xl hover:bg-white transition-all flex items-center gap-3 group border border-transparent hover:border-slate-200/80 hover:shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60 group-hover:scale-105 transition-transform">
              <Sparkles size={16} />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-amber-600 truncate">04 / AI Search & Growth</div>
              <div className="text-xs text-slate-500 truncate">Google SEO, AEO & Maps</div>
            </div>
          </Link>

        </div>
      </div>

      {/* FOOTER TICKER BANNER (RESTORED FROM GIT) */}
      <div className="relative z-20 px-6 sm:px-8 pb-5 flex justify-between items-end gap-6 w-full max-w-6xl mx-auto border-t border-slate-100 pt-4 text-left">
        <FadeIn delay={0.35} y={10}>
          <div className="font-mono text-xs text-slate-500 uppercase tracking-widest leading-relaxed">
            OBSESSIVE CRAFTSMANSHIP. 100% CODE OWNERSHIP.
          </div>
        </FadeIn>
        <FadeIn delay={0.35} y={10}>
          <div className="font-mono text-xs text-slate-500 text-right">
            BUILD BOLD. SHIP SMART. LIVE DIFFERENT.
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
