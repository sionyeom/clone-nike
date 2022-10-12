import React, { useEffect, useState } from "react";
import "./card.scss";
import Button from "../MainBtn/Button";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import store from "../../../store";

const CardComponent = props => {
  const { title, text, cardText, subTitle, imgSrc } = props;

  return (
    <div className="card_wrapper">
      <div className="card_visual">
        <img style={{ width: "100%" }} src={imgSrc} />
      </div>
      <div className="card_text_container">
        {subTitle &&
          <h5 className="card_subtitle center">
            {subTitle}
          </h5>}
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

const Card = observer(() => {
  const { arr } = store.cardComponentStore;
  const [dataArr, setDataArr] = useState(toJS(arr));

  return (
    <div>
      {dataArr.map(data => {
        return (
          <CardComponent
            key={data}
            title={data.title}
            subTitle={data.subTitle}
            text={data.text}
            cardText={data.cardText}
            imgSrc={data.imgSrc}
          />
        );
      })}
    </div>
  );
});

export default Card;
