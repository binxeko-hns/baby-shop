import { useState, useEffect } from "react";
import { mockData, mockBestSellers } from "../services/mockData";
import { useProduct } from "../../../context/product.context";
import { CartItem } from "../../../configs/types";

const useHomePage = () => {
  const { product, setProduct } = useProduct();
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  let cartCount = product.cart
    .map((el) => el.quantity)
    .reduce((accumulator, current) => accumulator + current, 0);
  const handleWishlist = (productId: number) => {
    setProduct({ type: "WISHLIST", wishlist: productId });
  };

  const handleOpenCart = () => {
    setIsOpenCart(true);
  };

  const handleCloseCart = () => {
    setIsOpenCart(false);
  };

  const handleRemoveItemCart = (item: CartItem) => {
    setProduct({ type: "REMOVE_CART_ITEM", item: item });
  };

  const handleIncreaseItemCart = (item: CartItem) => {
    setProduct({ type: "INCREASE_QUANTITY", item: item });
  };

  const handleDecreaseItemCart = (item: CartItem) => {
    setProduct({ type: "DECREASE_QUANTITY", item: item });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return {
    cartCount,
    mockData,
    mockBestSellers,
    handleWishlist,
    product,
    isOpenCart,
    handleOpenCart,
    handleCloseCart,
    handleRemoveItemCart,
    handleIncreaseItemCart,
    handleDecreaseItemCart,
  };
};

export default useHomePage;
