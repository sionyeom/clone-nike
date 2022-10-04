import React from "react";
import "./sliderBanner.scss";
import { VscClose, VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import Slider from "react-slick";

const SliderBanner = () => {
  const settings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <VscChevronRight />,
    prevArrow: <VscChevronLeft />
  };

  return (
    <div className="sliderbanner_conatiner">
      <div className="sliderbanner_close_btn">
        <VscClose />
      </div>
      <Slider {...settings}>
        <div className="sliderbanner_slider_content">
          고객님의 나이키 정보가 이전됩니다. <a>동의하기</a>
        </div>
        <div className="sliderbanner_slider_content">2</div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
