'use client';

import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollSceneProps {
  children: ReactNode;
  className?: string;
  id?: string;
  pin?: boolean;
  pinSpacing?: boolean;
  scrub?: number | boolean;
  start?: string;
  end?: string;
  onProgress?: (progress: number) => void;
  onEnter?: () => void;
  onLeave?: () => void;
  markers?: boolean;
}

export default function ScrollScene({
  children,
  className = '',
  id,
  pin = false,
  pinSpacing = true,
  scrub = 1,
  start = 'top top',
  end = 'bottom top',
  onProgress,
  onEnter,
  onLeave,
  markers = false,
}: ScrollSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    triggerRef.current = ScrollTrigger.create({
      trigger: containerRef.current,
      start,
      end,
      pin,
      pinSpacing,
      scrub: typeof scrub === 'boolean' ? scrub : scrub,
      markers,
      onUpdate: (self) => onProgress?.(self.progress),
      onEnter: () => onEnter?.(),
      onLeave: () => onLeave?.(),
    });

    return () => {
      triggerRef.current?.kill();
    };
  }, [pin, pinSpacing, scrub, start, end, onProgress, onEnter, onLeave, markers]);

  return (
    <div ref={containerRef} id={id} className={className}>
      {children}
    </div>
  );
}
