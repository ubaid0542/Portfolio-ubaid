'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CHAPTER_LABELS } from '@/lib/animations';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      const chapters = document.querySelectorAll('[data-chapter]');
      chapters.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom > 0) {
          setActiveChapter(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (index: number) => {
    const chapters = document.querySelectorAll('[data-chapter]');
    if (chapters[index]) {
      chapters[index].scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToContact = () => {
    const contact = document.querySelector('[data-chapter="9"]');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Editorial Progress Ruler */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-[#171715]/10">
        <div
          className="h-full bg-[#D94A38] transition-none"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating Editorial Top Bar */}
      <header className="fixed top-3 left-3 right-3 z-40 md:top-4 md:left-6 md:right-6 pointer-events-none">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo / Identity stamp */}
          <div className="pointer-events-auto flex items-center gap-2 rounded-sm bg-[#FFFDF7]/95 px-3 py-1.5 shadow-[2px_3px_10px_rgba(23,23,21,0.08)] border border-[#171715]/10 backdrop-blur-sm">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#171715] uppercase">
              UBAID
            </span>
            <span className="text-[#171715]/30">/</span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider text-[#77746D]">
              Interactive Explainer
            </span>
            <span className="hidden md:inline text-[#171715]/30">/</span>
            <span className="hidden md:inline font-mono text-[9px] uppercase tracking-wider text-[#D94A38] font-bold">
              MCA Developer
            </span>
          </div>

          {/* Center: Freelance Status Badge (Directly addresses user requirement) */}
          <div className="pointer-events-auto hidden lg:flex items-center gap-2 rounded-sm bg-[#171715] px-3.5 py-1.5 shadow-[2px_3px_10px_rgba(23,23,21,0.15)] text-[#FFFDF7]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#FFFDF7]">
              Available for Freelance Projects
            </span>
            <span className="font-mono text-[9px] text-[#F7E84B] tracking-wider">
              (Q4 2024 / 2025)
            </span>
          </div>

          {/* Right Action: Discuss Project + Menu Toggle */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={scrollToContact}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-sm bg-[#D94A38] px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-[2px_3px_10px_rgba(217,74,56,0.3)] transition-all hover:bg-[#b83827] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38]"
            >
              <Sparkles size={12} />
              Discuss a Project
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#171715] text-[#FFFDF7] shadow-md transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38]"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Vertical Chapter Tracker (Avi Vashishta's Explainer Style) */}
      <aside
        className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-1.5 pointer-events-auto rounded-sm bg-[#FFFDF7]/90 p-2 shadow-[2px_4px_16px_rgba(23,23,21,0.06)] border border-[#171715]/10 backdrop-blur-sm"
        aria-label="Chapter quick navigation"
      >
        <span className="px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-[#77746D] border-b border-[#171715]/10 mb-1">
          Dossier
        </span>
        {CHAPTER_LABELS.map((ch, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={ch.number}
              onClick={() => scrollToChapter(idx)}
              title={`Jump to ${ch.number} — ${ch.title}`}
              className={`group flex items-center gap-2 px-1.5 py-1 text-left rounded-sm transition-all ${
                isActive
                  ? 'bg-[#171715] text-[#FFFDF7]'
                  : 'text-[#77746D] hover:bg-[#171715]/5 hover:text-[#171715]'
              }`}
            >
              <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-[#F7E84B]' : 'text-[#77746D]'}`}>
                {ch.number}
              </span>
              <span className={`hidden group-hover:inline-block max-w-[120px] truncate font-mono text-[9px] uppercase tracking-wider ${isActive ? 'text-[#FFFDF7]' : 'text-[#171715]'}`}>
                {ch.title}
              </span>
            </button>
          );
        })}
      </aside>

      {/* Fullscreen Navigation Modal Drawer - Only rendered when open to prevent background blur */}
      {isOpen && (
        <div className="fixed inset-0 z-50 transition-all duration-300 pointer-events-auto opacity-100">
          <div
            className="absolute inset-0 bg-[#171715]/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#F3F0E8] p-8 pt-16 shadow-2xl transition-transform duration-300 overflow-y-auto translate-x-0">
            <div className="flex items-center justify-between border-b border-[#171715]/10 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D94A38] font-bold">
                  Table of Contents
                </span>
                <h3 className="font-serif text-xl font-bold text-[#171715]">
                  Ubaid&apos;s Portfolio Explainer
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-sm bg-[#171715] p-2 text-white hover:bg-[#D94A38]"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-6 space-y-1">
              {CHAPTER_LABELS.map((chapter, index) => {
                const isActive = activeChapter === index;
                return (
                  <button
                    key={chapter.number}
                    onClick={() => scrollToChapter(index)}
                    className={`flex w-full items-center justify-between rounded-sm px-3.5 py-2.5 text-left transition-all ${
                      isActive
                        ? 'bg-[#171715] text-[#FFFDF7] font-semibold'
                        : 'hover:bg-[#171715]/5 text-[#171715]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#F7E84B]' : 'text-[#77746D]'}`}>
                        {chapter.number}
                      </span>
                      <span className="text-sm font-sans tracking-wide">
                        {chapter.title}
                      </span>
                    </div>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D94A38]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-sm bg-[#FFFDF7] p-5 border border-[#171715]/10 shadow-sm">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D94A38] font-bold">
                Direct Contact
              </span>
              <p className="mt-1 font-serif text-sm font-semibold text-[#171715]">
                Looking to hire for a freelance project?
              </p>
              <button
                onClick={scrollToContact}
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-sm bg-[#D94A38] py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b83827] transition-colors"
              >
                Discuss a Project
                <ArrowUpRight size={14} />
              </button>

              <div className="mt-4 pt-3 border-t border-[#171715]/10 flex flex-wrap gap-3 font-mono text-[11px]">
                <a href="https://wa.me/918090507639" target="_blank" rel="noopener noreferrer" className="text-[#128C7E] font-bold hover:underline">
                  WhatsApp: 8090507639
                </a>
                <a href="mailto:mdubaid8090@gmail.com" className="text-[#171715] hover:text-[#D94A38] hover:underline">
                  mdubaid8090@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-mono text-[#77746D]">
              <a href="https://github.com/ubaid0542" target="_blank" rel="noopener noreferrer" className="hover:text-[#171715] hover:underline">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/mdubaid8090" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] hover:underline">
                LinkedIn ↗
              </a>
              <a href="https://instagram.com/ubaidkhan__01" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] hover:underline">
                Instagram ↗
              </a>
            </div>

            <div className="mt-6 border-t border-[#171715]/10 pt-4 flex items-center justify-between text-[#77746D]">
              <span className="font-mono text-[10px] uppercase tracking-widest">
                Varanasi, UP, India
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-[#D94A38]">
                MCA Developer
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
