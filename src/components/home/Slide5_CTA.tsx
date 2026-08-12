import React, { useState } from 'react';
import FadeIn from '../shared/FadeIn';
import { Lock, CheckCircle2 } from 'lucide-react';

export default function Slide5_CTA() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubmitted(true);
    
    // Mailto trigger
    const subject = encodeURIComponent('VOOO LABS — Waitlist Registration');
    const body = encodeURIComponent(`Hi VOOO LABS,\n\nPlease add my email (${email}) to the early access waitlist.\n\nThank you!`);
    window.open(`mailto:vooolabsofficial@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="snap-section animated-gradient-bg noise flex flex-col justify-center items-center px-6 py-24 text-center rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden select-none">
      
      {/* SHADOW OVERLAY FOR BETTER CONTRAST */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        
        {/* HEADING */}
        <FadeIn delay={0} y={45}>
          <h2 
            className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.15)' }}
          >
            Be Part of <br />
            Something <span className="font-extrabold" style={{ textShadow: '0 0 40px rgba(255,255,255,0.45)' }}>Different.</span>
          </h2>
        </FadeIn>

        {/* SUBTEXT */}
        <FadeIn delay={0.15} y={25}>
          <p className="font-kanit font-light text-base sm:text-lg md:text-xl text-white/90 max-w-lg mx-auto leading-relaxed mb-8">
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

            <div className="w-full flex items-center rounded-full bg-white/15 border border-white/30 p-1.5 pl-6 backdrop-blur-md shadow-xl transition-all duration-300 focus-within:border-white/60 focus-within:bg-white/20">
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder={isSubmitted ? 'Added successfully!' : 'Enter your email...'}
                disabled={isSubmitted}
                required
                className="flex-1 font-kanit font-light text-sm sm:text-base text-white placeholder-white/60 bg-transparent outline-none border-none disabled:opacity-50 min-h-[44px]"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="rounded-full bg-white hover:bg-slate-100 text-blue-700 px-5 sm:px-7 py-3 font-kanit font-semibold text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-85 hover:scale-[1.02] shadow-md flex-shrink-0 flex items-center gap-1.5"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Welcome! 🎉</span>
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </div>

            {error && (
              <p className="font-kanit text-xs text-amber-200 font-medium mt-2.5 animate-bounce">
                {error}
              </p>
            )}

            {isSubmitted && (
              <p className="font-kanit text-xs text-white font-medium mt-3 animate-pulse flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Awesome! Mail client opened to confirm registration.
              </p>
            )}
          </form>
        </FadeIn>

        {/* TRUST BADGE */}
        <FadeIn delay={0.4} y={15}>
          <div className="flex items-center justify-center gap-2 text-white/60 text-xs font-kanit font-light mt-6">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>No spam. Unsubscribe anytime. Zero data shared.</span>
          </div>

          <a 
            href="mailto:vooolabsofficial@gmail.com" 
            className="font-kanit font-light text-xs sm:text-sm text-white/50 hover:text-white transition-colors mt-4 block tracking-wide"
          >
            vooolabsofficial@gmail.com
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
