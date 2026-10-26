'use client';

import { forwardRef, ReactNode } from 'react';

interface HighlighterProps {
  children: ReactNode;
  className?: string;
  color?: 'yellow' | 'red';
  active?: boolean;
}

const Highlighter = forwardRef<HTMLSpanElement, HighlighterProps>(
  ({ children, className = '', color = 'yellow', active = true }, ref) => {
    const bgColor = color === 'yellow'
      ? 'bg-[#F7E84B]/40'
      : 'bg-[#D94A38]/20';

    return (
      <span ref={ref} className={`relative inline ${className}`}>
        <span
          className={`absolute inset-0 -mx-1 -my-0.5 ${bgColor} transition-all duration-500`}
          style={{
            transform: active ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            borderRadius: '2px',
          }}
        />
        <span className="relative">{children}</span>
      </span>
    );
  }
);

Highlighter.displayName = 'Highlighter';

export default Highlighter;
