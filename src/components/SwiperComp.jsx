import React, { useState, useEffect } from "react";
import animalData from "./../utils/animalData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch({ animalData })
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="animals p-10">
      <div className="heading relative -z-10">
        <h1 className="text-3xl font-bold text-center rounded-lg p-10">
          Amazon Rainforest Animals
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
      >
        {animalData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-wrap gap-4 justify-center p-8 text-black border-1 border-gray-600">
              <div className="card flex flex-col text-center p-2 h-[300px] w-[250px] space-y-3">
                <img
                  src={item.image}
                  alt="image"
                  className="rounded-lg h-[100px] object-cover"
                />
                <span className="text-[15px]">{item.name}</span>
                <span className="text-[12px] bg-gray-400 rounded-lg">
                  {item.scientific_name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
