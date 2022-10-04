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
          고객님의 나이키 멤버 정보가 이전됩니다. <a className="link_a">동의하기</a>
        </div>
        <div className="sliderbanner_slider_content">
          <a className="link_a">개인정보 처리방침 개편 안내 </a>/<a className="link_a">이용약관 개편 안내</a>
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
