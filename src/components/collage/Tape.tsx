'use client';

interface TapeProps {
  className?: string;
  rotation?: number;
  variant?: 'yellow' | 'white' | 'clear';
  width?: string;
}

const variantColors = {
  yellow: 'bg-[#E8DFC0]/70',
  white: 'bg-white/40',
  clear: 'bg-[#D4CFC2]/30',
};

export default function Tape({ className = '', rotation = -2, variant = 'yellow', width = 'w-16' }: TapeProps) {
  return (
    <div
      className={`${width} h-5 rounded-[1px] ${variantColors[variant]} shadow-[0_1px_3px_rgba(0,0,0,0.06)] ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
}
