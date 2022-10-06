import React from "react";

const FooterLinkList = () => {
  return (
      <>{/* 첫번째 */}
      <div className="footer_body_accordion_container">
        <ul>
          <li>새로운 소식</li>
          <li>멤버가입</li>
          <li>매장안내</li>
          <li>나이키 저널</li>
        </ul>
      </div>
      {/* 두번째 */}
      <div className="footer_body_accordion_container">
        <ul>
          <li>도움말</li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">주문배송조회</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">배송</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">반품</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">결제 방법</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">공지사항</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">문의하기</a>
          </li>
        </ul>
      </div>
      {/* 세번째 */}
      <div className="footer_body_accordion_container">
        <ul>
          <li>ABOUT NIKE</li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">소식</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">채용</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">투자자</a>
          </li>
          <li className="footer_li_sub">
            <a className="footer_a_sub">지속가능성</a>
          </li>
        </ul>
      </div>
      </>
  );
};

export default FooterLinkList;
