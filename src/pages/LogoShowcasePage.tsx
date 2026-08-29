import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FontOption {
  id: number;
  name: string;
  fontFamily: string; // direct CSS font-family value
  category: string;
  source: 'custom' | 'google' | 'fontshare';
  description: string;
}

const FONTS_LIST: FontOption[] = [
  // ─── User's Custom Downloaded Fonts ───
  {
    id: 1,
    name: 'Zentaro',
    fontFamily: 'Zentaro, sans-serif',
    category: 'Cyberpunk Angular',
    source: 'custom',
    description: 'Sharp angular sci-fi cuts with cyberpunk energy.',
  },
  {
    id: 2,
    name: 'Zian',
    fontFamily: 'Zian, sans-serif',
    category: 'Minimalist Luxury',
    source: 'custom',
    description: 'Wide minimalist futuristic letterforms.',
  },
  {
    id: 3,
    name: 'Agile',
    fontFamily: 'Agile, sans-serif',
    category: 'Clean Geometric',
    source: 'custom',
    description: 'Crisp geometric sans with software studio feel.',
  },
  {
    id: 4,
    name: 'Avixariav',
    fontFamily: 'Avixariav, sans-serif',
    category: 'Sci-Fi Experimental',
    source: 'custom',
    description: 'Unique experimental curves, high-tech display font.',
  },
  {
    id: 5,
    name: 'Crazy Blocks',
    fontFamily: 'CrazyBlocks, sans-serif',
    category: 'Blocky / Pixel Art',
    source: 'custom',
    description: 'Heavy pixelated block letters with playful energy.',
  },
  {
    id: 6,
    name: 'Midstar',
    fontFamily: 'Midstar, sans-serif',
    category: 'Modern Y2K Display',
    source: 'custom',
    description: 'Creative digital product vibe with punchy shapes.',
  },
  {
    id: 7,
    name: 'Roma',
    fontFamily: 'Roma, sans-serif',
    category: 'Bold Retro Display',
    source: 'custom',
    description: 'Heavy bold retro stance with strong character.',
  },
  {
    id: 8,
    name: 'Taggos',
    fontFamily: 'Taggos, sans-serif',
    category: 'Urban Bold Display',
    source: 'custom',
    description: 'Bold street tech characters with strong geometry.',
  },
  {
    id: 9,
    name: 'TF Silence',
    fontFamily: 'TFSilence, sans-serif',
    category: 'Tech Stencil / Cutout',
    source: 'custom',
    description: 'Geometric cuts with industrial software styling.',
  },

  // ─── Google Fonts ───
  {
    id: 10,
    name: 'Orbitron',
    fontFamily: 'Orbitron, sans-serif',
    category: 'Sci-Fi Geometric',
    source: 'google',
    description: 'Clean aerospace & digital architecture geometry.',
  },
  {
    id: 11,
    name: 'Syne',
    fontFamily: 'Syne, sans-serif',
    category: 'Artistic High-Tech',
    source: 'google',
    description: 'Distinctive wide curves, creative tech studio elegance.',
  },
  {
    id: 12,
    name: 'Space Grotesk',
    fontFamily: '"Space Grotesk", sans-serif',
    category: 'Engineering Mono-Influenced',
    source: 'google',
    description: 'Technical, sharp, confident software engineering personality.',
  },
  {
    id: 13,
    name: 'Unbounded',
    fontFamily: 'Unbounded, sans-serif',
    category: 'Extended Futuristic Sans',
    source: 'google',
    description: 'Wide, bold, massive presence and tech authority.',
  },
  {
    id: 14,
    name: 'Michroma',
    fontFamily: 'Michroma, sans-serif',
    category: 'Wide Cybernetic Display',
    source: 'google',
    description: 'Square geometry with smooth rounded corners.',
  },
  {
    id: 15,
    name: 'Oxanium',
    fontFamily: 'Oxanium, sans-serif',
    category: 'Hexagonal Futuristic',
    source: 'google',
    description: 'Subtle chamfered corners, perfect for AI & dev tools.',
  },
  {
    id: 16,
    name: 'Outfit',
    fontFamily: 'Outfit, sans-serif',
    category: 'Clean Product Sans',
    source: 'google',
    description: 'Balanced, hyper-clean consumer tech appearance.',
  },

  // ─── Fontshare Fonts ───
  {
    id: 17,
    name: 'Clash Display',
    fontFamily: '"Clash Display", sans-serif',
    category: 'Modern Studio Neo-Grotesk',
    source: 'fontshare',
    description: 'Industry-standard bold font used by world-class software studios.',
  },
  {
    id: 18,
    name: 'Cabinet Grotesk',
    fontFamily: '"Cabinet Grotesk", sans-serif',
    category: 'Heavy Tech Geometric',
    source: 'fontshare',
    description: 'Ultra-modern tight kerning, Vercel & Linear style.',
  },
];

