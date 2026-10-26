'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { processSteps } from '@/data/skills';

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
      // Draw connecting line
      if (lineRef.current && connectorRef.current) {
        const length = lineRef.current.getTotalLength?.() || 500;
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

      // Reveal steps
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

        // Highlight active step
        const highlight = ref.querySelector('.step-highlight');
        if (highlight) {
          gsap.fromTo(
            highlight,
            { scaleX: 0 },
            {
              scaleX: 1,
              scrollTrigger: {
                trigger: ref,
                start: 'top 65%',
                end: 'top 50%',
                scrub: 1,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-chapter="6"
      className="relative overflow-hidden bg-[#FFFDF7] px-6 py-24 md:px-12 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <ChapterHeading number="06" title="How I Build" />

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#77746D]">
          My approach to building websites and web applications. Each project follows 
          these stages, adapted to the specific requirements and context.
        </p>

        <div className="relative mt-16">
          {/* Connecting line */}
          <svg
            ref={connectorRef}
            className="absolute left-8 top-0 hidden h-full w-2 md:block"
            viewBox="0 0 4 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={lineRef}
              d="M2,0 Q4,50 2,100 T2,200 T2,300 T2,400 T2,500"
              stroke="#D94A38"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
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
                <div className="absolute left-6 top-6 hidden h-5 w-5 items-center justify-center rounded-full bg-[#D94A38] md:flex shadow-sm">
                  <span className="text-[9px] font-bold text-white">{step.number}</span>
                </div>

                <div className="relative rounded-sm bg-[#F3F0E8] p-6 shadow-[3px_4px_16px_rgba(0,0,0,0.05)] border border-[#171715]/5">
                  {/* Tape */}
                  <div className="absolute -top-2 right-6">
                    <div className="h-4 w-12 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
                  </div>

                  {/* Mobile step number */}
                  <span className="mb-2 inline-block font-mono text-xs font-bold tracking-wider text-[#D94A38] md:hidden">
                    {step.number}
                  </span>

                  <h3 className="relative inline-block text-xl font-bold tracking-tight text-[#171715]">
                    {step.title}
                    <span
                      className="step-highlight absolute inset-0 -mx-1 -my-0.5 origin-left bg-[#F7E84B]/30"
                      style={{ borderRadius: '2px', transformOrigin: 'left' }}
                    />
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#77746D]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
