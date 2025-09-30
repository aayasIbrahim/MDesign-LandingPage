// src/components/Skill.tsx
import React from "react";
import Image from "next/image";

// Skill data
const SKILLS = [
  {
    id: 1,
    icon: "/skill/skill-icon-1.png",
    title: "Visual Design",
    description: "Create user interface design with unique & modern ideas",
  },
  {
    id: 2,
    icon: "/skill/skill-icon-2.png",
    title: "Design Prototype",
    description: "Create advance design prototype with Figma apps.",
  },
  {
    id: 3,
    icon: "/skill/skill-icon-3.png",
    title: "UX Research",
    description: "Create digital user products with updated ideas",
  },
];

export default function Skill() {
  return (
    <section className="mt-[100px] px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Right side - Text & Button */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="w-[95px] h-[41px] border border-green-500 rounded-full flex justify-center items-center">
            <p className="font-inter font-medium text-[20px] leading-[145%] text-green-400">
              My Skills
            </p>
          </div>
          <h1 className="font-inter font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[40px] sm:leading-[48px] md:leading-[54px] mt-[10px]">
            Why Hire Me For Your Next{" "}
            <span className="text-green-400">Project?</span>
          </h1>
          <p className="font-inter font-normal text-sm sm:text-base leading-[150%] mt-[24px]">
            I’m specialist in UI/UX Design. My passion is designing & solving
            problems through user experience and research.
          </p>
          <div className="w-[138px] h-[56px] bg-green-400 rounded-[12px] mt-[40px] flex justify-center items-center">
            <a
              href=""
              className="font-inter font-medium text-sm sm:text-base leading-[150%] text-white"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Left side - Skill Cards */}
        <div className="lg:w-1/2 flex flex-wrap gap-6 justify-center lg:justify-start">
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="shadow-lg p-6 flex-1 min-w-[200px] sm:min-w-[220px] rounded-lg"
            >
              <Image
                src={skill.icon}
                alt={skill.title}
                width={28}
                height={28}
              />
              <h2 className="font-poppins font-semibold text-[18px] sm:text-[20px] leading-[20px] mt-[16px]">
                {skill.title}
              </h2>
              <p className="font-inter font-normal text-[12px] sm:text-[14px] leading-[150%] mt-[12px]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
