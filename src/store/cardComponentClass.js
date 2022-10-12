import { makeAutoObservable } from "mobx";

class CardComponent {
  arr = [
    {
      title: "움직임을 통한 의미 찾기",
      subTitle: "나이키 요가 남성 컬렉션",
      text: ["매트 밖에서도 이어지는 편안함. ", <br />, "나이키 요가 남성 컬렉션으로 경험해보세요."],
      cardText: "구매하기",
      imgSrc: "/assets/card/img/1.webp"
    },
    {
      title: "자유로운 움직임을 위한 컬렉션",
      subTitle: "Look of Play",
      text: ["어느 계절이든 편안하고 귀여운 제품들로 아이들의 모든 순간을 빛내주세요."],
      cardText: "구매하기",
      imgSrc: "/assets/card/img/2.webp"
    },
    {
      title: "르브론 20",
      subTitle: "",
      text: ["새로운 역사의 주인공이 되어보세요."],
      cardText: "구매하기",
      imgSrc: "/assets/card/img/3.webp"
    },
    {
      title: "에어맥스 플라이니트 레이서",
      subTitle: "",
      text: [
        "스타일과 편안함의 두 아이콘이 만나 새로운 혁신이 탄생했습니다.",
        <br />,
        "플라이니트 레이서의 10주년을 기념하며, 플라이니트와 에어백이 만나 새로워진",
        <br />,
        "나이키 에어맥스 플라이니트 레이서와 함께 특별한 스타일을 완성해 보세요."
      ],
      cardText: "구매하기",
      imgSrc: "/assets/card/img/4.webp"
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

const cardComponentStore = new CardComponent();
export default cardComponentStore;
