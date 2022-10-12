import React from "react";
import "./swiperComponent.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import { GrPrevious, GrNext } from "react-icons/gr";

import PriceCard from "../PriceCard/PriceCard";

const SwiperComponent = () => {
  return (
    <div className="swiperComponent_wrapper">
      <div className="swiper_header_container">
        <div className="swiper_headerText">Featured Shoes</div>
        <div className="swiperBtn_container">
          <button className="swiperBtn left">
            <GrPrevious />
          </button>
          <button className="swiperBtn right">
            <GrNext />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        navigation={true}
        scrollbar={{ hide: true }}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
        <SwiperSlide>
          <PriceCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
