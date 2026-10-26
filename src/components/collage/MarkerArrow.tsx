'use client';

import { forwardRef } from 'react';

interface MarkerArrowProps {
  className?: string;
  direction?: 'right' | 'down' | 'left' | 'up';
  color?: string;
  size?: number;
}

const MarkerArrow = forwardRef<SVGSVGElement, MarkerArrowProps>(
  ({ className = '', direction = 'right', color = '#D94A38', size = 60 }, ref) => {
    const rotations = { right: 0, down: 90, left: 180, up: -90 };

    return (
      <svg
        ref={ref}
        className={`pointer-events-none ${className}`}
        width={size}
        height={size * 0.5}
        viewBox="0 0 60 30"
        fill="none"
        aria-hidden="true"
        style={{ transform: `rotate(${rotations[direction]}deg)` }}
      >
        <path
          d="M4,15 Q15,14 25,15 T45,15"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="60"
          strokeDashoffset="60"
        />
        <path
          d="M42,8 L50,15 L42,22"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="30"
          strokeDashoffset="30"
        />
      </svg>
    );
  }
);

MarkerArrow.displayName = 'MarkerArrow';

export default MarkerArrow;
