import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import FooterLinkList from "./FooterLinkList/FooterLinkList";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_container_first">
          <div className="footer_body">
            <FooterLinkList />
          </div>
          <div className="footer_btn_container">
            <ul>
              <li>
                <a>
                  <SiTwitter />
                </a>
              </li>
              <li>
                <a>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a>
                  <BsYoutube />
                </a>
              </li>
              <li>
                <a>
                  <ImInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_container_second">
          <div className="footer_location_container">
            <a>
              <IoLocationSharp />
              <span>대한민국</span>
            </a>
            <span className="footer_reserve_text">
              © 2022 Nike, Inc. All Rights Reserved
            </span>
          </div>
          <div className="footer_sub_menu">
            <ul>
              <li>
                <a>이용약관</a>
              </li>
              <li>개인정보처리방침</li>
            </ul>
          </div>
        </div>
        <div className="footer_container_third">
          <div className="footer_legal_container">
            <div className="footer_legal_divide_container">
              <div>
                (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구
                테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 등록번호
                220-88-09068 <span>사업자 정보 확인</span>
              </div>
              <div className="footer_legal_divide_second">
                고객센터 전화 문의 <span>080-022-0182</span> FAX 02-6744-5880 | 이메일{" "}
                <span>service@nike.co.kr</span> | 호스팅서비스사업자 (유)나이키코리아
              </div>
            </div>
            <div className="footer_legal_divide_container">
              <div>
                현금 등으로 결제 시 안전 거래를 위해 저희 쇼핑몰에서 가입한 파이서브코리아의 구매 안전 서비스(<span>결제대금예치</span>)를
                이용하실 수 있습니다.
              </div>
              <div className="footer_legal_divide_second">
                온라인디지털콘텐츠산업발전법에 의한 콘텐츠 보호 안내
                <span style={{ paddingLeft: "8px" }}>자세히 보기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
