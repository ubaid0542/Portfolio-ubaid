'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { processSteps } from '@/data/skills';
import { Calendar, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<SVGPathElement>(null);
  const connectorRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (lineRef.current && connectorRef.current) {
        const length = lineRef.current.getTotalLength?.() || 600;
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: connectorRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 1.5,
          },
        });
      }

      stepRefs.current.forEach((ref) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          { opacity: 0, y: 30, x: -20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',
              end: 'top 60%',
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
      data-chapter="6"
      className="relative overflow-hidden bg-[#FFFDF7] px-4 py-24 md:px-12 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <ChapterHeading number="06" title="How I Build For Clients" />

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#171715]/10 pb-6">
          <p className="max-w-2xl text-base leading-relaxed text-[#77746D]">
            A predictable, transparent development methodology designed to eliminate surprises, keep timelines tight, and guarantee design-to-code precision.
          </p>

          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-sm bg-[#171715] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-[#FFFDF7]">
            Typical Delivery: 2 — 3 Weeks
          </span>
        </div>

        <div className="relative mt-16">
          {/* Animated Connecting Line */}
          <svg
            ref={connectorRef}
            className="absolute left-6 top-0 hidden h-full w-2 md:left-8 md:block pointer-events-none"
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

          <div className="space-y-10 md:space-y-14">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="relative md:pl-20"
              >
                {/* Step dot */}
                <div className="absolute left-4 top-6 hidden h-7 w-7 items-center justify-center rounded-full bg-[#171715] text-[#F7E84B] md:flex shadow-sm md:left-5">
                  <span className="font-mono text-xs font-bold">{step.number}</span>
                </div>

                <div className="relative rounded-sm bg-[#F3F0E8] p-6 md:p-8 shadow-[3px_4px_16px_rgba(23,23,21,0.04)] border border-[#171715]/10">
                  {/* Tape */}
                  <div className="absolute -top-2.5 right-8">
                    <div className="h-4 w-12 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#171715]/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D94A38]">
                        STAGE {step.number} · {step.phase}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#77746D]">
                      <Calendar size={12} className="text-[#D94A38]" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-bold tracking-tight text-[#171715]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#171715]">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#171715]/10 flex items-center gap-2 text-xs font-mono text-[#77746D]">
                    <CheckCircle2 size={13} className="text-[#D94A38] shrink-0" />
                    <span>Deliverable: <strong className="text-[#171715]">{step.deliverable}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
