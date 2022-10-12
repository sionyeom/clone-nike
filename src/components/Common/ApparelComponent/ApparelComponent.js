import React from "react";
import "./apparelComponent.scss";
import ImgCard from "../ImgComponent/ImgCard";

const ApparelComponent = () => {
  return (
    <div className="scroll_box">
      <div className="items">
        <div className="item">
          <ImgCard
            title={"재킷 & 베스트"}
            imgSrc={"/assets/apparel/img/apparel_1.webp"}
          />
        </div>
        <div className="item">
          <ImgCard
            title={"후디 & 크루"}
            imgSrc={"/assets/apparel/img/apparel_2.webp"}
          />
        </div>
        <div className="item">
          <ImgCard
            title={"팬츠 & 타이즈"}
            imgSrc={"/assets/apparel/img/apparel_3.webp"}
          />
        </div>
      </div>
    </div>
  );
};

export default ApparelComponent;
