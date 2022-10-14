import React, { useState, useEffect, useRef } from "react";
import "./dropDownMenu.scss";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import store from "../../../store";

const DropDownMenu = observer(
  ({ navListNum, setNavListNum, setIsDropDownHover }) => {
    const { arr } = store.navComponentStore;
    const [dataArr, setDataArr] = useState(toJS(arr));
    let hoveredList = dataArr.filter((d) => d.no === navListNum);

    console.log(document.querySelector(`.dropdown_wrapper`));
    return (
      <>
        <div
          className="dropdown_wrapper"
          onMouseOver={() => setIsDropDownHover(1)}
          onMouseOut={() => setIsDropDownHover(0)}
        >
          {navListNum == 0 ? (
            <></>
          ) : (
            hoveredList.map((e) => {
              let optionList = e.list ? e.list : [];
              return (
                <>
                  <div className="dropdown_container" name={e.name} key={e}>
                    {optionList.map((e) => {
                      let optionArr = e.options ? e.options : "";
                      let underOptions = e.underOptions ? e.underOptions : "";
                      if (e.undertitle && underOptions.length !== 0) {
                        // 아래 옵션이 있을 경우
                        return (
                          <>
                            <div className="dropdown_box" key={e}>
                              <div className="dropdown_title">{e.title}</div>
                              {optionArr.map((el_1) => {
                                return (
                                  <>
                                    <div className="dropdown_option" key={el_1}>
                                      {el_1}
                                    </div>
                                  </>
                                );
                              })}

                              <div className="dropdown_title under">
                                {e.undertitle}
                              </div>
                              {underOptions.map((el_2) => {
                                return (
                                  <>
                                    <div className="dropdown_option" key={el_2}>
                                      {el_2}
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </>
                        );
                      } else {
                        // 아래 옵션이 없을 경우
                        return (
                          <>
                            <div className="dropdown_box" key={e}>
                              <div className="dropdown_title">{e.title}</div>
                              {optionArr.map((e) => {
                                return (
                                  <>
                                    <div className="dropdown_option" key={e}>
                                      {e}
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </>
              );
            })
          )}
        </div>
      </>
    );
  }
);

export default DropDownMenu;
