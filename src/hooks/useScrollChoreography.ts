import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export interface ScrollChoreographyState {
  scrollY: number;
  scrollProgress: number; // 0 to 1
  isAtTop: boolean;
  isScrollingDown: boolean;
  showTopNav: boolean;
  showBottomDock: boolean;
}

const SCROLL_DELTA_THRESHOLD = 14; // Prevents micro-scroll jitter
const TOP_OFFSET_THRESHOLD = 80;

export function useScrollChoreography(): ScrollChoreographyState {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Reset on route change
    lastScrollY.current = window.scrollY;
    setScrollY(window.scrollY);
    setIsAtTop(window.scrollY <= TOP_OFFSET_THRESHOLD);
    setIsScrollingDown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = Math.max(0, window.scrollY);
          const maxScroll = Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight
          );
          const progress = Math.min(1, Math.max(0, currentY / maxScroll));

          setScrollY(currentY);
          setScrollProgress(progress);

          const atTop = currentY <= TOP_OFFSET_THRESHOLD;
          setIsAtTop(atTop);

          if (atTop) {
            setIsScrollingDown(false);
          } else {
            const delta = currentY - lastScrollY.current;
            if (delta > SCROLL_DELTA_THRESHOLD) {
              setIsScrollingDown(true);
            } else if (delta < -SCROLL_DELTA_THRESHOLD) {
              setIsScrollingDown(false);
            }
          }

          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showTopNav = isAtTop || !isScrollingDown;
  const showBottomDock = !isAtTop && isScrollingDown;

  return {
    scrollY,
    scrollProgress,
    isAtTop,
    isScrollingDown,
    showTopNav,
    showBottomDock,
  };
}
