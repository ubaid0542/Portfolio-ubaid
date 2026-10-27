'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { processSteps, clientAssurances } from '@/data/process';
import { profile } from '@/data/profile';
import {
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Layers,
  Search,
  Code2,
  Rocket,
  Headphones,
  Check,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const assurancesRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'strategy' | 'engineering' | 'launch'>('all');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      stepRefs.current.forEach((ref) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      });

      if (assurancesRef.current) {
        gsap.fromTo(
          assurancesRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            scrollTrigger: {
              trigger: assurancesRef.current,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  const scrollToContact = () => {
    const el = document.querySelector('[data-chapter="9"]');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(profile.social.whatsapp, '_blank');
  };

  const filteredSteps = processSteps.filter((step) => {
    if (activeFilter === 'strategy') return ['01', '02', '03'].includes(step.number);
    if (activeFilter === 'engineering') return ['04', '05'].includes(step.number);
    if (activeFilter === 'launch') return ['06', '07', '08'].includes(step.number);
    return true;
  });

  return (
    <section
      ref={sectionRef}
      data-chapter="6"
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
        <ChapterHeading number="06" title="How I Build For Clients" />

        {/* Section Header & Subtitle */}
        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171715]/10 pb-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D94A38] font-bold">
              ● The 8-Stage Full Stack Engineering Lifecycle
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#171715]">
              From Project Understanding to Technical SEO, Edge Deployment & Long-Term Website Care.
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#77746D]">
              A predictable, milestone-driven development methodology. Every stage has defined activities, client review checkpoints, and concrete tangible deliverables. No surprises, no black-box code, and zero agency bloat.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#171715] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#FFFDF7] font-semibold">
              <Sparkles size={12} className="text-[#F7E84B]" />
              8 Defined Stages
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#D94A38]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#D94A38] font-bold border border-[#D94A38]/20">
              Turnaround: 2 — 3 Weeks
            </span>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#171715]/10 pb-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77746D] mr-2">
            Filter View:
          </span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
              activeFilter === 'all'
                ? 'bg-[#171715] text-[#FFFDF7] font-bold shadow-sm'
                : 'bg-[#F3F0E8] text-[#77746D] hover:text-[#171715]'
            }`}
          >
            All 8 Stages
          </button>
          <button
            onClick={() => setActiveFilter('strategy')}
            className={`rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
              activeFilter === 'strategy'
                ? 'bg-[#171715] text-[#FFFDF7] font-bold shadow-sm'
                : 'bg-[#F3F0E8] text-[#77746D] hover:text-[#171715]'
            }`}
          >
            Stage 01–03: Strategy & Design
          </button>
          <button
            onClick={() => setActiveFilter('engineering')}
            className={`rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
              activeFilter === 'engineering'
                ? 'bg-[#171715] text-[#FFFDF7] font-bold shadow-sm'
                : 'bg-[#F3F0E8] text-[#77746D] hover:text-[#171715]'
            }`}
          >
            Stage 04–05: Code & QA
          </button>
          <button
            onClick={() => setActiveFilter('launch')}
            className={`rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
              activeFilter === 'launch'
                ? 'bg-[#171715] text-[#FFFDF7] font-bold shadow-sm'
                : 'bg-[#F3F0E8] text-[#77746D] hover:text-[#171715]'
            }`}
          >
            Stage 06–08: SEO, Launch & Handling
          </button>
        </div>

        {/* The 8 Stages Timeline */}
        <div className="relative mt-12">
          {/* Vertical Timeline Guide for Desktop */}
          <div className="absolute left-4 sm:left-5 top-4 bottom-8 w-0.5 border-l-2 border-dashed border-[#D94A38]/35 hidden md:block pointer-events-none" />

          <div className="space-y-10 md:space-y-12">
            {filteredSteps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="relative md:pl-16"
              >
                {/* Numbered Step Stamp on Timeline */}
                <div className="absolute left-1.5 top-6 hidden h-7 w-7 items-center justify-center rounded-full bg-[#171715] text-[#F7E84B] md:flex shadow-sm">
                  <span className="font-mono text-xs font-bold">{step.number}</span>
                </div>

                {/* Dossier Card */}
                <div className="relative rounded-sm bg-[#F3F0E8] p-6 sm:p-8 shadow-[3px_5px_20px_rgba(23,23,21,0.05)] border border-[#171715]/10">
                  {/* Masking Tape */}
                  <div className="absolute -top-2.5 right-8">
                    <div
                      className="h-4 w-16 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm"
                      style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2.5}deg)` }}
                    />
                  </div>

                  {/* Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#171715]/10 pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-sm bg-[#171715] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#FFFDF7] font-bold">
                        STAGE {step.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#D94A38] font-bold">
                        {step.phase}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                      <span className="rounded-sm bg-[#FFFDF7] px-2 py-0.5 text-[#171715] border border-[#171715]/10 font-semibold">
                        {step.highlightTag}
                      </span>
                      <div className="flex items-center gap-1 text-[#77746D]">
                        <Calendar size={12} className="text-[#D94A38]" />
                        <span>{step.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-3.5 font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#171715]">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#D94A38] font-medium">
                    {step.subtitle}
                  </p>

                  {/* Deep Narrative Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[#171715]">
                    {step.description}
                  </p>

                  {/* Concrete Key Activities Checklist */}
                  <div className="mt-5 rounded-sm bg-[#FFFDF7] p-4 sm:p-5 border border-[#171715]/10 shadow-sm">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#77746D] font-bold block mb-3">
                      Key Activities & Client Checkpoints:
                    </span>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {step.activities.map((activity, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-[#171715]">
                          <CheckCircle2 size={13} className="text-[#D94A38] shrink-0 mt-0.5" />
                          <span className="leading-snug">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tangible Deliverable Banner */}
                  <div className="mt-4 pt-3.5 border-t border-[#171715]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex flex-wrap items-center gap-2 text-[#77746D]">
                      <span className="font-bold text-[#D94A38] uppercase text-[10px] tracking-wider">
                        Deliverable:
                      </span>
                      <span className="text-[#171715] font-semibold">
                        {step.deliverable}
                      </span>
                    </div>
                    <span className="rounded-sm bg-emerald-50 text-emerald-800 px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold border border-emerald-200">
                      Verified Milestone ✓
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Guarantees & Website Handling Agreement Card */}
        <div
          ref={assurancesRef}
          className="relative mt-16 rounded-sm bg-[#171715] p-6 sm:p-10 text-[#FFFDF7] shadow-xl overflow-hidden"
        >
          {/* Subtle paper grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#FFFDF7]/15 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F7E84B] font-bold">
                <ShieldCheck size={16} />
                <span>The Ubaid Engineering Commitment</span>
              </div>
              <span className="rounded-sm bg-[#FFFDF7]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#FFFDF7]">
                Zero-Risk Client Contract
              </span>
            </div>

            <h4 className="mt-4 font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              You Own 100% of the Code. Plus 30 Days of Complimentary Website Care.
            </h4>
            <p className="mt-2 text-sm text-[#FFFDF7]/70 max-w-3xl leading-relaxed">
              When working with me, you are not trapped in a proprietary CMS, and you never get left stranded post-launch. You receive clean, documented source code, hosting credentials, and ongoing website handling to ensure maximum uptime, speed, and continuous leads.
            </p>

            {/* 4 Pillars Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {clientAssurances.map((item) => (
                <div
                  key={item.title}
                  className="rounded-sm bg-[#FFFDF7]/5 p-4 border border-[#FFFDF7]/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#D94A38] font-bold">
                      {item.badge}
                    </span>
                    <h5 className="mt-1 font-serif text-base font-bold text-[#FFFDF7]">
                      {item.title}
                    </h5>
                    <p className="mt-1.5 text-xs text-[#FFFDF7]/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#FFFDF7]/10 flex items-center gap-1.5 font-mono text-[9px] text-[#F7E84B]">
                    <Check size={11} />
                    <span>Included on Every Project</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote & CTA Action Row */}
            <div className="mt-8 pt-6 border-t border-[#FFFDF7]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="font-serif italic text-xs sm:text-sm text-[#FFFDF7]/70">
                &ldquo;You work directly with me from the first call to production deployment. No account managers, no junior handoffs.&rdquo;
                <span className="block mt-1 font-mono text-[10px] uppercase tracking-wider text-[#F7E84B] not-italic">
                  — Ubaid, Full Stack Web Developer (Varanasi, India)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-2 rounded-sm bg-[#128C7E] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-105 transition-transform"
                >
                  <MessageSquare size={13} />
                  Chat on WhatsApp
                </button>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 rounded-sm bg-[#D94A38] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b83827] hover:scale-105 transition-all"
                >
                  Start at Stage 01
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
