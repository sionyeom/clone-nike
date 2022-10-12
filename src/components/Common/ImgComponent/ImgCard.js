import React from "react";
import "./imgCard.scss";
import Button from "../MainBtn/Button";
const ImgCard = props => {
  const { title, imgSrc, btnText } = props;

  return (
    <div className="imgCard_wrapper">
      <img className="imgCard_img" src={imgSrc} />
      <div className="imgCard_text_container">
        <div className="imgCard_title">
          {title}
        </div>
        {/* 버튼 없을 시에도 활용 가능 */}
        {btnText &&
          <div className="imgCard_btn_container">
            <Button themetype={"white"} text={btnText} />
          </div>}
      </div>
    </div>
  );
};

export default ImgCard;
