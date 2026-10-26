'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ChapterHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export default function ChapterHeading({ number, title, className = '' }: ChapterHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const el = containerRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 1,
      },
    });

    tl.fromTo(
      el.querySelector('.chapter-number'),
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
    tl.fromTo(
      el.querySelector('.chapter-title'),
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.5 },
      0.1
    );
    tl.fromTo(
      el.querySelector('.chapter-line'),
      { scaleX: 0 },
      { scaleX: 1, duration: 0.5 },
      0.2
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={`mb-8 md:mb-12 ${className}`}>
      <div className="flex items-center gap-3 md:gap-4">
        <span className="chapter-number font-mono text-xs tracking-widest text-[#77746D] uppercase">
          Ch. {number}
        </span>
        <div className="chapter-line h-px flex-1 origin-left bg-[#77746D]/30" />
      </div>
      <h2 className="chapter-title mt-3 font-serif text-3xl font-bold tracking-tight text-[#171715] md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
