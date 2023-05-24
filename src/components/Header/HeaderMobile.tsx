import "./header.scss";
const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <div className="icon">
        <i className="fa-solid fa-table-cells-large"></i>
      </div>
      <div className="icon">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="icon">
        <i className="fa-solid fa-bag-shopping"></i>
        <span className="wishlist-cart-count">0</span>
      </div>
      <div className="icon">
        <i className="fa-solid fa-heart"></i>
        <span className="wishlist-cart-count">0</span>
      </div>
    </div>
  );
};

export default HeaderMobile;
