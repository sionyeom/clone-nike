import React from "react";
import "./apparelComponent.scss";
import ImgCard from "../ImgComponent/ImgCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";

const ApparelComponent = () => {
  return (
    // <div className="scroll_box">
    //   <div className="items">
    //     <div className="item">
    //       <ImgCard
    //         title={"재킷 & 베스트"}
    //         imgSrc={"/assets/apparel/img/apparel_1.webp"}
    //       />
    //     </div>
    //     <div className="item">
    //       <ImgCard
    //         title={"후디 & 크루"}
    //         imgSrc={"/assets/apparel/img/apparel_2.webp"}
    //       />
    //     </div>
    //     <div className="item">
    //       <ImgCard
    //         title={"팬츠 & 타이즈"}
    //         imgSrc={"/assets/apparel/img/apparel_3.webp"}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="scroll_box">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        scrollbar={{ hide: true }}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImgCard
            title={"팬츠 & 타이즈"}
            imgSrc={"/assets/apparel/img/apparel_3.webp"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImgCard
            title={"후디 & 크루"}
            imgSrc={"/assets/apparel/img/apparel_2.webp"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImgCard
            title={"팬츠 & 타이즈"}
            imgSrc={"/assets/apparel/img/apparel_3.webp"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ApparelComponent;
