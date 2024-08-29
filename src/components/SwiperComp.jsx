// SwiperComponent.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      image: "https://via.placeholder.com/150",
      description: "Description for card 1",
    },
    {
      id: 2,
      title: "Card 2",
      image: "https://via.placeholder.com/150",
      description: "Description for card 2",
    },
    // Add more cards as needed
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 1500,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide className="bg-green-600">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-green-600">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-green-600">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-green-600">Slide 4</SwiperSlide>
      <SwiperSlide className="bg-green-600">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-green-600">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-green-600">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-green-600">Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
