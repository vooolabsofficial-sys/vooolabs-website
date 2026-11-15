import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Bot, ArrowDown, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide1_HeroShift() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const scrollToNext = () => {
    const el = document.getElementById('chatgpt-live');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Interactive 3D Generative Particle Sphere / Neural Galaxy Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener('resize', onResize);

    // Particle nodes representing search entities
    const NUM_PARTICLES = 65;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
    }> = [];

    const colors = ['#8B5CF6', '#3B82F6', '#10B981', '#06B6D4'];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 110 + Math.random() * 25;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: 2.2 + Math.random() * 2,
        color: colors[i % colors.length]
      });
    }

    let angleX = 0;
    let angleY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = nx * 0.03;
      mouseY = ny * 0.03;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.005 + mouseX;
      angleX += 0.003 + mouseY;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.0016;

      const projected: Array<{ px: number; py: number; pz: number; radius: number; color: string }> = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;

        const y1 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        const fov = 300;
        const perspective = fov / (fov + z2 * 0.8);

        const px = cx + x1 * scale * perspective;
        const py = cy + y1 * scale * perspective;

        projected.push({ px, py, pz: z2, radius: p.radius * perspective, color: p.color });
      }

      // Draw connecting neural lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 55 * scale) {
            const alpha = (1 - dist / (55 * scale)) * 0.22;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8 * window.devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero-shift"
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none pt-28 pb-12 border-b border-slate-200/80"
      aria-label="The 2026 Shift: Conversational Search"
    >
      {/* AMBIENT RADIAL BACKGROUNDS */}
      <div className="absolute top-[-180px] left-[-180px] w-[650px] h-[650px] rounded-full bg-radial from-purple-500/[0.04] to-transparent blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-180px] w-[600px] h-[600px] rounded-full bg-radial from-blue-500/[0.04] to-transparent blur-[120px] pointer-events-none z-0" aria-hidden="true" />

      {/* ULTRA-SUBTLE ARCHITECTURAL GRID */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto py-6">
        
        {/* TWO-COLUMN LAYOUT: LEFT = CLEAR INFO, RIGHT = INTERACTIVE 3D NEURAL CANVAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: CLEAR EXPLANATION */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <FadeIn delay={0.05} y={15}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Sparkles size={13} className="text-purple-600" />
                <span>2026 Generative Search Intelligence</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} y={20}>
              <h1 className="font-clash text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                The Death of 10 Blue Links. <br />
                <span className="shimmer-text">Welcome to Conversational Search.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                People don't scroll pages of Google links anymore. In 2026, over 60% of buyers ask ChatGPT, Perplexity, and Google Gemini: <em>"Who should I hire for my project?"</em> If an AI doesn't cite your brand, you don't exist for modern clients.
              </p>
            </FadeIn>

            <FadeIn delay={0.25} y={20}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToNext}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Bot size={16} />
                  <span>See How ChatGPT Recommends You</span>
                  <ArrowRight size={14} />
                </button>

                <div className="text-xs font-semibold text-slate-500">
                  Live Working Simulations Below ↓
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: LIVE 3D INTERACTIVE NEURAL GALAXY CANVAS */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn delay={0.25} y={20} className="w-full max-w-md">
              <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 shadow-md text-left overflow-hidden">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-purple-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    3D Neural Search Graph
                  </span>
                  <span>Interactive 60 FPS</span>
                </div>

                {/* 3D Canvas */}
                <div className="relative w-full aspect-square rounded-2xl bg-[#09090d] border border-slate-800 overflow-hidden flex items-center justify-center">
                  <canvas 
                    ref={canvasRef}
                    className="w-full h-full cursor-grab active:cursor-grabbing"
                  />

                  {/* Central Node Label Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none p-2 rounded-xl bg-black/80 border border-purple-500/30 text-center backdrop-blur-md">
                    <div className="text-[9px] font-mono font-bold text-purple-400 uppercase">Knowledge Entity</div>
                    <div className="font-clash font-bold text-xs text-white">VOOO LABS Core</div>
                  </div>
                </div>

                {/* Canvas Footer Indicators */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Move cursor to rotate graph</span>
                  <span className="text-emerald-600 font-bold">100% Crawl Ready</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

        {/* BOTTOM AUTHORITY METRIC STRIP */}
        <FadeIn delay={0.32} y={15}>
          <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              OpenAI SearchGPT Citation Ready
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              Google AI Overviews (SGE) Placement
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Google Maps 3-Pack Local Dominance
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              ₹0 Ongoing Pay-Per-Click Ad Costs
            </span>
          </div>
        </FadeIn>

        {/* SMOOTH SCROLL CUE */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center text-xs font-semibold text-slate-500 hover:text-purple-600 transition-colors group cursor-pointer"
            aria-label="Scroll to ChatGPT Live"
          >
            <span className="tracking-wider uppercase text-[10px] mb-1">Open Live ChatGPT Screen</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-purple-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
