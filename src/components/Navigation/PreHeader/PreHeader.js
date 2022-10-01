import React from "react";
import "./preHeader.scss";
import { ReactComponent as JordanLogo } from "../../../assets/img/navigation/air-jordan-logo.svg";
import { ReactComponent as ConverseLogo } from "../../../assets/img/navigation/converse-logo.svg";

const PreHeader = () => {
  return (
    <div className="pre_header">
      <div className="logo">
        <a href="#">
          <JordanLogo width="20px" height="20px" />
        </a>
        <a href="#">
          <ConverseLogo width="30px" height="30px" />
        </a>
      </div>
      <div className="desk_user">
        <a>고객센터</a>
        <div className="desk_line" />
        <a>멤버 가입</a>
        <div className="desk_line" />
        <a>로그인</a>
      </div>
    </div>
  );
};

export default PreHeader;
