import React, { createContext, useContext, useReducer } from "react";
import { CartItem, InitValueType } from "../configs/types";

type ProductAction =
  | {
      type: "ADD_CART_ITEM";
      item: CartItem;
    }
  | {
      type: "WISHLIST";
      wishlist: number;
    }
  | {
      type: "REMOVE_CART_ITEM";
      item: CartItem;
    }
  | {
      type: "INCREASE_QUANTITY";
      item: CartItem;
    }
  | {
      type: "DECREASE_QUANTITY";
      item: CartItem;
    };

const productReducer = (
  state: InitValueType,
  action: ProductAction
): InitValueType => {
  let _cart = [...state.cart];
  let _wishlist = [...state.wishlist];

  switch (action.type) {
    case "ADD_CART_ITEM":
      let currentItem = _cart.find(
        (e) =>
          e.id === action.item.id &&
          e.color.toLowerCase() === action.item.color.toLowerCase()
      );
      if (!currentItem) {
        _cart = [..._cart, action.item];
      } else {
        currentItem.quantity += action.item.quantity;
      }
      return { ...state, cart: _cart };
    case "WISHLIST":
      if (state.wishlist.includes(action.wishlist)) {
        _wishlist = _wishlist.filter((fav) => fav !== action.wishlist);
      } else {
        _wishlist = [...state.wishlist, action.wishlist];
      }
      return { ...state, wishlist: _wishlist };

    case "REMOVE_CART_ITEM":
      _cart = _cart.filter((item: CartItem) => {
        if (
          item.id === action.item?.id &&
          item.color.toLowerCase() === action.item?.color.toLowerCase()
        ) {
          return false;
        }
        return true;
      });

      return { ...state, cart: [..._cart] };
    case "INCREASE_QUANTITY":
      currentItem = _cart.find(
        (e) =>
          e.id === action.item.id &&
          e.color.toLowerCase() === action.item.color.toLowerCase()
      );
      if (!!currentItem) {
        currentItem.quantity++;
        _cart = [..._cart, currentItem];
      }
      return { ...state, cart: _cart };
    case "DECREASE_QUANTITY":
      currentItem = _cart.find(
        (e) =>
          e.id === action.item.id &&
          e.color.toLowerCase() === action.item.color.toLowerCase()
      );
      if (!!currentItem) {
        currentItem.quantity--;
        _cart = [..._cart, currentItem];
      }
      return { ...state, cart: _cart };
    default:
      return state;
  }
};

const initValue: InitValueType = {
  cart: [],
  wishlist: [],
};

const myProduct = {
  product: initValue,
  setProduct: (action: ProductAction): void => {},
};

const ProductContext = createContext<{
  product: InitValueType;
  setProduct: React.Dispatch<ProductAction>;
}>(myProduct);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [product, setProduct] = useReducer(productReducer, initValue);
  console.log({ product });
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
