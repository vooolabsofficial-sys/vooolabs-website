import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  className = ''
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const elementX = rect.left + rect.width / 2;
      const elementY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - elementX, e.clientY - elementY);

      if (distance < padding) {
        setIsHovered(true);
        const x = (e.clientX - elementX) / strength;
        const y = (e.clientY - elementY) / strength;
        setPosition({ x, y });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovered ? 'transform 0.25s ease-out' : 'transform 0.6s ease-in-out',
    willChange: 'transform',
    display: 'inline-block',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
