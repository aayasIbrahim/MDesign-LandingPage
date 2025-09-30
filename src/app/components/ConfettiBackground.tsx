"use client";
import React, { FC } from "react";

interface ConfettiBackgroundProps {
  className?: string; // optional extra classes for parent
}

const ConfettiBackground: FC<ConfettiBackgroundProps> = ({ className = "" }) => {
  // --- DOTS DATA ---
  const DOTS: [string, string, string][] = [
    ['bg-red-500', 'w-5 h-5', 'top-20 left-10'],
    ['bg-green-500', 'w-5 h-5', 'top-38 left-32'],
    ['bg-blue-500', 'w-5 h-5', 'top-23 left-50'],
    ['bg-yellow-500', 'w-6 h-6', 'top-20 left-90'],
    ['bg-purple-500', 'w-2 h-2', 'top-22 left-48'],
    ['bg-pink-400', 'w-3 h-3', 'top-24 left-64'],
    ['bg-indigo-500', 'w-8 h-8', 'top-42 left-20'],
    ['bg-teal-400', 'w-5 h-5', 'top-30 right-0'],
    ['bg-orange-400', 'w-4 h-4', 'top-10 right-20'],
    ['bg-lime-400', 'w-3 h-3', 'top-24 right-12'],
    ['bg-cyan-400', 'w-6 h-6', 'top-1/2 left-1/4'],
    ['bg-violet-500', 'w-4 h-4', 'top-[60%] right-[30%]'],
    ['bg-fuchsia-500', 'w-4 h-4', 'bottom-8 left-8'],
    ['bg-rose-400', 'w-4 h-4', 'bottom-8 left-40'],
    ['bg-emerald-400', 'w-3 h-3', 'bottom-16 right-10'],
    ['bg-sky-400', 'w-5 h-5', 'bottom-0 right-32'],
    ['bg-purple-300', 'w-4 h-4', 'top-32 left-24'],
    ['bg-pink-500', 'w-8 h-8', 'top-20 right-12'],
    ['bg-green-300', 'w-6 h-6', 'bottom-12 left-20'],
    ['bg-yellow-300', 'w-9 h-9', 'bottom-6 right-24'],
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {DOTS.map(([color, size, position], index) => (
        <div
          key={index}
          className={`
            absolute 
            ${color} 
            ${size} 
            ${position} 
            rounded-full 
            opacity-75 
            mix-blend-multiply 
            transition-transform duration-1000 
            animate-float
          `}
          style={{ animationDelay: `${index * 0.5}s` }}
        />
      ))}
    </div>
  );
};

export default ConfettiBackground;
