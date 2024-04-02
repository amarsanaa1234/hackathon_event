import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";
import day1 from "./assets/day1.png";

import { Zoom, Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="h-screen w-full font-sans">
      <div className="flex justify-center items-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-7xl font-rampart-one text-green-500">
          Төлөвлөгөө
        </h2>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        modules={[Zoom, Navigation, Pagination]}
        className="h-full xl:w-6/12 md:w-6/12 lg:w-5/12 xl:w-3/12"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={day1} alt="Nature 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={day1} alt="Nature 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={day1} alt="Nature 3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
