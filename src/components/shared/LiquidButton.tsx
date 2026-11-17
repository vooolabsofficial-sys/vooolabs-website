import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export type LiquidButtonVariant = 'gradient' | 'primary' | 'secondary' | 'dark' | 'emerald';
export type LiquidButtonRounded = 'pill' | 'apple';
export type LiquidButtonSize = 'sm' | 'md' | 'lg';

export interface LiquidButtonProps {
  to?: string;
  href?: string;
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

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm',
    lg: 'px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold',
  }[size];

  const variantClasses = {
    gradient:
      'btn-liquid-primary bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white',
    primary:
      'btn-liquid-primary bg-slate-950 hover:bg-blue-600 text-white',
    secondary:
      'btn-liquid-secondary bg-white text-slate-800',
    dark:
      'btn-liquid-dark text-white',
    emerald:
      'btn-liquid-emerald bg-emerald-600 hover:bg-emerald-700 text-white',
  }[variant];

  const combinedClasses = `btn-liquid-base ${variantClasses} ${roundedClass} ${sizeClasses} ${className} ${
    disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''
  }`;

  const innerContent = (
    <>
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
