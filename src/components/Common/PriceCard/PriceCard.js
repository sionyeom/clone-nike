import React from "react";
import "./priceCard.scss";

const PriceCard = props => {
  const { title, sort, price, afterPrice } = props;

  return (
    <div className="priceCard_wrapper">
      <div className="priceCard_img_container">
        <img
          className="priceCard_img"
          src={require("../../../assets/img/pricecard/priceImg1.webp")}
          alt=""
        />
      </div>
      <div className="priceCard_content_container">
        <div className="priceCard_content_text_container">
          <h4>나이키 덩크 로우 레트로 SE 넥스트 네이처</h4>
          <p>여성 로드 러닝화</p>
        </div>
        <div className="priceCard_content_price_container">
          {/* 1. 할인 x -> default */}
          {/* 2. 할인 o -> default + before / default */}
          {/* <p className="priceCard_content_price_text before">179,000 원</p> */}
          <p className="priceCard_content_price_text">179,000 원</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
