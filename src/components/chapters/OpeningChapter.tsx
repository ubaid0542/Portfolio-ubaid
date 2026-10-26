'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OpeningChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Initial entrance animation
      const entranceTl = gsap.timeline({ delay: 0.3 });

      entranceTl
        .fromTo(
          labelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        )
        .fromTo(
          paperRef.current,
          { opacity: 0, y: 60, scale: 0.95, rotation: -2 },
          { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.2, ease: 'power3.out' },
          0.2
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          0.6
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
          0.9
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          1.1
        );

      // Scroll-driven exit
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      scrollTl
        .to(paperRef.current, { y: -80, scale: 0.92, opacity: 0.3, duration: 1 })
        .to(headlineRef.current, { y: -40, opacity: 0, duration: 0.8 }, 0)
        .to(subtitleRef.current, { y: -20, opacity: 0, duration: 0.6 }, 0.1);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-chapter="0"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F3F0E8] px-6"
    >
      {/* Background paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Chapter label */}
      <div ref={labelRef} className="absolute left-6 top-8 md:left-12 md:top-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#77746D]">
          Ch. 00 — The Opening
        </span>
      </div>

      {/* Main composition */}
      <div className="relative flex flex-col items-center text-center">
        {/* Paper card behind headline */}
        <div
          ref={paperRef}
          className="relative rounded-sm bg-[#FFFDF7] px-8 py-12 shadow-[4px_6px_24px_rgba(0,0,0,0.08)] md:px-16 md:py-20"
        >
          {/* Paper grain */}
          <div
            className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Tape on top */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
            <div className="h-5 w-20 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-1deg)' }} />
          </div>

          <h1
            ref={headlineRef}
            className="relative font-serif text-4xl font-black uppercase leading-[1.1] tracking-tight text-[#171715] md:text-6xl lg:text-7xl"
          >
            Every website
            <br />
            has a{' '}
            <span className="relative inline-block">
              story
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2,8 Q50,2 100,7 T198,6"
                  stroke="#D94A38"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h1>

          <div ref={lineRef} className="mx-auto mt-6 h-px w-16 origin-left bg-[#171715]/20" />

          <p
            ref={subtitleRef}
            className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-[#77746D]"
          >
            Here&apos;s mine.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-60">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#77746D]">
            Scroll to explore
          </span>
          <div className="h-8 w-px bg-[#77746D]/40" />
        </div>
      </div>
    </section>
  );
}
