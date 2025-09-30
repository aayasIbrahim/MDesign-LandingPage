"use client";
import { HiArrowUpRight } from "react-icons/hi2";
import React from "react";
import Image from "next/image";
import ConfettiBackground from "./ConfettiBackground";





export default function HeroSection() {
  return (
    // **KEY CHANGE 1**: Add 'relative' and 'overflow-hidden' to the main section
    <section className="relative overflow-hidden  py-20 "> 
        
      {/* Insert the Background Dots Component */}
      <ConfettiBackground/>

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