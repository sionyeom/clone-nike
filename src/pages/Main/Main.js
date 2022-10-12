import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import store from "../../store";
import "./Main.scss";
// header
import Navigation from "../../components/Navigation/Navigation";
import SliderBanner from "../../components/SliderBanner/SliderBanner";

// contents
import Card from "../../components/Common/CardComponent/Card";
import GuideComponent from "../../components/Common/GuideComponent/GuideComponent";
import SwiperComponent from "../../components/Common/SwiperComponent/SwiperComponent";
import ApparelComponent from "../../components/Common/ApparelComponent/ApparelComponent";
// footer
import Footer from "../../components/Footer/Footer";

// test
import Button from "../../components/Common/MainBtn/Button";
import ImgCard from "../../components/Common/ImgComponent/ImgCard";
import PriceCard from "../../components/Common/PriceCard/PriceCard";
import HeaderComponent from "../../components/Common/HeaderComponent/Header";
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
      <Card title="FORWARD 컬렉션" subTitle="나이키 요가 남성 컬렉션" text={["기존 니트 플리스 대비 평균 75% 적은 탄소를 배출하는 ", <br />, "나이키의 새로운 'FORWARD' 컬렉션을 만나보세요."]} cardText="구매하기" imgSrc="../../../assets/video/main_card2_gif.mp4"/>
      <HeaderComponent text={"러닝화 / 러닝 스타일 가이드"}/>
      <GuideComponent/>
      {/* <HeaderComponent text={"Featured Shoes"}/> */}
      <SwiperComponent/>
      <HeaderComponent text={"Apparel Essentials"}/>
      <ApparelComponent/>
      {/* <Card title="FORWARD 컬렉션" text={["기존 니트 플리스 대비 평균 75% 적은 탄소를 배출하는 ", <br />, "나이키의 새로운 'FORWARD' 컬렉션을 만나보세요."]} cardText="구매하기"/> */}
      {/* <ImgCard/> */}
      {/* <PriceCard/> */}
      </div>
      <Footer/>
    </>
  );
});

export default Main;
