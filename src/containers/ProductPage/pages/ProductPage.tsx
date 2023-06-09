import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../styles/productPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useProductPage from "../hooks/useProductPage";
import ProductList from "../../../components/ProductList/ProductList";
import HomePageFooter from "../../../components/HomePageFooter/HomePageFooter";
import HeaderMobile from "../../../components/Header/HeaderMobile";
import Cart from "../../../components/Cart/Cart";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import RulerTable from "../../../components/RulerTable/RulerTable";
import ImageGallery from "react-image-gallery";

const ProductPage = () => {
  const {
    item,
    color,
    quantity,
    handleChooseColor,
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
    isDisableAdd,
    handleChooseAge,
  } = useProductPage();
  return (
    <>
      <HeaderMobile onOpenCart={handleOpenCart} product={product} />
      <Header
        product={product}
        isOpenCart={isOpenCart}
        onOpenCart={handleOpenCart}
        page={"products"}
      />
      <Cart
        product={product.cart}
        open={isOpenCart}
        onOpen={handleOpenCart}
        onClose={handleCloseCart}
        onRemoveItemCart={handleRemoveItemCart}
        onIncreaseItemCart={handleIncreaseItemCart}
        onDecreaseItemCart={handleDecreaseItemCart}
      />
      <div className="product-page">
        <div className="main-detail">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="title">{item?.productName}</h1>
                <h6>
                  Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                  Suspendisse a non felis eleifend justo vel bibendum sapien.
                </h6>
                <ul className="desc">
                  <li>
                    Maecenas malesuada 5 elit lectus felis, malesuada ultricies.
                  </li>
                  <li>
                    Curabitur et ligula. Ut molestie a, ultricies porta urna.
                  </li>
                  <li>
                    Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                  </li>
                  <li>
                    Phasellus fermentum in, dolor. Pellentesque facilisis.
                  </li>
                </ul>
                <h6>Composition: Main material: 95% Cotton, 5% Polyester</h6>
                <RulerTable />
                <h3 className="price">${item?.price}</h3>

                {!!item.heightList && item.heightList.length > 0 && (
                  <div className="height param-box">
                    <label>Height</label>
                    <ul>
                      {item.heightList.map((i) => (
                        <li onClick={() => handleChooseHeight(i)}>
                          <span className={item.height === i ? "active" : ""}>
                            {i}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!!item.ageList && (
                  <div className="age param-box">
                    <label>Age</label>
                    <Select
                      placeholder="Choose an option"
                      indicator={<KeyboardArrowDown />}
                      sx={{
                        width: 240,
                        [`& .${selectClasses.indicator}`]: {
                          transition: "0.2s",
                          [`&.${selectClasses.expanded}`]: {
                            transform: "rotate(-180deg)",
                          },
                        },
                      }}
                      onChange={handleChooseAge}
                    >
                      <Option value="" disabled>
                        Choose an option
                      </Option>
                      {item.ageList?.map((i) => (
                        <Option value={i}>{i}</Option>
                      ))}
                    </Select>
                  </div>
                )}

                {item?.colorList.length > 0 && (
                  <div className="color param-box">
                    <label>Color</label>
                    <ul>
                      {item?.colorList?.map((i) => (
                        <li>
                          <a
                            onClick={() => handleChooseColor(i)}
                            className={color === i.code ? "active" : ""}
                          >
                            <span
                              style={{ backgroundColor: `${i.code}` }}
                            ></span>
                          </a>
                        </li>
                      )) || <></>}
                    </ul>
                  </div>
                )}

                <div className="add-cart">
                  <div className="count">
                    <button onClick={handleDecreaseValue}>-</button>
                    <input
                      type="number"
                      id="number"
                      value={quantity}
                      inputMode="numeric"
                    />
                    <button onClick={handleIncreaseValue}>+</button>
                  </div>
                  <div className="add">
                    <button
                      onClick={handleAddToCart}
                      disabled={isDisableAdd}
                      className={isDisableAdd ? "disable-btn" : ""}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="stacked-meta">
                  <div className="stacked-tags">
                    <span className="stacked-meta-title">Tags</span>
                    <span className="stacked-meta-value">
                      <a href="#">Duvet cover</a>
                      <a href="#">kids</a>
                      <a href="#">Recyclable</a>
                    </span>
                  </div>
                  <div className="stacked-category">
                    <span className="stacked-meta-title">Category</span>
                    <span className="stacked-meta-value">
                      <a href="#">Bed sets</a>
                    </span>
                  </div>
                  <div className="stacked-sku">
                    <span className="stacked-meta-title">SKU</span>
                    <span className="stacked-meta-value">BE-8727U2</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <ImageGallery
                  items={[
                    { original: item.imageFront, thumbnail: item.imageFront },
                    { original: item.imageBack, thumbnail: item.imageBack },
                  ]}

                  thumbnailPosition="left"
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={false}
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="#anchor-link-btns">
              <i
                className="fa-solid fa-chevron-down"
                style={{ cursor: "pointer", opacity: "0.5", color: "#000" }}
              ></i>
            </a>
          </div>
        </div>
        <div className="anchor-link-btns" id="anchor-link-btns">
          <div className="wrapper">
            <a href="#description">
              <span>Description</span>
            </a>
            <a href="#additional-info">
              <span>Additional information</span>
            </a>
            <a href="#review">
              <span>Reviews</span>
            </a>
          </div>
        </div>
        <div className="decription-wrapper" id="description">
          <div className="container">
            <h5 className="desc">
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse
              <br />
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              <br />
              malesuada ultricies. Curabitur et.
            </h5>
            <div className="row mt-5" style={{ padding: "0 25%" }}>
              <div className="col text-center">
                <h6>ENVIRONMENTALLY FRIENDLY</h6>
                <p>
                  <span className="sun">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <span className="sun">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <span className="sun unactive">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <span className="sun unactive">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                </p>
                <h6>WASHING</h6>
                <p>
                  <span className="hand">
                    <i className="fa-solid fa-hands-bubbles"></i>
                  </span>
                  <span className="hand">
                    <i className="fa-solid fa-hands-bubbles"></i>
                  </span>
                  <span className="hand">
                    <i className="fa-solid fa-hands-bubbles"></i>
                  </span>
                  <span className="hand unactive">
                    <i className="fa-solid fa-hands-bubbles"></i>
                  </span>
                </p>
              </div>
              <div className="col text-center">
                <h6>WARMNESS</h6>
                <p>
                  <span className="burn">
                    <i className="fa-solid fa-fire-flame-simple"></i>
                  </span>
                  <span className="burn">
                    <i className="fa-solid fa-fire-flame-simple"></i>
                  </span>
                  <span className="burn">
                    <i className="fa-solid fa-fire-flame-simple"></i>
                  </span>
                  <span className="burn unactive">
                    <i className="fa-solid fa-fire-flame-simple"></i>
                  </span>
                </p>
                <h6>DURABILITY</h6>
                <p>
                  <span className="gem">
                    <i className="fa-solid fa-gem"></i>
                  </span>
                  <span className="gem">
                    <i className="fa-solid fa-gem"></i>
                  </span>
                  <span className="gem">
                    <i className="fa-solid fa-gem"></i>
                  </span>
                  <span className="gem unactive">
                    <i className="fa-solid fa-gem"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col ms-2 me-2">
                <div className="card-box">
                  <div className="card-img">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic5.webp"
                      alt=""
                    />
                  </div>
                  <div className="card-infor">
                    <h4 className="card-title">Pellentesque sed eu</h4>
                    <h5 className="card-desc">
                      Aenean quis lectus nec magna. In mauris sed molestie
                      tincidunt. Nullam a nunc. Nulla facilisi. Morbi pede.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col ms-2 me-2">
                <div className="card-box">
                  <div className="card-img">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic5.webp"
                      alt=""
                    />
                  </div>
                  <div className="card-infor">
                    <h4 className="card-title">Pellentesque sed eu</h4>
                    <h5 className="card-desc">
                      Aenean quis lectus nec magna. In mauris sed molestie
                      tincidunt. Nullam a nunc. Nulla facilisi. Morbi pede.
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="desc mt-5">
              Ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
              laoreet enim. <br /> Phasellus lorem ipsum fermentum in, dolor.
            </h5>
            <h5 className="desc mt-5 pb-5 mb-0">
              Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
              rhoncus eu, <br /> luctus et interdum adipiscing wisi. Aliquam
              erat ac ipsum. Integer aliquam purus. <br /> Quisque lorem tortor
            </h5>
          </div>
        </div>
        <div className="section-fullwidth">
          <div className="product-detail">
            <div className="item">
              <div className="image">
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-productdetails-pic1.webp"
                  alt=""
                />
              </div>
              <div className="detail">
                <h6 className="title">BIBENDUM NETUS</h6>
                <h2 className="title">
                  Vestibulum <br /> bibendum nulla <br /> torquent semper
                </h2>
                <h5 className="title">
                  Tristique nisi rutrum porta magna pharetra aenean proin rutrum
                  nostra eu <br /> curabitur consequat dolor molestie auctor
                  porta et lacus porta fusce <br /> vulputate non dui quis.
                </h5>
              </div>
            </div>
            <div className="item">
              <div className="detail">
                <h6 className="title">PHASELLUS TORTOR</h6>
                <h2 className="title">
                  Vestibulum <br /> bibendum nulla <br /> torquent semper
                </h2>
                <h5 className="title">
                  Tristique nisi rutrum porta magna pharetra aenean proin rutrum
                  nostra eu <br /> curabitur consequat dolor molestie auctor
                  porta et lacus porta fusce <br /> vulputate non dui quis.
                </h5>
                <ul className="mt-5">
                  <li>
                    <p>
                      <i
                        className="fa-solid fa-star me-2"
                        style={{ color: "#EAC989" }}
                      ></i>
                      Suspendisse a pellentesque.
                    </p>
                  </li>
                  <li>
                    <p>
                      <i
                        className="fa-solid fa-star me-2"
                        style={{ color: "#EAC989" }}
                      ></i>
                      Quisque lorem tortor fringilla.
                    </p>
                  </li>
                  <li>
                    <p>
                      <i
                        className="fa-solid fa-star me-2"
                        style={{ color: "#EAC989" }}
                      ></i>
                      Quisque cursus et, porttitor.
                    </p>
                  </li>
                  <li>
                    <p>
                      <i
                        className="fa-solid fa-star me-2"
                        style={{ color: "#EAC989" }}
                      ></i>
                      Nulla ipsum dolor lacus.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="image mt-5">
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-blog-pic4.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="compare-product">
          <div className="container">
            <div className="wrapper">
              <div className="header-box">
                <h2 className="title">
                  Compare our <br />
                  products
                </h2>
                <h5 className="title">
                  Vestibulum dapibus, mauris nec malesuada fames ac turpis
                  velit, rhoncus eu, luctus et interdum.
                </h5>
              </div>
              <div className="row">
                <div className="col text-center pt-5">
                  <div className="image">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num1.png"
                      alt=""
                    />
                  </div>
                  <h2>Variant 1</h2>
                  <span>
                    Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                  </span>
                  <ul>
                    <li>10</li>
                    <li>Lorem lipsum</li>
                    <li>○</li>
                    <li>Morbi accumsan</li>
                    <li>○</li>
                  </ul>
                </div>
                <div className="col text-center pt-5">
                  <div className="image">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num2.png"
                      alt=""
                    />
                  </div>
                  <h2>Variant 1</h2>
                  <span>
                    Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                  </span>
                  <ul>
                    <li>10</li>
                    <li>Lorem lipsum</li>
                    <li>○</li>
                    <li>Morbi accumsan</li>
                    <li>○</li>
                  </ul>
                </div>
                <div className="col text-center pt-5">
                  <div className="image">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num3.png"
                      alt=""
                    />
                  </div>
                  <h2>Variant 1</h2>
                  <span>
                    Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                  </span>
                  <ul>
                    <li>10</li>
                    <li>Lorem lipsum</li>
                    <li>○</li>
                    <li>Morbi accumsan</li>
                    <li>○</li>
                  </ul>
                </div>
              </div>
              <div className="divider-small">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAiPjxwYXRoIGQ9Ik0wLDBDMTEuMTMsMCwxNi44LDUuOTQsMjEuOCwxMS4xOWM0LjUxLDQuNzMsOC4wOCw4LjQ3LDE1LjcsOC40N3MxMS4xOS0zLjc0LDE1LjctOC40N0M1OC4yLDUuOTQsNjMuODcsMCw3NSwwUzkxLjc5LDUuOTQsOTYuNzksMTEuMTljNC41Miw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzEzMy4yLDUuOTQsMTM4Ljg3LDAsMTUwLDBzMTYuOCw1Ljk0LDIxLjgsMTEuMTljNC41MSw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzIwOC4yLDUuOTQsMjEzLjg3LDAsMjI1LDBzMTYuOCw1Ljk0LDIxLjgsMTEuMTljNC41Miw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzI4My4yLDUuOTQsMjg4Ljg3LDAsMzAwLDBWMTAuMzRjLTcuNjIsMC0xMS4xOSwzLjc0LTE1LjcxLDguNDctNSw1LjI1LTEwLjY3LDExLjE5LTIxLjgsMTEuMTlTMjQ1LjcsMjQuMDYsMjQwLjcsMTguODFjLTQuNTItNC43My04LjA4LTguNDctMTUuNzEtOC40N3MtMTEuMTksMy43NC0xNS43LDguNDdjLTUsNS4yNS0xMC42NywxMS4xOS0yMS44LDExLjE5UzE3MC43LDI0LjA2LDE2NS43LDE4LjgxYy00LjUyLTQuNzMtOC4wOS04LjQ3LTE1LjcxLTguNDdzLTExLjE5LDMuNzQtMTUuNyw4LjQ3Yy01LDUuMjUtMTAuNjcsMTEuMTktMjEuOCwxMS4xOVM5NS43LDI0LjA2LDkwLjcsMTguODFjLTQuNTEtNC43My04LjA4LTguNDctMTUuNy04LjQ3cy0xMS4xOSwzLjc0LTE1LjcsOC40N0M1NC4zLDI0LjA2LDQ4LjYzLDMwLDM3LjUsMzBTMjAuNywyNC4wNiwxNS43LDE4LjgxQzExLjE5LDE0LjA4LDcuNjIsMTAuMzQsMCwxMC4zNFoiLz48L3N2Zz4="
                  alt=""
                />
              </div>
              <h3 id="additional-info">Additional information</h3>
              <div className="additional">
                <span className="title">Color</span>
                <div className="divider-sm">
                  <span></span>
                </div>
                <span className="value">
                  <i>Blue, Brown, Red, Yellow</i>
                </span>
              </div>
              <div className="divider-small">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAiPjxwYXRoIGQ9Ik0wLDBDMTEuMTMsMCwxNi44LDUuOTQsMjEuOCwxMS4xOWM0LjUxLDQuNzMsOC4wOCw4LjQ3LDE1LjcsOC40N3MxMS4xOS0zLjc0LDE1LjctOC40N0M1OC4yLDUuOTQsNjMuODcsMCw3NSwwUzkxLjc5LDUuOTQsOTYuNzksMTEuMTljNC41Miw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzEzMy4yLDUuOTQsMTM4Ljg3LDAsMTUwLDBzMTYuOCw1Ljk0LDIxLjgsMTEuMTljNC41MSw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzIwOC4yLDUuOTQsMjEzLjg3LDAsMjI1LDBzMTYuOCw1Ljk0LDIxLjgsMTEuMTljNC41Miw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzI4My4yLDUuOTQsMjg4Ljg3LDAsMzAwLDBWMTAuMzRjLTcuNjIsMC0xMS4xOSwzLjc0LTE1LjcxLDguNDctNSw1LjI1LTEwLjY3LDExLjE5LTIxLjgsMTEuMTlTMjQ1LjcsMjQuMDYsMjQwLjcsMTguODFjLTQuNTItNC43My04LjA4LTguNDctMTUuNzEtOC40N3MtMTEuMTksMy43NC0xNS43LDguNDdjLTUsNS4yNS0xMC42NywxMS4xOS0yMS44LDExLjE5UzE3MC43LDI0LjA2LDE2NS43LDE4LjgxYy00LjUyLTQuNzMtOC4wOS04LjQ3LTE1LjcxLTguNDdzLTExLjE5LDMuNzQtMTUuNyw4LjQ3Yy01LDUuMjUtMTAuNjcsMTEuMTktMjEuOCwxMS4xOVM5NS43LDI0LjA2LDkwLjcsMTguODFjLTQuNTEtNC43My04LjA4LTguNDctMTUuNy04LjQ3cy0xMS4xOSwzLjc0LTE1LjcsOC40N0M1NC4zLDI0LjA2LDQ4LjYzLDMwLDM3LjUsMzBTMjAuNywyNC4wNiwxNS43LDE4LjgxQzExLjE5LDE0LjA4LDcuNjIsMTAuMzQsMCwxMC4zNFoiLz48L3N2Zz4="
                  alt=""
                />
              </div>
              <h3 id="review">Reviews</h3>
              <p>There are no reviews yet.</p>
              <span style={{ fontSize: "23px" }}>
                Be the first to review “Duvet Cover Set Pumpkin Bear”
              </span>
              <br />
              <span>You must be logged in to post a review.</span>
              <div className="divider-small">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAiPjxwYXRoIGQ9Ik0wLDBDMTEuMTMsMCwxNi44LDUuOTQsMjEuOCwxMS4xOWM0LjUxLDQuNzMsOC4wOCw4LjQ3LDE1LjcsOC40N3MxMS4xOS0zLjc0LDE1LjctOC40N0M1OC4yLDUuOTQsNjMuODcsMCw3NSwwUzkxLjc5LDUuOTQsOTYuNzksMTEuMTljNC41Miw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzEzMy4yLDUuOTQsMTM4Ljg3LDAsMTUwLDBzMTYuOCw1Ljk0LDIxLjgsMTEuMTljNC41MSw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzIwOC4yLDUuOTQsMjEzLjg3LDAsMjI1LDBzMTYuOCw1Ljk0LDIxLjgsMTEuMTljNC41Miw0LjczLDguMDgsOC40NywxNS43LDguNDdzMTEuMTktMy43NCwxNS43MS04LjQ3QzI4My4yLDUuOTQsMjg4Ljg3LDAsMzAwLDBWMTAuMzRjLTcuNjIsMC0xMS4xOSwzLjc0LTE1LjcxLDguNDctNSw1LjI1LTEwLjY3LDExLjE5LTIxLjgsMTEuMTlTMjQ1LjcsMjQuMDYsMjQwLjcsMTguODFjLTQuNTItNC43My04LjA4LTguNDctMTUuNzEtOC40N3MtMTEuMTksMy43NC0xNS43LDguNDdjLTUsNS4yNS0xMC42NywxMS4xOS0yMS44LDExLjE5UzE3MC43LDI0LjA2LDE2NS43LDE4LjgxYy00LjUyLTQuNzMtOC4wOS04LjQ3LTE1LjcxLTguNDdzLTExLjE5LDMuNzQtMTUuNyw4LjQ3Yy01LDUuMjUtMTAuNjcsMTEuMTktMjEuOCwxMS4xOVM5NS43LDI0LjA2LDkwLjcsMTguODFjLTQuNTEtNC43My04LjA4LTguNDctMTUuNy04LjQ3cy0xMS4xOSwzLjc0LTE1LjcsOC40N0M1NC4zLDI0LjA2LDQ4LjYzLDMwLDM3LjUsMzBTMjAuNywyNC4wNiwxNS43LDE4LjgxQzExLjE5LDE0LjA4LDcuNjIsMTAuMzQsMCwxMC4zNFoiLz48L3N2Zz4="
                  alt=""
                />
              </div>
            </div>
            <div className="related-product">
              <h3 className="title">Related product</h3>
              <ProductList
                data={mockRelatedProduct}
                handleWishlist={handleWishlist}
                wishlist={product.wishlist}
              />
            </div>
            <div className="back-to-product">
              <span>Not for you</span>
              <span>- Back to product list</span>
            </div>
          </div>
          <div className="mt-5">
            <HomePageFooter />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
