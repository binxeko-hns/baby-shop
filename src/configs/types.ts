export interface ColorType {
  name: string;
  code: string;
}

export interface ProductType {
  id: number;
  imageFront: string;
  imageBack: string;
  productName: string;
  price: number;
  colorList: ColorType[];
  age?: string[];
  height?: number[];
}

export interface CartItem {
  id: number;
  imageFront: string;
  imageBack: string;
  productName: string;
  price: number;
  colorList: ColorType[];
  color: string;
  quantity: number;
  age?: string;
  ageList?: string[];
  height?: number;
  heightList?: number[];
}

export interface InitValueType {
  cart: CartItem[];
  wishlist: number[];
}

export interface EventModalType {
  handleCloseModal: Function;
  handleChooseColor: Function;
  handleChooseHeight: Function;
  handleChooseAge: Function;
  handleIncreaseValue: Function;
  handleDecreaseValue: Function;
  handleAddToCart: Function;
}
