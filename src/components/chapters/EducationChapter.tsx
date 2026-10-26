'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { profile } from '@/data/profile';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EducationChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Draw timeline SVG path
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength?.() || 500;
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: 1.5,
          },
        });
      }

      // Card reveals
      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          { opacity: 0, y: 40, rotateZ: idx % 2 === 0 ? -1.5 : 1.5 },
          {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            duration: 0.9,
            scrollTrigger: {
              trigger: ref,
              start: 'top 82%',
              end: 'top 55%',
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-chapter="2"
      className="relative overflow-hidden bg-[#FFFDF7] px-4 py-24 md:px-12 md:py-32"
    >
      {/* Background paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <ChapterHeading number="02" title="Education & Engineering Journey" />

        <div className="mt-4 max-w-2xl">
          <p className="text-base leading-relaxed text-[#77746D] md:text-lg">
            A solid academic foundation in computer science and advanced application development,
            bridging rigorous theoretical computer science with creative interaction design.
          </p>
        </div>

        {/* Dossier Timeline */}
        <div ref={timelineRef} className="relative mt-16 md:mt-20">
          {/* Animated SVG Path for desktop */}
          <svg
            className="absolute left-6 top-0 hidden h-full w-2 md:left-1/2 md:-ml-1 md:block pointer-events-none"
            viewBox="0 0 4 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={lineRef}
              d="M2,0 L2,600"
              stroke="#D94A38"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Mobile vertical line */}
          <div className="absolute left-6 top-0 h-full w-0.5 border-l-2 border-dashed border-[#D94A38]/40 md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {/* ITEM 1: MCA Degree */}
            <div
              ref={(el) => { cardRefs.current[0] = el; }}
              className="relative pl-14 md:pl-0 md:pr-[53%]"
            >
              {/* Dot on Timeline */}
              <div className="absolute left-4 top-8 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#D94A38] text-white shadow-sm md:left-1/2 md:-ml-0.5">
                <GraduationCap size={11} />
              </div>

              {/* Physical Dossier Card */}
              <div className="relative rounded-sm bg-[#F3F0E8] p-6 md:p-8 shadow-[4px_6px_20px_rgba(23,23,21,0.06)] border border-[#171715]/10">
                {/* Tape */}
                <div className="absolute -top-3 right-8">
                  <div className="h-5 w-16 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#171715]/10 pb-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D94A38]">
                    Post-Graduation Degree
                  </span>
                  <span className="rounded-sm bg-[#171715] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#FFFDF7] font-semibold">
                    Completed
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-xl md:text-2xl font-bold tracking-tight text-[#171715]">
                  {profile.education[0].degree}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#77746D]">
                  Advanced Master&apos;s Level Engineering
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#171715]">
                  Comprehensive post-graduate program covering enterprise software engineering, distributed systems, modern full-stack architectures, database optimization, and high-performance web applications.
                </p>

                <div className="mt-4 space-y-1.5 pt-3 border-t border-[#171715]/10">
                  <div className="flex items-center gap-2 text-xs text-[#77746D]">
                    <CheckCircle2 size={13} className="text-[#D94A38]" />
                    <span>Advanced Web Development & Component Paradigms</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#77746D]">
                    <CheckCircle2 size={13} className="text-[#D94A38]" />
                    <span>Database Systems (PostgreSQL, MongoDB, Relational Normalization)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#77746D]">
                    <CheckCircle2 size={13} className="text-[#D94A38]" />
                    <span>Full-Stack API Design & Edge Deployment</span>
                  </div>
                </div>

                {/* Handwritten margin note */}
                <div className="mt-5 rounded-sm bg-[#FFFDF7] p-3 border-l-2 border-[#D94A38]">
                  <p className="font-serif italic text-xs text-[#77746D]">
                    &ldquo;MCA provided the software architecture mindset needed to build scalable client applications without tech debt.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 2: B.Sc. Computer Science */}
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className="relative pl-14 md:pl-[53%] md:pr-0"
            >
              {/* Dot on Timeline */}
              <div className="absolute left-4 top-8 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#171715] text-[#F7E84B] shadow-sm md:left-1/2 md:-ml-0.5">
                <BookOpen size={11} />
              </div>

              {/* Physical Dossier Card */}
              <div className="relative rounded-sm bg-[#F3F0E8] p-6 md:p-8 shadow-[4px_6px_20px_rgba(23,23,21,0.06)] border border-[#171715]/10">
                {/* Tape */}
                <div className="absolute -top-3 left-8">
                  <div className="h-5 w-16 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm" style={{ transform: 'rotate(3deg)' }} />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#171715]/10 pb-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D94A38]">
                    Undergraduate Degree · 2019–2023
                  </span>
                  <span className="rounded-sm bg-[#171715] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#FFFDF7] font-semibold">
                    Completed
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-xl md:text-2xl font-bold tracking-tight text-[#171715]">
                  B.Sc. Computer Science
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#77746D]">
                  Mahatma Gandhi Kashi Vidyapith (MGKVP), Varanasi
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#171715]">
                  Completed 4-year rigorous undergraduate curriculum establishing computer science fundamentals: C/C++, Data Structures, Algorithms, Computer Architecture, and Operating Systems.
                </p>

                <div className="mt-4 space-y-1.5 pt-3 border-t border-[#171715]/10">
                  <div className="flex items-center gap-2 text-xs text-[#77746D]">
                    <CheckCircle2 size={13} className="text-[#D94A38]" />
                    <span>Algorithmic Thinking & Complexity Analysis (O(n), Memory)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#77746D]">
                    <CheckCircle2 size={13} className="text-[#D94A38]" />
                    <span>Built Sorting Visualizer to demonstrate algorithmic operations visually</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#77746D]">
                    <CheckCircle2 size={13} className="text-[#D94A38]" />
                    <span>Transition from low-level programming to modern JavaScript & Web APIs</span>
                  </div>
                </div>

                {/* Verified Stamp */}
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-sm bg-[#FFFDF7] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#77746D] border border-[#171715]/10">
                  <Award size={12} className="text-[#D94A38]" />
                  Verified MGKVP Varanasi Graduate
                </div>
              </div>
            </div>

            {/* ITEM 3: Transition to Creative Development & Freelancing */}
            <div
              ref={(el) => { cardRefs.current[2] = el; }}
              className="relative pl-14 md:pl-0 md:pr-[53%]"
            >
              <div className="absolute left-4 top-8 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#F7E84B] text-[#171715] shadow-sm md:left-1/2 md:-ml-0.5">
                <Award size={11} />
              </div>

              <div className="relative rounded-sm bg-[#171715] p-6 md:p-8 text-[#FFFDF7] shadow-[4px_6px_20px_rgba(23,23,21,0.12)]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#F7E84B]">
                  Engineering Specialization
                </span>

                <h3 className="mt-2 font-serif text-xl md:text-2xl font-bold tracking-tight text-[#FFFDF7]">
                  From CS Core to Motion & Client Work
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#FFFDF7]/80">
                  Combining formal CS algorithms with modern interaction libraries (GSAP, ScrollTrigger, React Three Fiber, Next.js). Delivering high-impact websites for real estate businesses and agencies that demand distinctive presentation.
                </p>

                <div className="mt-4 pt-3 border-t border-[#FFFDF7]/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F7E84B] font-semibold">Active Client Delivery</span>
                  <span className="text-[#77746D]">Varanasi, UP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
