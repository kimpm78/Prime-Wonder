// メイン画像のProps型
export interface IMainImages {
  id: number;
  name: string;
  image_path: string;
  description: string;
}

export default interface IUser {
  id?: any;
  username?: string;
  email?: string;
  password?: string;
}

// 슬라이드에 들어가는 요소들의 타입 선언
export interface SlideProps {
  img: string;
  imgTitle: string;
  imgDesc: string;
}

// 슬라이드에 들어갈 요소들
export const slideArr: SlideProps[] = [
  {
    img: 'https://bandai-a.akamaihd.net/bc/img/top_flash/themes/man/assets/item1000204748.jpg',
    imgTitle: '',
    imgDesc: '',
  },
  {
    img: 'https://bandai-a.akamaihd.net/bc/img/top_flash/themes/man/assets/item1000202104.jpg',
    imgTitle: '',
    imgDesc: '',
  },
  {
    img: 'https://bandai-a.akamaihd.net/bc/img/top_flash/themes/man/assets/item1000206717.jpg',
    imgTitle: '',
    imgDesc: '',
  },
  {
    img: 'https://bandai-a.akamaihd.net/bc/img/top_flash/themes/man/assets/item1000206717.jpg',
    imgTitle: '',
    imgDesc: '',
  },
  {
    img: 'https://bandai-a.akamaihd.net/bc/img/top_flash/themes/man/assets/item1000206641.jpg',
    imgTitle: '',
    imgDesc: '',
  },
  {
    img: 'https://bandai-a.akamaihd.net/bc/img/top_flash/themes/man/assets/item1000202455.jpg',
    imgTitle: '',
    imgDesc: '',
  },
  {
    img: 'https://baki-anime.jp/wp-content/uploads/2023/07/Set-750px.png',
    imgTitle: '',
    imgDesc: '',
  },
];

// 슬라이드 버튼에 사용될 요소들의 타입 선언
export interface DirectionBtnType {
  direction: string;
  onClick: () => void;
}

// 페이지네이션 버튼에 사용될 요소의 타입 선언
export interface PaginationBtnType {
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

// 제품 Type 선언
export interface ProductProps {
  id: number;
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  onAddToCart?: (product: {
    id: string;
    name: string;
    image: string;
    price: number;
  }) => void;
}
