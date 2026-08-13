import React from 'react';
import { Link } from 'react-router-dom';
import { Folder, ArrowUp, HardDrive, Sparkles, FileText, Music, Image, ShieldCheck, Lock, Zap } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { getProduct, STATUS_META } from '../../content/products';

export default function Slide2_VoooFiles() {
  const product = getProduct('vooo-files')!;
  const status = STATUS_META[product.status];

  const featureIcons = [HardDrive, Lock, Music, ShieldCheck, Sparkles, Zap];
  const featureColors = [
    'text-blue-500',
    'text-purple-500',
    'text-pink-500',
    'text-emerald-500',
    'text-amber-500',
    'text-blue-600',
  ];

  // Illustrative only -- this is a drawing of the app, not data from it.
  const mockupFiles = [
    { type: 'image', name: 'DSC_0982.jpg', size: '4.2 MB', dotColor: 'bg-blue-500' },
    { type: 'music', name: 'Dil Se - AR Rahman.mp3', size: '8.4 MB', dotColor: 'bg-purple-500' },
    { type: 'doc', name: 'B.Tech Syllabus.pdf', size: '1.7 MB', dotColor: 'bg-orange-500' },
    { type: 'image', name: 'app_logo_concept.png', size: '2.1 MB', dotColor: 'bg-blue-500' },
    { type: 'doc', name: 'Rent Agreement.doc', size: '120 KB', dotColor: 'bg-orange-500' },
    { type: 'music', name: 'Stitch Audio.wav', size: '15.4 MB', dotColor: 'bg-purple-500' },
  ];

  return (
    <section 
      id="vooo-files" 
      className="snap-section bg-gradient-to-br from-blue-500/[0.03] via-white to-blue-500/[0.02] flex items-center px-6 sm:px-16 py-20 relative select-none"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: CONTENT */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          
          {/* BACK TO TOP ANCHOR */}
          <FadeIn delay={0} y={15}>
            <a 
              href="#products-top" 
              className="inline-flex items-center gap-1 font-kanit font-medium text-xs text-blue-600 uppercase tracking-wider mb-5 hover:text-blue-700"
            >
              <ArrowUp size={10} /> Back to Products
            </a>
          </FadeIn>

          {/* APP ICON */}
          <FadeIn delay={0.05} y={20}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500 to-[#1a73e8] flex items-center justify-center shadow-[0_12px_32px_rgba(66,133,244,0.3)] mb-6">
              <Folder size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
          </FadeIn>

          {/* BADGES ROW */}
          <FadeIn delay={0.1} y={15}>
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 font-kanit font-medium text-xs text-blue-600">
                {product.platforms}
              </span>
              <span className={`rounded-full border px-3 py-1 font-kanit font-medium text-xs ${status.badge}`}>
                {status.label}
              </span>
            </div>
          </FadeIn>

          {/* APP HEADINGS */}
          <FadeIn delay={0.15} y={25}>
            <h3 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-none mb-2">
              VOOO Files
            </h3>
            <h4 className="font-clash text-lg sm:text-xl md:text-2xl font-semibold g-files mb-6">
              {product.tagline}
            </h4>
          </FadeIn>

          {/* DESCRIPTION */}
          <FadeIn delay={0.25} y={20}>
            <p className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-[500px] mb-8">
              {product.description}
            </p>
          </FadeIn>

          {/* FEATURE CHIPS GRID */}
          <FadeIn delay={0.35} y={15} className="w-full">
            <div className="grid grid-cols-2 gap-3 max-w-[480px] mb-10">
              {product.features.map((feature, idx) => {
                const IconComponent = featureIcons[idx % featureIcons.length];
                return (
                  <div
                    key={feature}
                    className="rounded-xl bg-[#4285F4]/[0.06] border border-[#4285F4]/15 px-4 py-3 font-kanit text-xs sm:text-sm text-slate-800 flex items-center gap-2.5 hover:bg-[#4285F4]/10 transition-colors"
                  >
                    <IconComponent className={`w-4 h-4 ${featureColors[idx % featureColors.length]}`} />
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* CTA ROW */}
          <FadeIn delay={0.45} y={15}>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/contact#waitlist"
                className="rounded-full bg-gradient-to-r from-blue-500 to-[#1a73e8] px-7 py-3 font-kanit font-medium text-sm text-white transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_14px_rgba(66,133,244,0.25)]"
              >
                Notify on Launch
              </Link>
              <Link
                to="/roadmap"
                className="rounded-full border-2 border-[#4285F4] px-7 py-2.5 font-kanit font-medium text-sm g-files hover:bg-blue-500/5 transition-all duration-300"
              >
                See the roadmap
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: CSS PHONE MOCKUP */}
        <div className="order-1 lg:order-2 flex justify-center">
          <FadeIn delay={0.3} x={40}>
            {/* Phone Shell */}
            <div 
              className="w-[260px] aspect-[9/19] rounded-[36px] bg-slate-900 border-[6px] border-slate-800 shadow-[0_20px_60px_rgba(66,133,244,0.2)] flex-shrink-0 flex flex-col justify-between overflow-hidden relative group hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 cursor-default select-none"
            >
              
              {/* TOP BAR / CAMERA NOTCH */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black z-30 flex items-center justify-between px-3.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <div className="w-8 h-1 rounded-full bg-slate-900" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50" />
              </div>

              {/* MOCKUP CONTENT CONTAINER */}
              <div className="flex-1 bg-[#F0F4FF] pt-9 flex flex-col justify-between overflow-hidden relative">
                
                {/* PHONE HEADER */}
                <div className="h-14 bg-gradient-to-r from-blue-500 to-[#1a73e8] px-4 flex items-center justify-between z-10 flex-shrink-0 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-white" />
                    <span className="font-kanit font-medium text-xs text-white">VOOO Files</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/70" />
                    <div className="w-1 h-1 rounded-full bg-white/70" />
                    <div className="w-1 h-1 rounded-full bg-white/70" />
                  </div>
                </div>

                {/* SCROLLABLE PHONE AREA */}
                <div className="flex-1 overflow-y-auto px-2 py-3 flex flex-col gap-2.5 no-scrollbar">
                  
                  {/* STORAGE CARD */}
                  <div className="rounded-xl bg-white p-3 shadow-xs border border-blue-500/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-kanit font-medium text-[10px] text-slate-400">Device Storage</span>
                      <span className="font-kanit font-semibold text-[10px] text-blue-600">68% Used</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-[68%]" />
                    </div>
                  </div>

                  {/* FILES CATEGORY (4 circles) */}
                  <div className="grid grid-cols-4 gap-1.5 px-1 py-1">
                    {[
                      { icon: <Image size={10} className="text-blue-500" />, label: 'Images' },
                      { icon: <Music size={10} className="text-purple-500" />, label: 'Audio' },
                      { icon: <FileText size={10} className="text-orange-500" />, label: 'Docs' },
                      { icon: <ShieldCheck size={10} className="text-emerald-500" />, label: 'Vault' },
                    ].map((cat, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1 bg-white rounded-lg p-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                        <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center">
                          {cat.icon}
                        </div>
                        <span className="font-kanit text-[8px] font-medium text-slate-500">{cat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* FILE ROWS */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-kanit font-semibold text-[9px] text-slate-400 px-1">Recent Files</span>
                    {mockupFiles.map((file, idx) => (
                      <div 
                        key={idx}
                        className="h-10 rounded-lg bg-white border border-black/[0.03] shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex items-center justify-between px-3 gap-2 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <div className={`w-2 h-2 rounded-full ${file.dotColor} flex-shrink-0`} />
                          <div className="flex flex-col min-w-0">
                            <span className="font-kanit font-medium text-[9px] text-slate-700 truncate">{file.name}</span>
                            <span className="font-kanit font-light text-[7px] text-slate-400">{file.size}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* BOTTOM NAVIGATION */}
                <div className="h-12 bg-white border-t border-slate-100 grid grid-cols-4 items-center justify-items-center flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center"><Folder size={10} className="text-blue-500" /></div>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center"><Image size={10} className="text-slate-400" /></div>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center"><HardDrive size={10} className="text-slate-400" /></div>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center"><Sparkles size={10} className="text-slate-400" /></div>
                </div>

              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
