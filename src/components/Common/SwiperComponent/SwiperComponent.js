import React, { useRef } from "react";
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="swiperComponent_wrapper">
      <div className="swiper_header_container">
        <div className="swiper_headerText">Featured Shoes</div>
        <div className="swiperBtn_container">
          <button className="swiperBtn left" ref={prevRef}>
            <GrPrevious />
          </button>
          <button className="swiperBtn right" ref={nextRef}>
            <GrNext />
          </button>
        </div>
      </div>
      <Swiper
        onInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={3}
        spaceBetween={10}
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
