import React from "react";
import "./header.scss";

const HeaderComponent = props => {
  const { text } = props;

  return (
    <div className="headerText">
      {text}
    </div>
  );
};

export default HeaderComponent;
