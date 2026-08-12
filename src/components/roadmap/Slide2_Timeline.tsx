import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Slide2_Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Connect vertical scroll progress of this 500vh section to horizontal translation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Maps scroll progress [0, 1] to translate from 10% to -65%
  const x = useTransform(scrollYProgress, [0, 1], ['10vw', '-65vw']);

  return (
    <div 
      ref={sectionRef} 
      className="relative bg-[#F8F9FC] z-10 select-none"
      style={{ height: '320vh' }} // scroll length space
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden flex flex-col justify-center">
        
        {/* HEADER LABEL */}
        <div className="absolute top-24 left-6 sm:left-12 md:left-20 z-20">
          <span className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase">
            Roadmap 2025–2030
          </span>
        </div>

        {/* HORIZONTAL CARDS TRACK */}
        <div className="relative flex flex-col justify-center w-full h-[650px] overflow-hidden">
          
          <motion.div style={{ x }} className="flex items-center relative py-12 pr-[40vw]">
            
            {/* HORIZONTAL CENTER LINE */}
            <div 
              className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-[#4285F4] via-[#7C3AED] to-[#F97316] z-0" 
              style={{ width: '400vw' }}
            />

            {/* PHASE 1: NOW (Floats above line) */}
            <div className="relative flex-shrink-0 w-[340px] sm:w-[380px] mx-8 z-10 flex flex-col items-center pb-[180px]">
              
              {/* Card Content */}
              <div 
                className="rounded-[32px] p-8 bg-white border border-[#4285F4] shadow-[0_12px_40px_rgba(66,133,244,0.12)] w-full text-left relative transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
                  <span className="font-kanit font-medium text-[10px] text-emerald-600 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    Active
                  </span>
                  <span className="font-kanit font-medium text-xs g-files ml-auto">2025 Q3</span>
                </div>
                <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-4">
                  Launch Begins
                </h3>
                <ul className="flex flex-col gap-2.5 font-kanit font-light text-slate-600 text-sm">
                  <li className="flex items-center gap-2">⚙️ VOOO Files Beta</li>
                  <li className="flex items-center gap-2">🔄 Internal Testing</li>
                  <li className="flex items-center gap-2">📄 Design Assets Final</li>
                </ul>

                {/* Progress bar */}
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-kanit font-semibold mb-1">
                    <span>Progress</span>
                    <span>70%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-[#1a73e8] w-[70%]" />
                  </div>
                </div>
              </div>

              {/* Dot resting on center line */}
              <div 
                className="w-5 h-5 rounded-full border-[3px] border-[#4285F4] bg-white absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 shadow-md"
              />
            </div>

            {/* PHASE 2: SOON (Floats below line) */}
            <div className="relative flex-shrink-0 w-[340px] sm:w-[380px] mx-8 z-10 flex flex-col items-center pt-[180px]">
              
              {/* Dot resting on center line */}
              <div 
                className="w-5 h-5 rounded-full border-[3px] border-[#7C3AED] bg-white absolute top-[-10px] left-1/2 -translate-x-1/2 z-20 shadow-md"
              />

              {/* Card Content */}
              <div 
                className="rounded-[32px] p-8 bg-white border border-slate-100 shadow-md w-full text-left relative transition-all duration-300 hover:translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-kanit font-medium text-xs g-smaran">2025 Q4</span>
                </div>
                <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-4">
                  Building More
                </h3>
                <ul className="flex flex-col gap-2.5 font-kanit font-light text-slate-600 text-sm">
                  <li className="flex items-center gap-2">🧠 SMARAN AI Dev</li>
                  <li className="flex items-center gap-2">⚡ CallMind Beta</li>
                  <li className="flex items-center gap-2">🔄 Core Cloud Architecture</li>
                </ul>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-kanit font-semibold mb-1">
                    <span>Progress</span>
                    <span>20%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-orange-500 w-[20%]" />
                  </div>
                </div>
              </div>

            </div>

            {/* PHASE 3: PLANNING (Floats above line) */}
            <div className="relative flex-shrink-0 w-[340px] sm:w-[380px] mx-8 z-10 flex flex-col items-center pb-[180px]">
              
              {/* Card Content */}
              <div 
                className="rounded-[32px] p-8 bg-white border border-slate-100 shadow-md w-full text-left relative transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-kanit font-medium text-xs text-orange-500">2026 Q1</span>
                </div>
                <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-4">
                  Going Public
                </h3>
                <ul className="flex flex-col gap-2.5 font-kanit font-light text-slate-600 text-sm">
                  <li className="flex items-center gap-2">🛍️ VOOO Files Play Store</li>
                  <li className="flex items-center gap-2">🧬 SMARAN AI Beta</li>
                  <li className="flex items-center gap-2">⚡ CallMind Public Launch</li>
                </ul>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-kanit font-semibold mb-1">
                    <span>Progress</span>
                    <span>5%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[5%]" />
                  </div>
                </div>
              </div>

              {/* Dot resting on center line */}
              <div 
                className="w-5 h-5 rounded-full border-[3px] border-orange-500 bg-white absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 shadow-md"
              />
            </div>

            {/* PHASE 4: VISION (Floats below line) */}
            <div className="relative flex-shrink-0 w-[340px] sm:w-[380px] mx-8 z-10 flex flex-col items-center pt-[180px]">
              
              {/* Dot resting on center line */}
              <div 
                className="w-5 h-5 rounded-full border-[3px] border-emerald-500 bg-white absolute top-[-10px] left-1/2 -translate-x-1/2 z-20 shadow-md"
              />

              {/* Card Content */}
              <div 
                className="rounded-[32px] p-8 bg-white border border-slate-100 shadow-md w-full text-left relative transition-all duration-300 hover:translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-kanit font-medium text-xs text-emerald-500">2026 Q2</span>
                </div>
                <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-4">
                  Full Launch
                </h3>
                <ul className="flex flex-col gap-2.5 font-kanit font-light text-slate-600 text-sm">
                  <li className="flex items-center gap-2">📞 CallMind Launch</li>
                  <li className="flex items-center gap-2">🚀 VOOO Workspace Preview</li>
                  <li className="flex items-center gap-2">🌍 Multi-language expansions</li>
                </ul>
              </div>

            </div>

            {/* PHASE 5: ECOSYSTEM SCALING (Floats above line) */}
            <div className="relative flex-shrink-0 w-[340px] sm:w-[380px] mx-8 z-10 flex flex-col items-center pb-[180px]">
              
              {/* Card Content */}
              <div 
                className="rounded-[32px] p-8 bg-white border border-purple-500/20 shadow-md w-full text-left relative overflow-hidden flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-kanit font-medium text-xs text-purple-600">2027–2030</span>
                </div>
                <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] mb-4">
                  Global Ecosystem
                </h3>
                <ul className="flex flex-col gap-2.5 font-kanit font-light text-slate-600 text-sm">
                  <li className="flex items-center gap-2">🌐 Cross-Platform Sync Engine</li>
                  <li className="flex items-center gap-2">⚡ Developer API & Plugins</li>
                  <li className="flex items-center gap-2">🛡️ Zero-Knowledge Enterprise Cloud</li>
                </ul>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-kanit font-semibold mb-1">
                    <span>Vision Roadmap</span>
                    <span>100% On-Track</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-full" />
                  </div>
                </div>
              </div>

              {/* Dot resting on center line */}
              <div 
                className="w-5 h-5 rounded-full border-[3px] border-purple-500 bg-white absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 shadow-md"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}
