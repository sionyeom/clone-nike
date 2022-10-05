import React from "react";
import "./imgCard.scss";
import Button from "../MainBtn/Button";
const ImgCard = () => {
  return (
    <div className="imgCard_wrapper">
      <img
        className="imgCard_img"
        src={require("../../../assets/img/imgcard/subCardImg.webp")}
        alt=""
      />
      <div className="imgCard_text_container">
        <div className="imgCard_title">남성 러닝 스타일 가이드</div>
        {/* 버튼 없을 시에도 활용 가능 */}
        <div className="imgCard_btn_container">
          <Button themetype={"white"} text={"자세히 보기"} />
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
