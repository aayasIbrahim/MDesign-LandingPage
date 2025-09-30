"use client";
import { HiArrowUpRight } from "react-icons/hi2";
import React from "react";
import Image from "next/image";

// --- Dot Configuration Data (Updated with more colors and dots) ---
const DOTS = [
  ['bg-red-500', 'w-5 h-5', 'top-20 left-10'],
  ['bg-green-500', 'w-5 h-5', 'top-38 left-32'],
  ['bg-blue-500', 'w-5 h-5', 'top-23 left-50'],
  ['bg-yellow-500', 'w-6 h-6', 'top-20 left-80'],
  ['bg-purple-500', 'w-2 h-2', 'top-22 left-48'],
  ['bg-pink-400', 'w-3 h-3', 'top-24 left-64'],
  ['bg-indigo-500', 'w-8 h-8', 'top-42 left-20'],
  ['bg-teal-400', 'w-5 h-5', 'top-30 right-0'],
  ['bg-orange-400', 'w-4 h-4', 'top-10 right-20'],
  ['bg-lime-400', 'w-3 h-3', 'top-24 right-5'],
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

// --- Sub Component for Dots (to keep main logic clean) ---
const ConfettiBackground = () => (
    // This div needs to cover the entire HeroSection container
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            animate-float /* Relies on keyframes in globals.css */
          `}
          style={{ 
              animationDelay: `${index * 1}s`,
          }}
        />
      ))}
    </div>
);


export default function HeroSection() {
  return (
    // **KEY CHANGE 1**: Add 'relative' and 'overflow-hidden' to the main section
    <section className="relative overflow-hidden bg-white py-20"> 
        
      {/* Insert the Background Dots Component */}
      <ConfettiBackground />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-12 relative z-10"> {/* **KEY CHANGE 2**: Add z-10 for content to appear above dots */}
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Welcome Tag */}
          <div className="w-[99px] h-[42px] border border-2 border-green-500 rounded-full mx-auto md:mx-0">
            <p className="font-inter text-green-500 font-medium text-lg leading-none tracking-normal text-center mt-2">
              Welcome
            </p>
          </div>
          
          {/* Title */}
          <h1 className="font-inter text-black mt-2 font-semibold text-5xl md:text-[58px] leading-tight tracking-normal">
            I have{" "}
            <span className="font-inter font-bold text-green-500">
              Creative Design
            </span>{" "}
            Experience
          </h1>
          
          {/* Description */}
          <p className="font-inter font-normal text-base leading-relaxed tracking-normal mt-6 mb-10 text-gray-600">
            I’m Tanvir, a creative Product Designer. I’ve been helping
            businesses to solve their problems with my design for 2 years.
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-green-500 text-white font-medium text-base py-4 px-6 rounded-xl hover:bg-green-600 transition">
              Contract me
            </button>

            <a 
              href="#portfolio" 
              className="text-black font-medium text-base py-4 px-6 flex items-center gap-2 hover:text-green-500 transition"
            >
              View Portfolio 
              <HiArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          {/* Decorative Green Block (Behind Image) */}
          <div className="absolute w-4/5 h-full  -right-10 -top-10 z-0 hidden lg:block"></div>

          {/* Decorative Black Frame (Around Image) */}
          <div className="absolute w-4/5 h-[calc(100%+20px)] b"></div>
            
          {/* Main Image */}
          <Image
            src="/Hero.png" // put your image in public folder
            alt="Hero Image"
            width={450}
            height={450}
            className="rounded-xl object-cover  z-10" // z-10 ensures image is above green block
          />
        </div>
      </div>
    </section>
  );
}