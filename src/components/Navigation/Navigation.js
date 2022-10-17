import React from "react";
import "./navigation.scss";

import PreHeader from "./PreHeader/PreHeader";
import Header from "./Header/Header";
const Navigation = () => {
  return (
    <header>
      <PreHeader />
      <Header />
    </header>
  );
};

export default Navigation;
