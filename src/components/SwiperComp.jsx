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
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 1500,
      }}
      modules={[Autoplay]}
    >
      {animalData.map((item,i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-wrap gap-4 justify-center p-8 text-black">
           <div className="card">
            <img src={item.image} alt="image" />
            <span>{item.name}</span>
            <span>{item.scientific_name}</span>
           </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
