import React from "react";
import "./backGround.scss";

const BackGround = ({ setIsSearchBarOpen }) => {
  return (
    <div
      onClick={() => {
        setIsSearchBarOpen(0);
      }}
      className="searchbox_background"
    />
  );
};

export default BackGround;
