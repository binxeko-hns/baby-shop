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
}

export interface InitValueType {
  cart: CartItem[];
  wishlist: number[];
}
