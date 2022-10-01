import React from "react";
import "./navigation.scss";
import { ReactComponent as JordanLogo } from "../../assets/img/navigation/air-jordan-logo.svg";
import { ReactComponent as ConverseLogo } from "../../assets/img/navigation/converse-logo.svg";

const Navigation = () => {
  return (
    <header>
      <div className="pre_header">
        <div className="logo">
          <a>
            <JordanLogo width="24px" height="24px" />
          </a>
          <a>
            <ConverseLogo width="24px" height="24px" />
          </a>
        </div>
        <div className="desk_user">
          <a>고객센터</a>
          <a>멤버 가입</a>
          <a>로그인</a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
