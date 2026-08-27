import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Sparkles, Sliders, Eye, ArrowRight, ShieldCheck, Zap, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FontOption {
  id: number;
  name: string;
  fontClass: string;
  category: string;
  source: 'User List' | 'Modern Tech Recommendation';
  description: string;
  rating: string;
}

const FONTS_LIST: FontOption[] = [
  // User's Requested Fonts
  {
    id: 1,
    name: 'Zian',
    fontClass: 'font-zian',
    category: 'Minimalist Luxury Tech',
    source: 'User List',
    description: 'Clean, futuristic, balanced proportions. Premium Apple & SaaS studio feel.',
    rating: '9.2 / 10'
  },
  {
    id: 2,
    name: 'Agile',
    fontClass: 'font-agile',
    category: 'Clean Geometric Tech',
    source: 'User List',
    description: 'Crisp software engineering aesthetic. Very readable and modern.',
    rating: '8.7 / 10'
  },
  {
    id: 3,
    name: 'Avixariav',
    fontClass: 'font-avixariav',
    category: 'Sci-Fi Display',
    source: 'User List',
    description: 'Unique experimental curves, high-tech display font.',
    rating: '7.8 / 10'
  },
  {
    id: 4,
    name: 'TF Silence',
    fontClass: 'font-tfsilence',
    category: 'Tech Stencil / Cutout',
    source: 'User List',
    description: 'Geometric cuts with distinct industrial software styling.',
    rating: '7.6 / 10'
  },
  {
    id: 5,
    name: 'Midstar',
    fontClass: 'font-midstar',
    category: 'Modern Y2K Display',
    source: 'User List',
    description: 'Creative digital product vibe, punchy shapes.',
    rating: '8.2 / 10'
  },
  {
    id: 6,
    name: 'Taggos',
    fontClass: 'font-taggos',
    category: 'Urban Display',
    source: 'User List',
    description: 'Bold street techno characters with strong geometry.',
    rating: '7.2 / 10'
  },
  {
    id: 7,
    name: 'Roma',
    fontClass: 'font-roma',
    category: 'Bold Display',
    source: 'User List',
    description: 'Heavy bold retro stance.',
    rating: '6.5 / 10'
  },
  {
    id: 8,
    name: 'Crazy Blocks',
    fontClass: 'font-crazyblocks',
    category: 'Blocky / Pixel Art',
    source: 'User List',
    description: 'Playful heavy blocks.',
    rating: '5.5 / 10'
  },
  {
    id: 9,
    name: 'Zentaro',
    fontClass: 'font-zentaro',
    category: 'Cyberpunk Display',
    source: 'User List',
    description: 'Angular sci-fi cuts.',
    rating: '9.0 / 10'
  },

  // Premium Tech Studio Recommendations
  {
    id: 10,
    name: 'Clash Display',
    fontClass: 'font-clash',
    category: 'Modern Studio Neo-Grotesk',
    source: 'Modern Tech Recommendation',
    description: 'The industry-standard bold font used by world-class software studios & fintech.',
    rating: '9.8 / 10'
  },
  {
    id: 11,
    name: 'Cabinet Grotesk',
    fontClass: 'font-cabinet',
    category: 'Heavy Tech Geometric',
    source: 'Modern Tech Recommendation',
    description: 'Extremely tight kerning, ultra-modern bold tech stance like Vercel and Linear.',
    rating: '9.6 / 10'
  },
  {
    id: 12,
    name: 'Unbounded',
    fontClass: 'font-unbounded',
    category: 'Extended Futuristic Sans',
    source: 'Modern Tech Recommendation',
    description: 'Wide, bold, modern stance giving massive presence and tech authority.',
    rating: '9.5 / 10'
  },
  {
    id: 13,
    name: 'Orbitron',
    fontClass: 'font-orbitron',
    category: 'Sci-Fi Geometric',
    source: 'Modern Tech Recommendation',
    description: 'Clean aerospace & digital architecture geometry.',
    rating: '9.1 / 10'
  },
  {
    id: 14,
    name: 'Space Grotesk',
    fontClass: 'font-space',
    category: 'Engineering Mono-Influenced',
    source: 'Modern Tech Recommendation',
    description: 'Technical, sharp, and confident software engineering personality.',
    rating: '9.0 / 10'
  },
  {
    id: 15,
    name: 'Syne',
    fontClass: 'font-syne',
    category: 'Artistic High-Tech',
    source: 'Modern Tech Recommendation',
    description: 'Distinctive wide curves, creative tech studio elegance.',
    rating: '8.9 / 10'
  },
  {
    id: 16,
    name: 'Michroma',
    fontClass: 'font-michroma',
    category: 'Wide Cybernetic Display',
    source: 'Modern Tech Recommendation',
    description: 'Square geometry with smooth rounded corners.',
    rating: '8.8 / 10'
  },
  {
    id: 17,
    name: 'Oxanium',
    fontClass: 'font-oxanium',
    category: 'Hexagonal Futuristic',
    source: 'Modern Tech Recommendation',
    description: 'Subtle technical chamfered corners, perfect for AI & developer tools.',
    rating: '8.7 / 10'
  },
  {
    id: 18,
    name: 'Outfit',
    fontClass: 'font-outfit',
    category: 'Clean Product Sans',
    source: 'Modern Tech Recommendation',
    description: 'Balanced, modern, hyper-clean consumer tech appearance.',
    rating: '8.9 / 10'
  },
];

