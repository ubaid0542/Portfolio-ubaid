'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChapterHeading from '@/components/motion/ChapterHeading';
import { skillCategories } from '@/data/skills';
import { Cpu, Sparkles, Server, Database, Check } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SkillsChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('frontend');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tabIcons: Record<string, typeof Cpu> = {
    frontend: Cpu,
    animation: Sparkles,
    backend: Server,
    tools: Database,
  };

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section
      ref={sectionRef}
      data-chapter="7"
      className="relative overflow-hidden bg-[#F3F0E8] px-4 py-24 md:px-12 md:py-32"
    >
      {/* Background paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeading number="07" title="The Technical Toolkit" />

        <div className="mt-4 max-w-2xl">
          <p className="text-base leading-relaxed text-[#77746D] md:text-lg">
            A comprehensive, battle-tested stack. Every library and tool listed reflects direct implementation experience in freelance portals, case studies, and interactive applications.
          </p>
        </div>

        {/* Interactive Specimen Box */}
        <div ref={containerRef} className="mt-12 md:mt-16">
          {/* Category Tabs (Physical Folder Tabs) */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#171715]/15 pb-2">
            {skillCategories.map((cat) => {
              const Icon = tabIcons[cat.id] || Cpu;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`group relative flex items-center gap-2 rounded-t-sm px-4 py-3 font-mono text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#FFFDF7] text-[#171715] font-bold shadow-[0_-2px_8px_rgba(23,23,21,0.06)] border-t-2 border-r border-l border-t-[#D94A38] border-r-[#171715]/10 border-l-[#171715]/10 -mb-[9px] z-10'
                      : 'bg-[#F3F0E8] text-[#77746D] hover:text-[#171715] hover:bg-[#FFFDF7]/50'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-[#D94A38]' : 'text-[#77746D]'} />
                  <span>{cat.label}</span>
                  <span className={`hidden sm:inline text-[9px] px-1.5 py-0.5 rounded-sm ${isActive ? 'bg-[#171715] text-[#FFFDF7]' : 'bg-[#171715]/5 text-[#77746D]'}`}>
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Specimen Paper Sheet */}
          <div className="relative rounded-b-sm rounded-tr-sm bg-[#FFFDF7] p-6 md:p-10 shadow-[4px_8px_30px_rgba(23,23,21,0.08)] border border-[#171715]/10">
            {/* Masking tape on top right */}
            <div className="absolute -top-3 right-12 z-20">
              <div className="h-5 w-20 rounded-[1px] bg-[#E8DFC0]/75 shadow-sm" style={{ transform: 'rotate(2deg)' }} />
            </div>

            {/* Specimen Sheet Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#171715]/10 pb-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D94A38]">
                  SPECIMEN DOSSIER · {currentCategory.badge}
                </span>
                <h3 className="mt-1 font-serif text-2xl font-bold text-[#171715]">
                  {currentCategory.label}
                </h3>
              </div>

              <div className="rounded-sm bg-[#F3F0E8] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#77746D] border border-[#171715]/10">
                Verified Production Experience
              </div>
            </div>

            {/* Grid of Specimen Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex flex-col justify-between rounded-sm bg-[#F3F0E8] p-4 shadow-[2px_3px_10px_rgba(23,23,21,0.03)] border border-[#171715]/5 transition-all hover:-translate-y-1 hover:shadow-[3px_5px_16px_rgba(23,23,21,0.08)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#171715]">
                        {skill.name}
                      </span>
                      <span className="rounded-sm bg-[#FFFDF7] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#D94A38] font-semibold border border-[#171715]/10">
                        {skill.level}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-[#77746D]">
                      {skill.usage}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-[#171715]/5 flex items-center gap-1.5 text-[10px] font-mono text-[#171715]">
                    <Check size={12} className="text-[#D94A38]" />
                    <span>Client Ready</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Specimen Note */}
            <div className="mt-8 rounded-sm bg-[#F3F0E8] p-4 border-l-3 border-[#171715] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#77746D]">
              <p>
                <strong>Engineering Guarantee:</strong> Code is strictly modular, TypeScript type-checked, and tested across modern viewports and network throttles.
              </p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#171715] whitespace-nowrap font-semibold">
                0% Fake Metrics · 100% Proven Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
