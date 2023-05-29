import { useEffect, useState, MouseEvent } from "react";
import { mockRelatedProduct, mockData } from "../../HomePage/services/mockData";
import { useProduct } from "../../../context/product.context";
import { CartItem, ProductType, ColorType } from "../../../configs/types";
import { useParams } from "react-router-dom";

const useProductPage = () => {
  const { product, setProduct } = useProduct();
  const [quantity, setQuantity] = useState<number>(1);
  console.log({ quantity });
  const { productId } = useParams<string>();
  const [item, setItem] = useState<CartItem>({
    id: 0,
    imageFront: "",
    imageBack: "",
    productName: "",
    price: 0,
    colorList: [],
    color: "",
    quantity: 0,
    age: "",
    ageList: [],
    height: 0,
    heightList: [],
  });
  const [color, setColor] = useState<string>("");
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const handleOpenCart = () => {
    setIsOpenCart(true);
  };

  const handleCloseCart = () => {
    setIsOpenCart(false);
  };

  useEffect(() => {
    const currentProduct = mockData.find(
      (item: ProductType) => item.id === parseInt(productId || "0")
    );
    setItem({
      ...item,
      id: currentProduct?.id || 0,
      imageFront: currentProduct?.imageFront || "",
      imageBack: currentProduct?.imageBack || "",
      productName: currentProduct?.productName || "",
      price: currentProduct?.price || 0,
      colorList: currentProduct?.colorList || [],
      quantity: 1,
      ageList: currentProduct?.age || [],
      heightList: currentProduct?.height || [],
    });
  }, []);

  let isDisableAdd =
    (!!item.ageList && item.ageList.length > 0 && !item.age) ||
    (!!item.heightList && item.heightList.length > 0 && !item.height) ||
    !item.color;

  const handleChooseColor = (color: ColorType) => {
    setColor(color.code);
    setItem({ ...item, color: color.name });
  };

  const handleChooseHeight = (height: number) => {
    setItem({ ...item, height: height });
  };

  const handleChooseAge = (
    e: React.SyntheticEvent | null,
    value: string | null
  ) => {
    setItem({ ...item, age: value as string });
  };

  const handleWishlist = (productId: number) => {
    setProduct({ type: "WISHLIST", wishlist: productId });
  };

  const handleIncreaseValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecreaseValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItemCart = (item: CartItem) => {
    setProduct({ type: "REMOVE_CART_ITEM", item: item });
  };

  const handleAddToCart = () => {
    if (item.color === "") return alert("Choose color");
    setProduct({
      type: "ADD_CART_ITEM",
      item: { ...item, quantity: quantity },
    });
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
    item,
    color,
    isDisableAdd,
    handleChooseColor,
    quantity,
    handleAddToCart,
    handleIncreaseValue,
    handleDecreaseValue,
    handleWishlist,
    mockRelatedProduct,
    product,
    isOpenCart,
    handleCloseCart,
    handleOpenCart,
    handleRemoveItemCart,
    handleIncreaseItemCart,
    handleDecreaseItemCart,
    handleChooseHeight,
    handleChooseAge,
  };
};

export default useProductPage;
