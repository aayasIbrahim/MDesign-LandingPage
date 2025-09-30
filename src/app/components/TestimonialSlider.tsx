"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

type Review = {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Amir Uddin",
    role: "UX Designer",
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    avatar: "/images/amir-uddin.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Salim Ahmed",
    role: "UI Designer",
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    avatar: "/images/salim-ahmed.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Guy Hawkins",
    role: "UX Designer",
    text: "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
    avatar: "/images/guy-hawkins.png",
    rating: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex text-[#FE8B75] mb-4">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // state to ensure refs are set after mount
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 relative overflow-hidden my-[188px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="mb-4 md:mb-0">
          <span className="text-green-500 border border-green-500 rounded-full px-3 py-1 text-sm font-semibold">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Our Customer Say <span className="text-green-500">Something About Us</span>
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button
            ref={prevRef}
            className="w-10 h-10 bg-green-400 text-white flex items-center justify-center rounded-md shadow-lg hover:bg-green-500 transition"
          >
            &larr;
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 bg-green-400 text-white flex items-center justify-center rounded-md shadow-lg hover:bg-green-500 transition"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      {navigationReady && (
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="w-full pb-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-transparent hover:border-green-500 transition duration-300 h-full flex flex-col justify-between">
                <StarRating count={review.rating} />
                <p className="text-gray-600 text-base mb-6">{review.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
