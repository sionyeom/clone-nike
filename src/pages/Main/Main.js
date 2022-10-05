import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import store from "../../store";
import "./Main.scss";
// header
import Navigation from "../../components/Navigation/Navigation";
import SliderBanner from "../../components/SliderBanner/SliderBanner";

// test
import Button from "../../components/Common/MainBtn/Button";
import Card from "../../components/Common/CardComponent/Card";

const Main = observer(() => {
  // state
  const { arr, number } = store.countClass;

  // func
  const { increase, decrease } = store.countClass;

  useEffect(() => {
    console.log(toJS(arr[0]));
  }, [arr]);

  return (
    <>
      <Navigation />
      <SliderBanner/>
      <div className="main"> 
      {/* <Button text="구매하기"/> */}
      <Card title="FORWARD 컬렉션" text={["기존 니트 플리스 대비 평균 75% 적은 탄소를 배출하는 ", <br />, "나이키의 새로운 'FORWARD' 컬렉션을 만나보세요."]} cardText="구매하기"/>
      </div>
    </>
  );
});

export default Main;
