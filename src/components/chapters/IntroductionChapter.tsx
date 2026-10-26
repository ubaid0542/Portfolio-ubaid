'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import HalftonePortrait from '@/components/collage/HalftonePortrait';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroductionChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const annotationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Paper document entrance
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1.5,
        },
      });

      mainTl
        .fromTo(
          portraitRef.current,
          { opacity: 0, y: 80, rotation: 3, scale: 0.9 },
          { opacity: 1, y: 0, rotation: -1.5, scale: 1, duration: 1 }
        )
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3
        );

      // Annotations
      annotationRefs.current.forEach((ref, i) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 10 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: ref,
                start: 'top 80%',
                end: 'top 60%',
                scrub: 1,
              },
            }
          );
        }
      });

      // Arrow draw-on
      if (arrowRef.current) {
        const path = arrowRef.current.querySelector('path');
        if (path) {
          const length = path.getTotalLength?.() || 100;
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1,
            scrollTrigger: {
              trigger: arrowRef.current,
              start: 'top 75%',
              end: 'top 55%',
              scrub: 1,
            },
          });
        }
      }

      // Camera zoom effect on portrait
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 2,
        },
      }).to(portraitRef.current, {
        scale: 1.05,
        y: -20,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-chapter="1"
      className="relative overflow-hidden bg-[#F3F0E8] px-6 py-24 md:px-12 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeading number="01" title="Meet the developer behind the pixels." />

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Portrait */}
          <div className="relative flex justify-center md:justify-start">
            <div ref={portraitRef} className="relative">
              <HalftonePortrait className="w-56 md:w-64 lg:w-72" />

              {/* Annotation: Frontend */}
              <div
                ref={(el) => { annotationRefs.current[0] = el; }}
                className="absolute -right-4 top-4 md:-right-16"
              >
                <svg
                  ref={arrowRef}
                  className="absolute -left-8 top-3 hidden md:block"
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M28,10 Q20,8 8,10"
                    stroke="#D94A38"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="rounded-sm bg-[#F7E84B]/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#171715]">
                  frontend dev
                </span>
              </div>

              {/* Annotation: Creative */}
              <div
                ref={(el) => { annotationRefs.current[1] = el; }}
                className="absolute -left-4 bottom-16 md:-left-20"
              >
                <span className="rounded-sm bg-[#F7E84B]/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#171715]">
                  creative dev
                </span>
              </div>

              {/* Annotation: Varanasi */}
              <div
                ref={(el) => { annotationRefs.current[2] = el; }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2"
              >
                <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-widest text-[#77746D]">
                  Varanasi, India
                </span>
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div ref={bioRef} className="flex flex-col justify-center">
            <div className="relative rounded-sm bg-[#FFFDF7] p-6 shadow-[3px_4px_16px_rgba(0,0,0,0.06)] md:p-8">
              {/* Paper grain */}
              <div
                className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              <p className="relative text-lg leading-relaxed text-[#171715] md:text-xl">
                I&apos;m{' '}
                <span className="relative inline">
                  <span className="absolute inset-0 -mx-1 -my-0.5 rounded-sm bg-[#F7E84B]/40" />
                  <span className="relative font-semibold">Ubaid</span>
                </span>
                , a developer interested in building thoughtful digital experiences through{' '}
                <span className="font-semibold">frontend engineering</span>,{' '}
                <span className="font-semibold">interaction design</span>, and{' '}
                <span className="font-semibold">full-stack development</span>.
              </p>

              <p className="relative mt-4 text-base leading-relaxed text-[#77746D]">
                Based in Varanasi, India. Currently focused on creative frontend projects, 
                freelance web development, and building products that solve real problems.
              </p>

              {/* Handwritten note */}
              <div className="relative mt-6">
                <p className="text-sm italic text-[#77746D]" style={{ fontFamily: 'Georgia, serif' }}>
                  &ldquo;Code should feel as considered as the design it brings to life.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
