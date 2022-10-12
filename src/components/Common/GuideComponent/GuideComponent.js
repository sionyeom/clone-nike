import React from "react";
import "./guideComponent.scss";
import ImgCard from "../ImgComponent/ImgCard";
const GuideComponent = () => {
  return (
    <div className="wrapper">
      <div className={"left"}>
        {" "}<ImgCard
          title={"나이키 러닝화 가이드"}
          imgSrc={"/assets/guidecard/img/guide_left.webp"}
          btnText={"자세히 보기"}
        />
      </div>
      <div className="right_1">
        <ImgCard
          title={"남성 러닝 스타일 가이드"}
          imgSrc={"/assets/guidecard/img/guide_right_1.webp"}
          btnText={"자세히 보기"}
        />
      </div>
      <div className="right_2">
        <ImgCard
          title={"여성 러닝 스타일 가이드"}
          imgSrc={"/assets/guidecard/img/guide_right_2.webp"}
          btnText={"자세히 보기"}
        />
      </div>
    </div>
  );
};

export default GuideComponent;
