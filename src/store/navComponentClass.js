import { makeAutoObservable } from "mobx";

class navComponent {
  // 네비게이션 옵션 리스트
  arr = [
    {
      no: 1,
      name: "New Release",
      list: [
        {
          title: "New & Featured",
          options: [
            "신상품 전체보기",
            "SNKRS",
            "가을 컬렉션",
            "에어 포스 1",
            "ACG",
            "NikeLab",
            "지속 가능 컬렉션"
          ]
        },
        {
          title: "남성 신상품",
          options: ["신발", "의류", "용품", "전체보기"]
        },
        {
          title: "여성 신상품",
          options: ["신발", "의류", "용품", "전체보기"]
        },
        {
          title: "키즈 신상품",
          options: ["신발", "의류", "용품", "전체보기"]
        }
      ]
    },
    {
      no: 2,
      name: "Men",
      list: [
        {
          title: "New & Featured",
          options: [
            "신상품",
            "SNKRS",
            "ACG",
            "MUST HAVES",
            "MEMBER SHOP",
            "가을 에센셜",
            "지속 가능 컬렉션",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "신발",
          options: [
            "신발 전체",
            "라이프스타일",
            "러닝",
            "워킹",
            "트레이닝 & 짐",
            "농구",
            "조던",
            "축구",
            "스케이트보딩",
            "골프",
            "테니스",
            "샌들 & 슬리퍼",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "의류",
          options: [
            "의류 전체",
            "탑 & 티셔츠",
            "팬츠 & 타이즈",
            "후디 & 크루",
            "재킷 & 베스트",
            "쇼츠",
            "나이키 프로",
            "양말",
            "셋업",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "용품",
          options: ["모자 & 헤드밴드", "가방", "애플워치", "Sale: Up to 40% OFF"]
        },
        {
          title: "스포츠",
          options: ["러닝", "트레이너 & 짐", "축구", "골프", "테니스", "요가"],
          undertitle: "브랜드",
          underOptions: ["Nike Sportswear", "NikeLab", "Jordan", "ACG"]
        }
      ]
    },
    {
      no: 3,
      name: "Women",
      list: [
        {
          title: "New & Featured",
          options: [
            "신상품",
            "SNKRS",
            "ACG",
            "MUST HAVES",
            "MEMBER SHOP",
            "브라 & 타이즈 셋업",
            "가을 컬렉션",
            "홈트레이닝 컬렉션",
            "지속 가능 컬렉션",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "신발",
          options: [
            "신발 전체",
            "라이프스타일",
            "러닝",
            "워킹",
            "트레이닝 & 짐",
            "농구",
            "조던",
            "축구",
            "골프",
            "테니스",
            "샌들 & 슬리퍼",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "의류",
          options: [
            "의류 전체",
            "스포츠 브라",
            "타이즈 & 레깅스",
            "팬츠",
            "쇼츠",
            "탑 & 티셔츠",
            "후디 & 크루",
            "재킷 & 베스트",
            "재킷 & 베스트",
            "스커트 & 드레스",
            "요가",
            "양말",
            "셋업",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "용품",
          options: ["모자 & 헤드밴드", "가방", "애플워치", "Sale: Up to 40% OFF"]
        },
        {
          title: "스포츠",
          options: ["러닝", "트레이너 & 짐", "축구", "골프", "테니스", "요가"],
          undertitle: "브랜드",
          underOptions: ["Nike Sportswear", "NikeLab", "Jordan", "ACG"]
        }
      ]
    },
    {
      no: 4,
      name: "Kids",
      list: [
        {
          title: "New & Featured",
          options: [
            "신상품",
            "ACG",
            "가을 컬렉션",
            "다이나모 컬렉션",
            "나이키 키즈 클래식",
            "아이들을 위한 선물",
            "조던 키즈",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "사이즈별",
          options: ["베이비 (0~3세)", "리틀키즈 (4~7세)", "주니어 (7~15세)"],
          undertitle: "스포츠",
          underOptions: ["러닝", "축구", "농구", "테니스"]
        },
        {
          title: "신발",
          options: [
            "베이비 (160mm 이하)",
            "리틀키즈 (165-220mm)",
            "주니어 (225-250mm)",
            "라이프스타일",
            "러닝",
            "축구",
            "농구",
            "샌들 & 슬리퍼",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "의류",
          options: [
            "베이비 (0~3세)",
            "리틀키즈 (4~7세)",
            "주니어 (7~15세)",
            "팬츠 & 레깅스",
            "탑 & 티셔츠",
            "브라",
            "후디 & 크루",
            "아우터 & 재킷",
            "스커트 & 드레스",
            "트랙수트",
            "Sale: Up to 40% OFF"
          ]
        },
        {
          title: "용품",
          options: ["가방", "모자", "양말", "Sale: Up to 40% OFF"],
          undertitle: "브랜드",
          underOptions: ["Nike Sportswear", "NikeLab", "Jordan", "ACG"]
        }
      ]
    },
    {
      no: 5,
      name: "Sale",
      list: [
        {
          title: "Sale",
          options: ["Sale"]
        },
        {
          title: "Mens Sale",
          options: ["신발", "의류", "용품", "전체 보기"]
        },
        {
          title: "Womens Sale",
          options: ["신발", "의류", "용품", "전체 보기"]
        },
        {
          title: "Kids Sale",
          options: ["신발", "의류", "용품", "전체 보기"]
        }
      ]
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

const navComponentStore = new navComponent();
export default navComponentStore;
