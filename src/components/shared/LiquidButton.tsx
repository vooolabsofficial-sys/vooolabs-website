import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export type LiquidButtonVariant =
  | 'primary'
  | 'secondary'
  | 'whatsapp'
  | 'white'
  | 'dark'
  | 'gradient'
  | 'emerald';

export type LiquidButtonRounded = 'pill' | 'apple';
export type LiquidButtonSize = 'sm' | 'md' | 'lg';

export interface LiquidButtonProps {
  to?: string;
  href?: string;
  state?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: LiquidButtonVariant;
  rounded?: LiquidButtonRounded;
  size?: LiquidButtonSize;
  className?: string;
  magnetic?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

export default function LiquidButton({
  to,
  href,
  state,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  rounded = 'pill',
  size = 'md',
  className = '',
  magnetic = true,
  target,
  rel,
  ariaLabel,
  children,
}: LiquidButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Viscoelastic magnetic cursor attraction physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft liquid spring settle: stiffness 320, damping 26
  const springX = useSpring(x, { stiffness: 320, damping: 26 });
  const springY = useSpring(y, { stiffness: 320, damping: 26 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || disabled) return;
    const element = containerRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pullX = (e.clientX - centerX) * 0.16;
    const pullY = (e.clientY - centerY) * 0.16;
    const maxPull = 3.5;

    x.set(Math.max(-maxPull, Math.min(maxPull, pullX)));
    y.set(Math.max(-maxPull, Math.min(maxPull, pullY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Base styling classes
  const roundedClass = rounded === 'pill' ? 'rounded-full' : 'rounded-[14px]';

  const sizeClasses: Record<LiquidButtonSize, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm',
    lg: 'px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold',
  };

  /**
   * UNIFIED DESIGN SYSTEM COLOR TOKENS:
   * 1. Primary: Obsidian #0A0F1E -> Studio Blue #4285F4 (Main Conversion CTAs)
   * 2. Secondary: Architectural White -> #F8F9FC with dark border
   * 3. WhatsApp: Crisp White + Subtle 6px Emerald dot (Zero loud neon green blocks)
   * 4. White: For dark #0A0F1E sections -> Inverts to #4285F4 with white text
   * 5. Dark: Subtle glass for dark backgrounds
   */
  const variantClasses: Record<LiquidButtonVariant, string> = {
    primary:
      'btn-liquid-primary bg-[#0A0F1E] hover:bg-[#4285F4] text-white border-[#0A0F1E] hover:border-[#4285F4] shadow-xs',
    secondary:
      'btn-liquid-secondary bg-white hover:bg-[#F8F9FC] text-slate-900 border-slate-200/90 hover:border-slate-900/30 hover:text-slate-950 shadow-xs',
    whatsapp:
      'btn-liquid-secondary bg-white hover:bg-emerald-50/40 text-slate-900 border-slate-200/90 hover:border-emerald-600/40 hover:text-slate-950 shadow-xs',
    white:
      'btn-liquid-white bg-white hover:bg-[#4285F4] text-[#0A0F1E] hover:text-white border-white hover:border-[#4285F4] shadow-md',
    dark:
      'btn-liquid-dark bg-white/[0.08] hover:bg-white/[0.15] text-white border-white/20 hover:border-white/40',
    // Aliases to ensure zero clashing or harsh neon gradients anywhere:
    gradient:
      'btn-liquid-primary bg-[#0A0F1E] hover:bg-[#4285F4] text-white border-[#0A0F1E] hover:border-[#4285F4] shadow-xs',
    emerald:
      'btn-liquid-secondary bg-white hover:bg-emerald-50/40 text-slate-900 border-slate-200/90 hover:border-emerald-600/40 hover:text-slate-950 shadow-xs',
  };

  const combinedClasses = `btn-liquid-base ${variantClasses[variant]} ${roundedClass} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''
  }`;

  const isWhatsApp = variant === 'whatsapp' || variant === 'emerald';

  const innerContent = (
    <>
      {isWhatsApp && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
      )}
      {children}
    </>
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {to ? (
        <Link
          to={to}
          state={state}
          onClick={onClick}
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          {innerContent}
        </Link>
      ) : href ? (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          onClick={onClick}
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          {innerContent}
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          {innerContent}
        </button>
      )}
    </motion.div>
  );
}
