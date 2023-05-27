import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductType,
  CartItem,
  ColorType,
  EventModalType,
} from "../../configs/types";
import { useProduct } from "../../context/product.context";
import { SelectChangeEvent } from "@mui/material";

const useProductList = () => {
  const navigate = useNavigate();
  const { setProduct } = useProduct();
  const [openProductModal, setOpenProductModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentProduct, setCurrentProduct] = useState<CartItem>({
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

  let isDisableAdd =
    (!!currentProduct.ageList &&
      currentProduct.ageList.length > 0 &&
      !currentProduct.age) ||
    (!!currentProduct.heightList &&
      currentProduct.heightList.length > 0 &&
      !currentProduct.height) ||
    !currentProduct.color;

  const handleOpenModal = (item: ProductType) => {
    setCurrentProduct({
      ...currentProduct,
      id: item?.id || 0,
      imageFront: item?.imageFront || "",
      imageBack: item?.imageBack || "",
      productName: item?.productName || "",
      price: item?.price || 0,
      colorList: item?.colorList || [],
      quantity: 1,
      ageList: item?.age || [],
      heightList: item?.height || [],
    });
    setOpenProductModal(true);
  };

  const handleCloseModal = () => {
    setOpenProductModal(false);
  };

  const handleChooseColor = (color: ColorType) => {
    setCurrentProduct({ ...currentProduct, color: color.name });
  };

  const handleChooseHeight = (height: number) => {
    setCurrentProduct({ ...currentProduct, height: height });
  };

  const handleChooseAge = (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<Element, Element>
      | null,
    value: {} | null
  ) => {
    console.log(event)
    console.log(value)
    setCurrentProduct({ ...currentProduct, age: value as string });
  };

  const handleIncreaseValue = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseValue = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setProduct({
      type: "ADD_CART_ITEM",
      item: { ...currentProduct, quantity: quantity },
    });
  };

  const EventModal: EventModalType = {
    handleCloseModal: handleCloseModal,
    handleChooseColor: handleChooseColor,
    handleChooseHeight: handleChooseHeight,
    handleChooseAge: handleChooseAge,
    handleIncreaseValue: handleIncreaseValue,
    handleDecreaseValue: handleDecreaseValue,
    handleAddToCart: handleAddToCart,
  };

  return {
    isDisableAdd,
    navigate,
    openProductModal,
    currentProduct,
    handleOpenModal,
    handleCloseModal,
    EventModal,
    quantity,
  };
};

export default useProductList;
