import React from "react";
import animalData from "../utils/animalData.json";
import birdsData from "../utils/birdsData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  const swiperSettings = {
    spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    speed: 7000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    allowTouchMove: true,
    className: "light-premium-swiper",
  };

  const Card = ({ item }) => (
    <div className="relative group w-[80vw] max-w-[900px] h-[280px] md:h-[400px] overflow-hidden rounded-[2.5rem] bg-white border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(22,163,74,0.15)]">
      <div className="flex flex-row h-full">
        
        {/* Left: Content Area (Light Theme) */}
        <div className="w-1/2 flex flex-col justify-center p-8 md:p-14 z-10 bg-white">
          <span className="text-green-600 font-bold text-xs tracking-[0.2em] uppercase mb-3">
            Species Archive
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-green-700 transition-colors">
            {item.name}
          </h3>
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[2px] bg-green-200" />
            <p className="text-gray-500 italic font-medium text-sm md:text-lg">
              {item.scientific_name}
            </p>
          </div>
        </div>

        {/* Right: Image Area with a modern "Cut-out" look */}
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            loading="lazy"
          />
          {/* Subtle Inner Shadow to blend image with text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent w-32" />
        </div>
      </div>

      {/* Modern Badge - Floating Top Right */}
      <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-bold text-green-800 uppercase tracking-tighter">View Details</span>
      </div>
    </div>
  );

  return (
    <div className="bg-white py-16 overflow-hidden">
      {/* Section One: Animals */}
      <div className="mb-24">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900">
            Wild <span className="font-serif italic font-semibold text-green-900">Encounters</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full" />
        </div>

        <Swiper {...swiperSettings}>
          {animalData.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto py-10">
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Section Two: Birds */}
      <div>
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900">
            Avian <span className="font-serif italic font-semibold text-emerald-800">Majesty</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Moving in opposite direction for visual interest */}
        <Swiper {...swiperSettings} dir="rtl">
          {birdsData.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto py-10">
              <div dir="ltr">
                <Card item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global CSS for Smoothness */}
      <style>{`
        .light-premium-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .light-premium-swiper {
          overflow: visible !important;
        }
      `}</style>
    </div>
  );
};

export default SwiperComponent;