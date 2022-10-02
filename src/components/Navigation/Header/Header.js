import React from "react";
import "./header.scss";
import { ReactComponent as NikeSwooshLogo } from "../../../assets/img/navigation/nike-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_nike">
        <NikeSwooshLogo width="80px" height="60px" />
      </div>
      <div className="menues_container">
        <ul className="menues">
          <li>New Releases</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </ul>
      </div>
      <div className="searchBar_container"></div>
      <div className="btn_container"></div>
    </div>
  );
};

export default Header;
