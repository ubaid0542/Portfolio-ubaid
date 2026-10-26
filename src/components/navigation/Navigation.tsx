'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

      // Find active chapter
      const chapters = document.querySelectorAll('[data-chapter]');
      chapters.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom > 0) {
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

  return (
    <>
      {/* Progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-[#F3F0E8]">
        <div
          className="h-full bg-[#D94A38] transition-none"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Nav bar */}
      <nav className="fixed right-4 top-4 z-50 md:right-6 md:top-6" aria-label="Main navigation">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171715] text-[#FFFDF7] shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38] focus-visible:ring-offset-2"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Navigation panel */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[#171715]/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#F3F0E8] p-8 pt-20 shadow-2xl transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-1">
            {CHAPTER_LABELS.map((chapter, index) => (
              <button
                key={chapter.number}
                onClick={() => scrollToChapter(index)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors hover:bg-[#171715]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38] ${
                  activeChapter === index ? 'bg-[#171715]/5' : ''
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest text-[#77746D]">
                  {chapter.number}
                </span>
                <span className={`text-sm tracking-wide ${
                  activeChapter === index ? 'font-semibold text-[#171715]' : 'text-[#77746D]'
                }`}>
                  {chapter.title}
                </span>
                {activeChapter === index && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#D94A38]" />
                )}
              </button>
            ))}
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <div className="h-px bg-[#171715]/10" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
              Ubaid — Portfolio 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
