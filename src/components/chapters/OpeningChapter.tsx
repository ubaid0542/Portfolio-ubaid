'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles, Building2, Layers, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OpeningChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const tagListRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        paperRef.current,
        { opacity: 0, y: 50, scale: 0.96, rotateZ: -1.5 },
        { opacity: 1, y: 0, scale: 1, rotateZ: 0, duration: 1.1, ease: 'power3.out' }
      )
        .fromTo(
          stampRef.current,
          { opacity: 0, scale: 1.4, rotateZ: 12 },
          { opacity: 1, scale: 1, rotateZ: 3, duration: 0.5, ease: 'back.out(1.7)' },
          0.4
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          0.6
        )
        .fromTo(
          tagListRef.current?.children || [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
          0.8
        )
        .fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          1.0
        );

      // Scroll-driven camera parallax
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
        .to(paperRef.current, { y: -100, scale: 0.94, opacity: 0.25, rotateZ: -1 })
        .to(stampRef.current, { y: -60, rotateZ: 8 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector('[data-chapter="8"]');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEducation = () => {
    const el = document.querySelector('[data-chapter="2"]');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      data-chapter="0"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F3F0E8] px-4 pt-20 pb-16 md:px-8"
    >
      {/* Background paper texture & grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Physical Paper Document Canvas */}
      <div className="relative mx-auto w-full max-w-4xl">
        <div
          ref={paperRef}
          className="relative rounded-sm bg-[#FFFDF7] p-8 md:p-14 lg:p-16 shadow-[6px_10px_35px_rgba(23,23,21,0.09)] border border-[#171715]/10"
        >
          {/* Masking tape on top center */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <div
              className="h-6 w-28 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm border-t border-b border-[#D4CFC2]/40"
              style={{ transform: 'rotate(-1.5deg)' }}
            />
          </div>

          {/* Masking tape on bottom right */}
          <div className="absolute -bottom-3 right-8 z-20 hidden sm:block">
            <div
              className="h-5 w-20 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm"
              style={{ transform: 'rotate(2deg)' }}
            />
          </div>

          {/* Top Document Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#171715]/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="rounded-sm bg-[#171715] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#FFFDF7] font-bold">
                DOCUMENT 00
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#77746D]">
                Interactive Dossier · Varanasi
              </span>
            </div>

            {/* Official Stamped Seal (Freelance Primary Highlight) */}
            <div
              ref={stampRef}
              className="inline-flex items-center gap-2 rounded-sm border-2 border-dashed border-[#D94A38] bg-[#FFF5F5] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#D94A38] shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D94A38]" />
              Available for Freelance Projects
            </div>
          </div>

          {/* Main Editorial Headline */}
          <div className="mt-8 md:mt-12 text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#77746D]">
              Meet Ubaid — Frontend & Full Stack Developer
            </span>

            <h1
              ref={headlineRef}
              className="mt-3 font-serif text-3xl font-black leading-[1.15] tracking-tight text-[#171715] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Every website has a{' '}
              <span className="relative inline-block whitespace-nowrap">
                story
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3,9 Q55,2 105,8 T197,6"
                    stroke="#D94A38"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              .<br className="hidden sm:inline" />
              Here is how I build them.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#77746D] md:text-lg">
              {profile.bio}
            </p>
          </div>

          {/* Freelance Highlights Specimen Badges */}
          <div
            ref={tagListRef}
            className="mt-8 grid gap-3 sm:grid-cols-3 border-t border-b border-[#171715]/10 py-5"
          >
            <div className="flex items-center gap-2.5 rounded-sm bg-[#F3F0E8]/70 p-2.5">
              <Building2 size={16} className="text-[#D94A38] shrink-0" />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#171715]">
                  Real Estate Websites
                </p>
                <p className="text-[11px] text-[#77746D]">
                  Authority & high lead conversion
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-sm bg-[#F3F0E8]/70 p-2.5">
              <Layers size={16} className="text-[#D94A38] shrink-0" />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#171715]">
                  Creative 3D & GSAP
                </p>
                <p className="text-[11px] text-[#77746D]">
                  Scroll-choreographed storytelling
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-sm bg-[#F3F0E8]/70 p-2.5">
              <Code2 size={16} className="text-[#D94A38] shrink-0" />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#171715]">
                  Full-Stack Architecture
                </p>
                <p className="text-[11px] text-[#77746D]">
                  MCA degree · Next.js · Node.js
                </p>
              </div>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div
            ref={ctaGroupRef}
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 rounded-sm bg-[#D94A38] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b83827] transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38]"
              >
                <Sparkles size={14} />
                Explore Freelance Services
              </button>

              <button
                onClick={scrollToEducation}
                className="inline-flex items-center gap-2 rounded-sm border border-[#171715]/20 bg-[#FFFDF7] px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#171715] hover:bg-[#171715]/5 transition-colors"
              >
                View Education & Skills
              </button>
            </div>

            <div className="flex items-center gap-2 text-[#77746D] font-mono text-[11px] uppercase tracking-widest">
              <span>Scroll to inspect</span>
              <ArrowDown size={14} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