// Source badge colors
function sourceBadge(source: FontOption['source']) {
  switch (source) {
    case 'custom':
      return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', label: '📁 Downloaded Font' };
    case 'google':
      return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', label: '🔤 Google Fonts' };
    case 'fontshare':
      return { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', label: '✨ Fontshare' };
  }
}

export default function LogoShowcasePage() {
  const [customText, setCustomText] = useState('VOOO LABS');
  const [textSize, setTextSize] = useState<number>(42);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'custom' | 'google' | 'fontshare'>('all');

  const filteredFonts = FONTS_LIST.filter((f) => {
    if (filter === 'all') return true;
    return f.source === filter;
  });

  const handleCopy = (id: number, name: string) => {
    navigator.clipboard.writeText(`#${id} - ${name}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#0A0F1E] pt-28 pb-36 px-4 sm:px-6 lg:px-8 select-none">

      {/* ── HEADER ── */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 mb-4 text-blue-600 font-semibold text-xs tracking-wider uppercase">
          <Sparkles size={14} />
          <span>Font Showcase — Pick Your Favorite</span>
        </div>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#0A0F1E] mb-3" style={{ fontFamily: '"Clash Display", sans-serif' }}>
          Choose Your <span className="g-text">VOOO LABS</span> Font
        </h1>
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          खाली प्रत्येक नंबरवर <strong>"VOOO LABS"</strong> वेगवेगळ्या फॉन्टमध्ये दिसत आहे.<br/>
          तुम्हाला जो नंबर आवडेल तो सांगा!
        </p>
      </div>

      {/* ── CONTROLS ── */}
      <div className="max-w-5xl mx-auto mb-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-5 sticky top-20 z-40 backdrop-blur-xl bg-white/95">
        {/* Text Input */}
        <div className="flex-1 flex items-center gap-3 w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Text:</span>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm font-medium text-[#0A0F1E] focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
          />
        </div>
        {/* Size Slider */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Size: {textSize}px</span>
          <input
            type="range"
            min="24"
            max="64"
            value={textSize}
            onChange={(e) => setTextSize(Number(e.target.value))}
            className="w-32 accent-blue-600 cursor-pointer"
          />
        </div>
        {/* Filter */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { key: 'all', label: `All (${FONTS_LIST.length})` },
            { key: 'custom', label: 'Downloaded (9)' },
            { key: 'google', label: 'Google (7)' },
            { key: 'fontshare', label: 'Fontshare (2)' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-all ${
                filter === tab.key ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── FONT GRID ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredFonts.map((font, idx) => {
          const badge = sourceBadge(font.source);
          return (
            <motion.div
              key={font.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.35 }}
              className="rounded-2xl bg-white border border-slate-200 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 px-5 pt-5 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-[#0A0F1E] text-white flex items-center justify-center font-bold text-sm shadow-sm" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                    {font.id}
                  </span>
                  <div>
                    <h3 className="font-bold text-base text-[#0A0F1E]" style={{ fontFamily: '"Clash Display", sans-serif' }}>{font.name}</h3>
                    <span className="text-[10px] text-slate-400 font-medium">{font.category}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.bg} ${badge.text} ${badge.border}`}>
                  {badge.label}
                </span>
              </div>

              {/* ─── LIGHT PREVIEW ─── */}
              <div className="mx-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-100 p-5 flex items-center justify-center min-h-[90px]">
                <span
                  className="leading-none tracking-wide text-[#0A0F1E] font-bold text-center break-all"
                  style={{ fontFamily: font.fontFamily, fontSize: `${textSize}px` }}
                >
                  {customText || 'VOOO LABS'}
                </span>
              </div>

              {/* ─── DARK PREVIEW ─── */}
              <div className="mx-4 mt-3 rounded-xl bg-[#0A0F1E] border border-black/30 p-5 flex items-center justify-center min-h-[90px]">
                <span
                  className="leading-none tracking-wide text-white font-bold text-center break-all"
                  style={{ fontFamily: font.fontFamily, fontSize: `${textSize}px` }}
                >
                  {customText || 'VOOO LABS'}
                </span>
              </div>

              {/* Description */}
              <p className="px-5 pt-3 text-xs text-slate-500 leading-relaxed flex-1">{font.description}</p>

              {/* Footer */}
              <div className="px-5 py-4 mt-auto flex items-center justify-between border-t border-slate-100 mt-3">
                <span className="text-xs text-slate-600">
                  नंबर: <strong className="text-blue-600 text-base" style={{ fontFamily: '"Clash Display", sans-serif' }}>#{font.id}</strong>
                </span>
                <button
                  onClick={() => handleCopy(font.id, font.name)}
                  className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-1.5 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  {copiedId === font.id ? (
                    <><Check size={13} className="text-emerald-600" /> Copied!</>
                  ) : (
                    <><Copy size={12} /> #{font.id} Copy</>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="max-w-3xl mx-auto mt-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-2xl p-8 text-white shadow-lg">
        <h2 className="font-bold text-2xl sm:text-3xl mb-2" style={{ fontFamily: '"Clash Display", sans-serif' }}>
          कोणता Number आवडला?
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto mb-5">
          तुम्हाला जो नंबर सर्वात भारी वाटत असेल, तो चॅटमध्ये सांगा — आपण लगेच संपूर्ण वेबसाईटवर लावू!
        </p>
        <Link
          to="/"
          className="rounded-full bg-white text-slate-900 px-7 py-3 font-bold text-sm hover:scale-105 transition-all shadow-md inline-flex items-center gap-2"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
