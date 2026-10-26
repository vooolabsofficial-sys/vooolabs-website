import React, { useState, useEffect } from 'react';
import { Bot, Compass, Sparkles, MapPin, Zap, ShieldCheck, Globe } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero-shift', label: '3D Paradigm', shortLabel: 'Overview', icon: Globe, color: 'text-purple-600' },
  { id: 'chatgpt-live', label: 'ChatGPT 4o (GEO)', shortLabel: 'ChatGPT', icon: Bot, color: 'text-purple-600' },
  { id: 'perplexity-live', label: 'Perplexity Pro (AEO)', shortLabel: 'Perplexity', icon: Compass, color: 'text-teal-600' },
  { id: 'google-ai-live', label: 'Google AI (SGE)', shortLabel: 'Google AI', icon: Sparkles, color: 'text-blue-600' },
  { id: 'google-maps-live', label: 'Google Maps 3-Pack', shortLabel: 'Maps', icon: MapPin, color: 'text-emerald-600' },
  { id: 'technical-live', label: 'Bot Speed & Schema', shortLabel: 'Speed', icon: Zap, color: 'text-purple-600' },
  { id: 'audit-kickoff', label: 'Free AI Audit', shortLabel: 'Audit', icon: ShieldCheck, color: 'text-purple-700' },
];

export default function SeoAiNav() {
  const [activeSection, setActiveSection] = useState<string>('hero-shift');
  const [isScrolledPastHero, setIsScrolledPastHero] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setIsScrolledPastHero(window.scrollY > 80);

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div 
      className={`sticky top-20 sm:top-22 z-40 w-full flex justify-center px-3 sm:px-4 py-2 transition-all duration-300 pointer-events-none select-none ${
        isScrolledPastHero ? 'opacity-100 translate-y-0' : 'opacity-90'
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md shadow-slate-200/40 max-w-4xl overflow-x-auto no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const IconComp = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
              }`}
              aria-label={`Jump to ${item.label}`}
            >
              <IconComp size={13} className={isActive ? 'text-white' : item.color} />
              <span className="hidden sm:inline">{item.label}</span>
              <span className="inline sm:hidden">{item.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
