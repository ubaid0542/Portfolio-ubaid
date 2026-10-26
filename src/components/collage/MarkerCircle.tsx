'use client';

import { forwardRef } from 'react';

interface MarkerCircleProps {
  className?: string;
  color?: 'red' | 'yellow';
  size?: number;
}

const MarkerCircle = forwardRef<SVGSVGElement, MarkerCircleProps>(
  ({ className = '', color = 'red', size = 80 }, ref) => {
    const strokeColor = color === 'red' ? '#D94A38' : '#F7E84B';

    return (
      <svg
        ref={ref}
        className={`pointer-events-none ${className}`}
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="40"
          cy="40"
          rx="34"
          ry="30"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="200"
          fill="none"
          style={{ transform: 'rotate(-5deg)', transformOrigin: 'center' }}
        />
      </svg>
    );
  }
);

MarkerCircle.displayName = 'MarkerCircle';

export default MarkerCircle;
