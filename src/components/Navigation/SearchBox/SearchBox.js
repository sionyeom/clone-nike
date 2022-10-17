import React from "react";
import "./searchBox.scss";
import BackGround from "../BackGround/BackGround";
import { ReactComponent as NikeSwooshLogo } from "../../../assets/img/navigation/nike-logo.svg";
import { FiSearch} from "react-icons/fi";
import {MdClose}from "react-icons/md";

const SearchBox = ({setIsSearchBarOpen}) => {

  return (
    <>
      <BackGround setIsSearchBarOpen={setIsSearchBarOpen}/>
      <div className="header_search_wrapper">
        <div className="header_search_container">
          <div className="header_top_container"><div className="logo_nike">
            <NikeSwooshLogo width="80px" height="60px" />
          </div>
          <div className="searchBar_container">
            <div>
              <div className="searchBar_icon_container" onClick={() => {setIsSearchBarOpen(0)}}>
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
          <div className="btn_container" onClick={() => {setIsSearchBarOpen(0)}}>
            <MdClose/>
          </div>
          </div>
          <div className="header_bottom_container">
            <div className="list_container">
              <p className="list_title">인기 검색어</p>
              <ul>
                <li className="list_content">Air Force 1</li>
                <li className="list_content">Jordan</li>
                <li className="list_content">Air Max</li>
                <li className="list_content">Blazer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>

  );
};

export default SearchBox;
