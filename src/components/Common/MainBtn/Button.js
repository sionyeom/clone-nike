import React from "react";
import "./button.scss";

const Button = props => {
  const { text } = props;
  console.log(text);

  return (
    <a className="main_btn">
      {text}
    </a>
  );
};

export default Button;
