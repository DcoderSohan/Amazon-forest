import React from "react";
import animalData from "../utils/animalData.json";
import birdsData from "../utils/birdsData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Only import Autoplay module

const SwiperComponent = () => {
  return (
    <div className="p-4 relative max-h-screen">
      <div className="animal w-full h-full">
        {/* Animal Swiper */}
        <div id="animals" className="animals p-10">
          <div className="heading relative -z-10">
            <h1 className="text-3xl font-bold text-center rounded-lg lg:p-10">
              Amazon Rainforest Animals
            </h1>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
            }}
            direction="horizontal"
            modules={[Autoplay]} // Include only Autoplay module
          >
            {animalData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-wrap gap-4 justify-center p-4 text-black">
                  <div className="card flex flex-col text-center p-2 h-auto w-full sm:w-[250px] md:w-[300px] lg:w-[350px] space-y-3 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg w-full h-[150px] object-cover"
                    />
                    <span className="text-[15px]">{item.name}</span>
                    <span className="text-[12px] bg-gray-100 rounded-lg">
                      {item.scientific_name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="birds">
        {/* Bird Swiper */}
        <div id="birds" className="birds p-4">
          <div className="heading">
            <h1 className="text-3xl font-bold text-center rounded-lg p-4">
              Amazon Rainforest Birds
            </h1>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]} // Include only Autoplay module
          >
            {birdsData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-wrap gap-4 justify-center p-4 text-black">
                  <div className="card flex flex-col text-center p-3 h-auto w-full sm:w-[250px] md:w-[300px] lg:w-[350px] space-y-3 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg w-full h-[150px] object-cover"
                    />
                    <span className="text-[15px]">{item.name}</span>
                    <span className="text-[12px] bg-gray-100 rounded-lg">
                      {item.scientific_name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
