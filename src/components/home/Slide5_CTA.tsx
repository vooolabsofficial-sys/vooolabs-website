import React, { useState } from 'react';
import FadeIn from '../shared/FadeIn';
import { Lock, CheckCircle2, Loader2 } from 'lucide-react';
import { COMPANY } from '../../content/company';
import { submitEnquiry, resultCopy, type SubmitResult } from '../../lib/contact';

export default function Slide5_CTA() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending || !email.trim()) return;

    setIsSending(true);
    const outcome = await submitEnquiry({
      email,
      kind: 'Beta',
      source: 'Beta waitlist',
    });
    setIsSending(false);
    setResult(outcome);

    if (outcome.ok) setEmail('');
  };

  const succeeded = result?.ok === true;

  return (
    <section className="snap-section animated-gradient-bg noise flex flex-col justify-center items-center px-6 py-24 text-center rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden select-none">
      
      {/* SHADOW OVERLAY FOR BETTER CONTRAST */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <FadeIn delay={0} y={45}>
          <h2 
            className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.2)' }}
          >
            Be Part of <br />
            Something <span className="font-extrabold" style={{ textShadow: '0 0 40px rgba(255,255,255,0.45)' }}>Different.</span>
          </h2>
        </FadeIn>

        {/* SUBTEXT */}
        <FadeIn delay={0.15} y={25}>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-white/95 max-w-lg mx-auto leading-relaxed mb-8">
            Join the beta waitlist. Be first to experience what VOOO LABS builds next.
          </p>
        </FadeIn>

        {/* EMAIL INPUT FORM */}
        <FadeIn delay={0.3} y={20} className="w-full max-w-md">
          <form 
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center"
            noValidate
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email Address for Beta Waitlist
            </label>

            <div className="w-full flex items-center rounded-full bg-white/20 border border-white/35 p-1.5 pl-6 backdrop-blur-xl shadow-2xl transition-all duration-300 focus-within:border-white/80 focus-within:bg-white/25 focus-within:ring-4 focus-within:ring-white/20">
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (result) setResult(null);
                }}
                placeholder="Enter your email..."
                required
                className="flex-1 font-kanit font-light text-sm sm:text-base text-white placeholder-white/70 bg-transparent outline-none border-none disabled:opacity-50 min-h-[44px]"
              />
              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-white hover:bg-slate-50 text-blue-700 px-6 sm:px-8 py-3 font-kanit font-semibold text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-85 hover:scale-[1.02] shadow-lg flex-shrink-0 flex items-center gap-2"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span>Sending…</span>
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </div>

            {result && (
              <p
                role="status"
                className={`font-kanit text-xs font-medium mt-3 flex items-center gap-1.5 ${
                  succeeded ? 'text-white' : 'text-amber-200'
                }`}
              >
                {succeeded && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                )}
                {resultCopy(result)}
              </p>
            )}
          </form>
        </FadeIn>

        {/* TRUST BADGE */}
        <FadeIn delay={0.4} y={15}>
          <div className="flex items-center justify-center gap-2 text-white/80 text-xs font-kanit font-light mt-6">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Used only to tell you when the beta opens. Zero spam.</span>
          </div>

          <a
            href={`mailto:${COMPANY.email}`}
            className="font-kanit font-normal text-xs sm:text-sm text-white/70 hover:text-white transition-colors mt-4 block tracking-wide"
          >
            {COMPANY.email}
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
