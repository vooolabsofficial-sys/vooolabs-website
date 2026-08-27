import React, { useState } from 'react';
import { Sparkles, Check, Send, ShieldCheck, Zap, Layers, Loader2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { submitEnquiry, resultCopy, type SubmitResult } from '../../lib/contact';
import { getProduct, STATUS_META } from '../../content/products';

export default function Slide5_ComingSoon() {
  const workspace = getProduct('workspace')!;
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSending) return;

    setIsSending(true);
    const outcome = await submitEnquiry({
      email,
      kind: 'Beta',
      source: `${workspace.name} waitlist`,
    });
    setIsSending(false);
    setResult(outcome);

    if (outcome.ok) setEmail('');
  };

  const featureIcons = [
    <Zap key="sync" size={14} className="text-amber-400" />,
    <ShieldCheck key="device" size={14} className="text-emerald-400" />,
    <Layers key="automation" size={14} className="text-purple-400" />,
  ];

  return (
    <section id={workspace.slug} className="snap-section bg-[#0A0F1E] noise flex flex-col justify-center items-center px-6 py-24 text-center relative overflow-hidden select-none">
      
      {/* GLOW BLOBS */}
      <div className="absolute top-[15%] left-[20%] w-[350px] h-[350px] rounded-full bg-purple-600/15 blur-[90px] animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[100px] animate-blob-2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* PRE-RELEASE BADGE */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 font-kanit font-medium text-xs text-purple-300 mb-6 shadow-sm">
            <Sparkles size={14} className="text-purple-400 animate-pulse" />
            <span>{STATUS_META[workspace.status].label}</span>
          </div>
        </FadeIn>

        {/* HEADINGS */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            VOOO <span className="shimmer-text">Workspace</span>
          </h2>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            {workspace.description}
          </p>
        </FadeIn>

        {/* FEATURE TEASERS */}
        <FadeIn delay={0.2} y={15} className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            {workspace.features.map((feature, idx) => (
              <div
                key={feature}
                className="rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md px-5 py-2.5 font-kanit text-xs sm:text-sm text-slate-200 flex items-center gap-2.5 shadow-sm hover:bg-white/[0.08] transition-colors"
              >
                {featureIcons[idx % featureIcons.length]}
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* WAITLIST FORM CONTAINER */}
        <FadeIn delay={0.3} y={20} className="w-full max-w-lg mb-8">
          <div className="rounded-3xl border border-white/15 p-6 sm:p-8 bg-white/[0.04] backdrop-blur-xl shadow-2xl">
            <h3 className="font-clash font-semibold text-lg sm:text-xl text-white mb-2">
              Be the First to Experience It
            </h3>
            <p className="font-kanit font-light text-xs sm:text-sm text-slate-400 mb-6">
              Join the private beta waitlist for early invitation drops.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="workspace-waitlist-email" className="sr-only">
                Email address for the {workspace.name} waitlist
              </label>
              <input
                id="workspace-waitlist-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (result) setResult(null);
                }}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 font-kanit text-sm text-white placeholder-slate-400 outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
              />
              <button
                type="submit"
                disabled={isSending}
                className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-6 py-3.5 font-kanit font-semibold text-sm text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 flex-shrink-0"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>

            {result && (
              <div
                role="status"
                className={`mt-4 rounded-2xl border p-4 flex items-center gap-3 text-left ${
                  result.ok
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : 'border-amber-500/30 bg-amber-500/10 text-amber-200'
                }`}
              >
                {result.ok && <Check size={18} className="flex-shrink-0" />}
                <span className="font-kanit font-medium text-sm">
                  {resultCopy(result)}
                </span>
              </div>
            )}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
