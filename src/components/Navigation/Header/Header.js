import React from "react";
import "./header.scss";
import { ReactComponent as NikeSwooshLogo } from "../../../assets/img/navigation/nike-logo.svg";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
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
      <div className="searchBar_container">
        <div className="searchBar_icon_container">
          <FiSearch className="searchBar_icon" />
        </div>
        <input
          className="searchBar_searchInput"
          type="text"
          id="name"
          name="name"
          placeholder="검색"
        />
      </div>
      <div className="btn_container">
        <div className="icon left">
          <AiOutlineHeart />
        </div>
        <div className="icon">
          <IoBagOutline />
        </div>
      </div>
    </div>
  );
};

export default Header;
