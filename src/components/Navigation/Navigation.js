import React from "react";
import "./navigation.scss";
import { ReactComponent as JordanLogo } from "../../assets/img/navigation/air-jordan-logo.svg";
import { ReactComponent as ConverseLogo } from "../../assets/img/navigation/converse-logo.svg";

import PreHeader from "./PreHeader/PreHeader";
const Navigation = () => {
  return (
    <header>
      <PreHeader />
    </header>
  );
};

export default Navigation;