export default function LogoShowcasePage() {
  const [customText, setCustomText] = useState('VOOO LABS');
  const [textSize, setTextSize] = useState<number>(36);
  const [activeTab, setActiveTab] = useState<'all' | 'user' | 'recommended'>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredFonts = FONTS_LIST.filter((font) => {
    if (activeTab === 'user') return font.source === 'User List';
    if (activeTab === 'recommended') return font.source === 'Modern Tech Recommendation';
    return true;
  });

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#0A0F1E] pt-28 pb-36 px-4 sm:px-8 select-none">
      
      {/* HEADER HERO */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 mb-4 text-blue-600 font-sans font-semibold text-xs tracking-wider uppercase">
          <Sparkles size={14} />
          <span>Brand Logo Font Showcase & Comparison</span>
        </div>
        
        <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0F1E] mb-4">
          Choose Your Favorite <span className="g-text">VOOO LABS</span> Font
        </h1>
        
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          खालील प्रत्येक नंबरवर "VOOO LABS" वेगवेळ्या फॉन्टमध्ये लाईव्ह दिसत आहे. तुम्हाला जो नंबर आवडेल तो सांगा, आपण तोच फायनल करू!
        </p>
      </div>

      {/* INTERACTIVE CONTROLS BAR */}
      <div className="max-w-5xl mx-auto mb-12 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 sticky top-20 z-40 backdrop-blur-xl bg-white/95">
        
        {/* CUSTOM TEXT INPUT */}
        <div className="w-full md:w-1/2 flex items-center gap-3">
          <span className="font-sans font-semibold text-xs text-slate-500 uppercase tracking-wider whitespace-nowrap">
            Preview Text:
          </span>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Type logo text..."
            className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2.5 font-sans font-medium text-sm text-[#0A0F1E] focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
          />
        </div>

        {/* FONT SIZE SLIDER */}
        <div className="w-full md:w-1/4 flex items-center gap-3">
          <span className="font-sans font-semibold text-xs text-slate-500 uppercase tracking-wider whitespace-nowrap">
            Size: {textSize}px
          </span>
          <input
            type="range"
            min="22"
            max="56"
            value={textSize}
            onChange={(e) => setTextSize(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        {/* FILTER TABS */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-xl font-sans font-semibold text-xs transition-all ${
              activeTab === 'all' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({FONTS_LIST.length})
          </button>
          <button
            onClick={() => setActiveTab('user')}
            className={`px-3 py-1.5 rounded-xl font-sans font-semibold text-xs transition-all ${
              activeTab === 'user' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Your List (9)
          </button>
          <button
            onClick={() => setActiveTab('recommended')}
            className={`px-3 py-1.5 rounded-xl font-sans font-semibold text-xs transition-all ${
              activeTab === 'recommended' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Studio Picks (9)
          </button>
        </div>

      </div>

      {/* FONT SHOWCASE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredFonts.map((font) => (
          <div
            key={font.id}
            id={`font-${font.id}`}
            className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
          >
            {/* CARD TOP BAR */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-[#0A0F1E] text-white flex items-center justify-center font-clash font-bold text-sm shadow-sm">
                    #{font.id}
                  </span>
                  <div>
                    <h3 className="font-clash font-bold text-lg text-[#0A0F1E]">
                      {font.name}
                    </h3>
                    <span className="font-sans text-[11px] text-slate-500 font-medium">
                      {font.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-sans font-semibold text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    ⭐ {font.rating}
                  </span>
                </div>
              </div>

              {/* LIVE LIGHT LOGO PREVIEW (GRADIENT SHIMMER) */}
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col items-center justify-center text-center my-3 min-h-[110px]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex items-baseline">
                    <span 
                      className={`shimmer-text ${font.fontClass} font-bold leading-none tracking-wide`}
                      style={{ fontSize: `${textSize}px` }}
                    >
                      {customText.split(' ')[0] || 'VOOO'}
                    </span>
                    {customText.split(' ').slice(1).length > 0 && (
                      <span 
                        className={`${font.fontClass} font-semibold text-slate-700 ml-2 leading-none tracking-wider`}
                        style={{ fontSize: `${Math.max(20, textSize * 0.85)}px` }}
                      >
                        {customText.split(' ').slice(1).join(' ')}
                      </span>
                    )}
                  </div>
                </div>
                <span className="font-sans text-[10px] text-slate-600 uppercase tracking-widest">
                  Light Theme + Brand Gradient
                </span>
              </div>

              {/* LIVE DARK LOGO PREVIEW (OLED BLACK) */}
              <div className="bg-[#0A0F1E] rounded-2xl p-5 border border-black/40 flex flex-col items-center justify-center text-center my-3 min-h-[110px] shadow-inner">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 4L10 16L16 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex items-baseline">
                    <span 
                      className={`shimmer-text ${font.fontClass} font-bold leading-none tracking-wide`}
                      style={{ fontSize: `${textSize}px` }}
                    >
                      {customText.split(' ')[0] || 'VOOO'}
                    </span>
                    {customText.split(' ').slice(1).length > 0 && (
                      <span 
                        className={`${font.fontClass} font-semibold text-white ml-2 leading-none tracking-wider`}
                        style={{ fontSize: `${Math.max(20, textSize * 0.85)}px` }}
                      >
                        {customText.split(' ').slice(1).join(' ')}
                      </span>
                    )}
                  </div>
                </div>
                <span className="font-sans text-[10px] text-slate-300 uppercase tracking-widest">
                  Dark Theme
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="font-sans text-xs text-slate-500 mt-3 leading-relaxed">
                {font.description}
              </p>
            </div>

            {/* CARD BOTTOM ACTION */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="font-sans font-semibold text-xs text-slate-600">
                Number: <strong className="text-blue-600 font-clash text-base">#{font.id}</strong>
              </span>

              <button
                onClick={() => handleCopy(font.id, `Option #${font.id} - ${font.name}`)}
                className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 font-sans font-semibold text-xs transition-colors inline-flex items-center gap-1.5"
              >
                {copiedId === font.id ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy #{font.id} ({font.name})</span>
                  </>
                )}
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM ACTION BANNER */}
      <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
        <h2 className="font-clash text-2xl sm:text-3xl font-bold mb-2">
          कोणता Number आवडला?
        </h2>
        <p className="font-sans text-sm sm:text-base text-white/90 max-w-xl mx-auto mb-6">
          तुम्हाला जो नंबर (उदा. <strong>#1 Zian</strong>, <strong>#10 Clash Display</strong>, किंवा <strong>#11 Cabinet Grotesk</strong>) सर्वात भारी वाटत असेल, त्याचा नंबर चॅटमध्ये सांगा. आपण लगेच संपूर्ण वेबसाईटवर तोच लागू करू!
        </p>
        <Link
          to="/"
          className="rounded-full bg-white text-slate-900 px-8 py-3.5 font-sans font-bold text-sm hover:scale-105 transition-all shadow-md inline-flex items-center gap-2"
        >
          <span>Back to Home</span>
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
