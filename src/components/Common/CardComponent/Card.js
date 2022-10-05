import React from "react";
import "./card.scss";
import Button from "../MainBtn/Button";
const Card = props => {
  const { title, text, cardText } = props;
  console.log(text);
  let test = require("../../../assets/video/main_card2_gif.mp4");
  return (
    <div>
      <div className="card_wrapper">
        <div className="card_visual">
          <video width="100%" height="100%" autoPlay>
            <source src={test} type="video/mp4" />
          </video>
        </div>
        <h4 className="card_title center">
          {title}
        </h4>
        <p className="card_text center">
          {text}
        </p>
        <div className="card_btn_container center">
          <Button text={cardText} />
        </div>
      </div>
    </div>
  );
};

export default Card;
