import React from 'react';
import FadeIn from '../shared/FadeIn';
import { 
  Code2, 
  Palette, 
  Layout, 
  Atom, 
  FileCode2, 
  Flame, 
  Cog, 
  Database, 
  Tv, 
  Wind, 
  Zap, 
  Film, 
  Server, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Smartphone,
  Bot,
  Lock,
  Users,
  Clock,
  MapPin,
  FolderLock,
  Briefcase,
  Trash2,
  PhoneCall,
  Rocket
} from 'lucide-react';

export default function Slide2_Marquee() {
  const row1Techs = [
    { name: 'Kotlin', icon: Smartphone },
    { name: 'Jetpack Compose', icon: Palette },
    { name: 'Material Design 3', icon: Layout },
    { name: 'React 19', icon: Atom },
    { name: 'TypeScript', icon: FileCode2 },
    { name: 'Supabase', icon: Flame },
    { name: 'Hilt DI', icon: Cog },
    { name: 'Room DB', icon: Database },
    { name: 'ExoPlayer', icon: Tv },
    { name: 'Tailwind CSS', icon: Wind },
    { name: 'Vite', icon: Zap },
    { name: 'Framer Motion', icon: Film },
    { name: 'Cloudflare R2', icon: Server },
    { name: 'Gemini Flash', icon: Sparkles },
    { name: 'Biometric API', icon: ShieldCheck },
    { name: 'REST API', icon: Code2 },
    { name: 'Play Store', icon: Smartphone },
    { name: 'Web App', icon: Globe },
  ];

  const row2Features = [
    { name: 'AI-Powered System', icon: Bot },
    { name: 'Privacy First Architecture', icon: Lock },
    { name: 'Built in India', icon: Globe },
    { name: 'Family Group Sync', icon: Users },
    { name: 'Exact Alarm Engine', icon: Clock },
    { name: 'Location Reminders', icon: MapPin },
    { name: 'Biometric Vault', icon: FolderLock },
    { name: 'Smart Storage Manager', icon: Database },
    { name: 'CRM for SMBs', icon: Briefcase },
    { name: 'Gemini Intelligence', icon: Sparkles },
    { name: 'Auto-Purge Vault', icon: Trash2 },
    { name: 'Multi-Generation Modes', icon: Layout },
    { name: 'Lead Pipeline Tracker', icon: Briefcase },
    { name: 'Smart Call Logger', icon: PhoneCall },
    { name: 'Affordable Tiering', icon: Zap },
    { name: 'Beta Access', icon: Rocket },
  ];

  // Triple items for continuous smooth looping
  const row1Items = [...row1Techs, ...row1Techs, ...row1Techs];
  const row2Items = [...row2Features, ...row2Features, ...row2Features];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center py-20 overflow-hidden relative select-none">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-16 px-6">
        <FadeIn delay={0} y={20}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
            What We <span className="g-text">Build With</span>
          </h2>
        </FadeIn>
      </div>

      {/* MARQUEE CAROUSELS WITH GRADIENT MASK */}
      <div 
        className="w-full flex flex-col gap-6"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)'
        }}
      >
        
        {/* ROW 1: TECH STACK (SCROLL LEFT) */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap py-2">
          <div className="animate-marquee-left flex gap-3 sm:gap-4 pl-4">
            {row1Items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`r1-${idx}`}
                  className="h-[48px] sm:h-[52px] rounded-full bg-white border border-black/[0.06] px-5 sm:px-6 inline-flex items-center gap-2.5 shadow-sm font-kanit font-medium text-xs sm:text-sm text-slate-800 flex-shrink-0 hover:border-blue-500/30 transition-colors"
                >
                  <IconComp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROW 2: FEATURES (SCROLL RIGHT) */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap py-2">
          <div className="animate-marquee-right flex gap-3 sm:gap-4 pl-4">
            {row2Items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`r2-${idx}`}
                  className="h-[48px] sm:h-[52px] rounded-full bg-white border border-black/[0.06] px-5 sm:px-6 inline-flex items-center gap-2.5 shadow-sm font-kanit font-medium text-xs sm:text-sm text-slate-800 flex-shrink-0 hover:border-purple-500/30 transition-colors"
                >
                  <IconComp className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
