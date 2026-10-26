'use client';

import { forwardRef } from 'react';
import Image from 'next/image';

interface HalftonePortraitProps {
  className?: string;
  src?: string;
  alt?: string;
}

const HalftonePortrait = forwardRef<HTMLDivElement, HalftonePortraitProps>(
  ({ className = '', src = '/images/ubaid-profile.png', alt = 'Ubaid — Developer Portrait' }, ref) => {
    return (
      <div ref={ref} className={`relative ${className}`}>
        {/* Outer paper cut-out frame */}
        <div className="relative overflow-hidden rounded-sm bg-[#FFFDF7] p-3 shadow-[6px_8px_24px_rgba(0,0,0,0.12)]"
          style={{ transform: 'rotate(-1.5deg)' }}
        >
          {/* Irregular white border simulation */}
          <div className="relative overflow-hidden" style={{ clipPath: 'polygon(1% 0%, 99% 1%, 100% 98%, 2% 100%)' }}>
            {/* The portrait image with halftone-like treatment */}
            <div className="relative aspect-[3/4] w-full overflow-hidden" style={{ position: 'relative' }}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 200px, 300px"
                className="object-cover grayscale contrast-125"
                priority
              />
              {/* Halftone dot overlay */}
              <div
                className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, #171715 1px, transparent 1px)`,
                  backgroundSize: '4px 4px',
                }}
              />
              {/* Print texture overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </div>
          
          {/* Small caption under photo */}
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-[#77746D]">
            Fig. 01 — Portrait
          </p>
        </div>

        {/* Tape on top */}
        <div className="absolute -top-2 left-1/2 z-10 -translate-x-1/2">
          <div className="h-5 w-14 rounded-[1px] bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(3deg)' }} />
        </div>
      </div>
    );
  }
);

HalftonePortrait.displayName = 'HalftonePortrait';

export default HalftonePortrait;
