import "./button.scss";
import React, { useEffect, useState } from "react";

const Button = props => {
  const { themetype, text } = props;
  const [classname, setClassname] = useState("main_btn");
  // 화이트 테마 버튼
  useEffect(() => {
    if (themetype) {
      setClassname("main_btn white");
    }
  });

  return (
    <a className={classname}>
      {text}
    </a>
  );
};

export default Button;
