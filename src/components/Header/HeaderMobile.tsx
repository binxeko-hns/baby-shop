import "./header.scss";
import { InitValueType } from "../../configs/types";

type PropsType = {
  onOpenCart?: Function;
  product?: InitValueType;
};
const HeaderMobile = ({ product, onOpenCart }: PropsType) => {
  let cartCount = product?.cart
    .map((el) => el.quantity)
    .reduce((accumulator, current) => accumulator + current, 0) || 0;
  return (
    <div className="header-mobile">
      <div className="icon">
        <i className="fa-solid fa-table-cells-large"></i>
      </div>
      <div className="icon">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="icon">
        <i className="fa-solid fa-bag-shopping" onClick={() => onOpenCart?.()}></i>
        <span className="wishlist-cart-count">{cartCount}</span>
      </div>
      <div className="icon">
        <i className="fa-solid fa-heart"></i>
        <span className="wishlist-cart-count">{product?.wishlist.length || 0}</span>
      </div>
    </div>
  );
};

export default HeaderMobile;
