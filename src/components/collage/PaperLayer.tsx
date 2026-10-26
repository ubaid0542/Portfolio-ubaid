'use client';

import { forwardRef, ReactNode } from 'react';

interface PaperLayerProps {
  children: ReactNode;
  className?: string;
  variant?: 'warm' | 'white' | 'aged' | 'newspaper';
  rotation?: number;
  shadow?: boolean;
  torn?: boolean;
  tape?: boolean;
  foldedCorner?: boolean;
}

const variantStyles = {
  warm: 'bg-[#F3F0E8]',
  white: 'bg-[#FFFDF7]',
  aged: 'bg-[#E8E2D4]',
  newspaper: 'bg-[#F0EDE4]',
};

const PaperLayer = forwardRef<HTMLDivElement, PaperLayerProps>(
  ({ children, className = '', variant = 'warm', rotation = 0, shadow = true, torn = false, tape = false, foldedCorner = false }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative ${variantStyles[variant]} ${className}`}
        style={{
          transform: rotation ? `rotate(${rotation}deg)` : undefined,
        }}
      >
        {/* Paper grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Shadow */}
        {shadow && (
          <div className="pointer-events-none absolute inset-0 shadow-[4px_4px_20px_rgba(0,0,0,0.08)]" />
        )}

        {/* Torn edge effect */}
        {torn && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
            <svg className="absolute bottom-0 w-full" viewBox="0 0 400 16" preserveAspectRatio="none">
              <path
                d="M0,8 Q10,2 20,8 T40,8 T60,8 T80,8 T100,8 T120,8 T140,8 T160,8 T180,8 T200,8 T220,8 T240,8 T260,8 T280,8 T300,8 T320,8 T340,8 T360,8 T380,8 T400,8 L400,16 L0,16 Z"
                fill="currentColor"
                className="text-[#F3F0E8]"
              />
            </svg>
          </div>
        )}

        {/* Tape decoration */}
        {tape && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="h-6 w-16 rounded-sm bg-[#E8DFC0]/70 shadow-sm" style={{ transform: 'rotate(-2deg)' }} />
          </div>
        )}

        {/* Folded corner */}
        {foldedCorner && (
          <div className="absolute right-0 top-0 h-8 w-8 overflow-hidden">
            <div
              className="absolute right-0 top-0 h-12 w-12 bg-[#D4CFC2]"
              style={{
                transform: 'rotate(45deg) translate(30%, -70%)',
                boxShadow: '-2px 2px 4px rgba(0,0,0,0.1)',
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

PaperLayer.displayName = 'PaperLayer';

export default PaperLayer;
