// src/components/PortfolioSection.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Projects data
const projects = [
  { id: 1, title: "App Promotion", src: "/images/project-1.png" },
  { id: 2, title: "Healthy Food", src: "/images/project-2.png" },
  { id: 3, title: "Dream Furniture", src: "/images/project-3.png" },
  { id: 4, title: "Another Project", src: "/images/project-1.png" },
];

export default function PortfolioSection() {
  return (
    <section className="mt-[188px] px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-[55%]">
          <div className="w-[95px] h-[41px] border border-green-500 rounded-[75%] flex justify-center items-center">
            <p className="font-inter font-medium text-[20px] leading-[145%] tracking-normal text-green-400">
              Protfolio
            </p>
          </div>

          <h1 className="font-inter font-semibold text-[40px] leading-[54px] tracking-normal mt-[10px] pe-[10px]">
            My Creative Works Latest
            <span className="text-green-400"> Project?</span>
          </h1>

          <p className="font-inter font-normal text-base leading-[150%] tracking-normal mt-[24px]">
            I have selected and mentioned here some of my latest projects to share with you.
          </p>

          <div className="w-[138px] h-[56px] bg-green-400 rounded-[12px] mt-[40px] flex justify-center items-center cursor-pointer hover:bg-green-500 transition">
            <a
              href="#"
              className="font-inter font-medium text-base leading-[150%] tracking-normal text-white"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Column: Swiper */}
        <div className="lg:w-[50%]  relative">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1.5}
            spaceBetween={30}
            loop={true}
            navigation={true}  // <-- default navigation enabled
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
            className="h-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={project.src}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                    width={325}
                    height={447}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
