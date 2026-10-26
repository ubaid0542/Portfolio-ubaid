'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import HalftonePortrait from '@/components/collage/HalftonePortrait';
import { ArrowUpRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroductionChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const annotationRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          { opacity: 0, y: 70, rotation: 3, scale: 0.92 },
          { opacity: 1, y: 0, rotation: -1, scale: 1, duration: 1 }
        )
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3
        );

      // Camera zoom effect on portrait
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 2,
        },
      }).to(portraitRef.current, {
        scale: 1.04,
        y: -15,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector('[data-chapter="8"]');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWallInfra = () => {
    const el = document.querySelector('[data-chapter="3"]');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      data-chapter="1"
      className="relative overflow-hidden bg-[#F3F0E8] px-4 py-24 md:px-12 md:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <ChapterHeading number="01" title="Meet the Developer Behind the Pixels" />

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-14 items-center">
          {/* Portrait Column */}
          <div className="relative md:col-span-5 flex justify-center md:justify-start">
            <div ref={portraitRef} className="relative">
              <HalftonePortrait className="w-60 sm:w-64 md:w-72" />

              {/* Stamped Sticker: Freelance Active */}
              <div
                ref={(el) => { annotationRefs.current[0] = el; }}
                className="absolute -right-3 top-6 z-20"
              >
                <div className="rounded-sm bg-[#D94A38] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white font-bold shadow-md transform rotate-3">
                  ● Full Stack Web Developer
                </div>
              </div>

              {/* Annotation: End-to-End Delivery */}
              <div
                ref={(el) => { annotationRefs.current[1] = el; }}
                className="absolute -left-3 bottom-14 z-20"
              >
                <div className="rounded-sm bg-[#FFFDF7] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#171715] font-semibold border border-[#171715]/10 shadow-sm transform -rotate-2">
                  End-to-End Web Delivery
                </div>
              </div>

              {/* Annotation: Location */}
              <div
                ref={(el) => { annotationRefs.current[2] = el; }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#77746D]">
                  Varanasi, UP, India · MCA Graduate
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Freelance Spotlight Column */}
          <div ref={bioRef} className="md:col-span-7 flex flex-col justify-center">
            <div className="relative rounded-sm bg-[#FFFDF7] p-6 sm:p-8 md:p-10 shadow-[4px_6px_24px_rgba(23,23,21,0.06)] border border-[#171715]/10">
              {/* Paper grain overlay */}
              <div
                className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Masking tape on top */}
              <div className="absolute -top-3 left-10">
                <div className="h-5 w-16 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-sm bg-[#171715] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#FFFDF7] font-bold">
                  ABOUT UBAID
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D94A38] font-bold">
                  ● Available for Freelance Commissions
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#171715] leading-snug">
                I build thoughtful, high-performance web experiences with motion that commands attention.
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#171715]">
                I&apos;m <span className="font-semibold text-[#D94A38]">Ubaid</span>, an MCA graduate and freelance Full Stack Web Developer based in Varanasi. I partner directly with business owners, real estate developers, and marketing agencies to build custom digital properties from scratch.
              </p>

              {/* Proven Freelance Track Record Callout Box */}
              <div className="mt-6 rounded-sm bg-[#F3F0E8] p-4 sm:p-5 border-l-3 border-[#D94A38] shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#171715] uppercase tracking-wider">
                    <Building2 size={14} className="text-[#D94A38]" />
                    <span>Proven Freelance Delivery</span>
                  </div>
                  <a
                    href="https://wallinfra.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-wider text-[#D94A38] font-bold hover:underline flex items-center gap-0.5"
                  >
                    wallinfra.com <ArrowUpRight size={11} />
                  </a>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[#171715]">
                  Recently completed the end-to-end freelance development of <strong>WALL INFRA — SHAPING INDIA</strong> (<a href="https://wallinfra.com" target="_blank" rel="noopener noreferrer" className="text-[#D94A38] underline font-semibold">wallinfra.com</a>), engineering the real estate portal from requirements and layout to Next.js coding, GSAP motion, and live deployment.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#77746D]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-[#D94A38]" /> Complete End-to-End Execution
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-[#D94A38]" /> Direct Client Collaboration
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#77746D]">
                Whether you need a high-converting property showcase, an interactive GSAP-powered brand website, or a full-stack Next.js web application, I handle the entire engineering pipeline without agency bloat.
              </p>

              {/* Actions row */}
              <div className="mt-6 pt-4 border-t border-[#171715]/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#171715] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FFFDF7] hover:bg-[#D94A38] transition-colors"
                >
                  <Sparkles size={12} />
                  View Freelance Services
                </button>

                <button
                  onClick={scrollToWallInfra}
                  className="font-mono text-xs uppercase tracking-wider text-[#77746D] hover:text-[#171715] font-semibold flex items-center gap-1"
                >
                  Inspect Wall Infra Case Study ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
