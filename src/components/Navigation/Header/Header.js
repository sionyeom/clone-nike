import React, { useState } from "react";
import "./header.scss";
import { ReactComponent as NikeSwooshLogo } from "../../../assets/img/navigation/nike-logo.svg";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import DropDownMenu from "../DropDownMenu/DropDownMenu";
import PreHeader from "../PreHeader/PreHeader";
import SearchBox from "../SearchBox/SearchBox";
const BackGround = () => {
  return (
    <>
      <div className="navigation_hover_background"></div>
    </>
  );
};

const Header = () => {
  const [isNavHover, setIsNavHover] = useState(0);
  const [isDropDownHover, setIsDropDownHover] = useState(0);

  const [navListNum, setNavListNum] = useState(0);

  const mouseovernav = (n) => {
    setNavListNum(0);
    setIsNavHover(1);
    setTimeout(() => {
      setNavListNum(n);
    }, 0);
  };

  const mouseoutnav = () => {
    setIsNavHover(0);
  };

  return (
    <>
      <PreHeader />
      <div className="header_pre_space">
        {/* 메뉴 옵션 */}
        {/* <div className="menues_container"> */}
        <ul className="menues">
          <li
            onMouseOver={() => {
              mouseovernav(1);
            }}
            onMouseOut={() => {
              mouseoutnav();
            }}
          >
            New Releases
          </li>
          <li
            onMouseOver={() => {
              mouseovernav(2);
            }}
            onMouseOut={() => {
              mouseoutnav();
            }}
          >
            Men
          </li>
          <li
            onMouseOver={() => {
              mouseovernav(3);
            }}
            onMouseOut={() => {
              mouseoutnav();
            }}
          >
            Women
          </li>
          <li
            onMouseOver={() => {
              mouseovernav(4);
            }}
            onMouseOut={() => {
              mouseoutnav();
            }}
          >
            Kids
          </li>
          <li
            onMouseOver={() => {
              mouseovernav(5);
            }}
            onMouseOut={() => {
              mouseoutnav();
            }}
          >
            Sale
          </li>
          <li>SNKRS</li>
        </ul>
        {/* </div> */}
        {/* 모달 대비 */}
        <div className="header">
          <div className="logo_nike">
            <NikeSwooshLogo width="80px" height="60px" />
          </div>
          <div className="searchBar_container">
            <div>
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
        <SearchBox />
      </div>
      {(isNavHover == 1 || isDropDownHover == 1) && <BackGround />}
      {(isNavHover == 1 || isDropDownHover == 1) && (
        <DropDownMenu
          setIsDropDownHover={setIsDropDownHover}
          setNavListNum={setNavListNum}
          navListNum={navListNum}
        />
      )}

      {/* <DropDownMenu setIsDropDownHover={setIsDropDownHover} setNavListNum={setNavListNum} navListNum={navListNum}/> */}
    </>
  );
};

export default Header;
