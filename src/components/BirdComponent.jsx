import React, { useState, useEffect } from "react";
import birdsData from "../utils/birdsData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const BirdComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch({ birdsData })
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="birds p-4">
        <div className="heading">
          <h1 className="text-3xl font-bold text-center rounded-lg p-4">
            Amazon Rainforest Birds
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
          {birdsData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-wrap gap-4 justify-center p-8 text-black border-1 border-gray-600">
                <div className="card flex flex-col flex-wrap text-center p-2 h-[300px] w-[250px] space-y-3">
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
    </div>
  );
};

export default BirdComponent;
