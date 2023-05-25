import { useEffect, useState } from "react";
import "./header.scss";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useNavigate } from "react-router-dom";
import { InitValueType } from "../../configs/types";

type PropsType = {
  product: InitValueType;
  isOpenCart: boolean;
  onOpenCart: Function;
};

const Header = ({
  product,
  onOpenCart,
}: PropsType) => {
  const navigate = useNavigate();
  const [isScoll, setIsScroll] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  let cartCount = product.cart
    .map((el) => el.quantity)
    .reduce((accumulator, current) => accumulator + current, 0);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (200 > currentScrollPos) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  const handleOpenCloseMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header ${isScoll && screenWidth > 1199 ? "is-sticky" : ""}`}
    >
      <div className="header-wrapper container">
        <div className="image-logo">
          <div className="image" onClick={() => navigate("/")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png"
              alt=""
            />
          </div>
        </div>
        <div className="menu-wrapper">
          {screenWidth > 1199 ? (
            <div className="nav-menu">
              <ul className="menu">
                <li className="active">
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">our products</a>
                </li>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">client center</a>
                </li>
                <li>
                  <a href="#">faq</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <i className="fa-solid fa-bars" onClick={handleOpenCloseMenu}></i>
              <SwipeableDrawer
                anchor={"right"}
                open={isOpenMenu}
                onClose={handleOpenCloseMenu}
                onOpen={handleOpenCloseMenu}
              >
                <div className="menu-mobile">
                  <div className="text-end p-3">
                    <i
                      className="fa-solid fa-xmark"
                      onClick={handleOpenCloseMenu}
                    ></i>
                  </div>
                  <div className="menu-item-mobile" onClick={() => navigate("/")}>home</div>
                  <div className="menu-item-mobile">our product</div>
                  <div className="menu-item-mobile">about us</div>
                  <div className="menu-item-mobile">blog</div>
                  <div className="menu-item-mobile">client center</div>
                  <div className="menu-item-mobile">faqs</div>
                  <div className="menu-item-mobile pt-4">
                    <div className="d-flex ">
                      <div className="ps-2 pe-2">Our stores</div>
                      <div
                        className="ps-2 pe-2"
                        style={{ borderLeft: "1px solid #ddd" }}
                      >
                        Useful info
                      </div>
                      <div
                        className="ps-2 pe-2"
                        style={{ borderLeft: "1px solid #ddd" }}
                      >
                        Help
                      </div>
                    </div>
                  </div>
                </div>
              </SwipeableDrawer>
            </>
          )}
          <div className="header-bar-right">
            <div className="header-bar-right-wrapper">
              <div className="icon-header">
                <PermIdentityOutlinedIcon />
              </div>
              <div className="icon-header">
                <FavoriteBorderOutlinedIcon />
                <span className="wishlist-cart-count">
                  {product.wishlist.length}
                </span>
              </div>
              <div className="icon-header">
                <ShoppingBagOutlinedIcon onClick={() => onOpenCart()} />
                <span className="wishlist-cart-count">{cartCount || 0}</span>
              </div>
              <div className="cost">
                <span>$0.00</span>
              </div>
              <div className="icon-header">
                <SearchOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
