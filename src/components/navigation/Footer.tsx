'use client';

import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#171715] px-6 py-12 text-[#FFFDF7] md:px-12 md:py-16">
      {/* Paper grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
              Designed & Developed by
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight">{profile.name}</p>
            <p className="mt-1 text-sm text-[#77746D]">{profile.title}</p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex gap-4">
              {[
                { label: 'Email', href: `mailto:${profile.social.email}` },
                { label: 'LinkedIn', href: profile.social.linkedin },
                { label: 'GitHub', href: profile.social.github },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#77746D] transition-colors hover:text-[#FFFDF7]"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[#FFFDF7]/10 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <button
            onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[10px] uppercase tracking-widest text-[#77746D] transition-colors hover:text-[#FFFDF7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A38]"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
