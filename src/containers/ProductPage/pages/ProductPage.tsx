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
  } = useProductPage();
  return (
    <>
      <HeaderMobile onOpenCart={handleOpenCart} product={product} />
      <Header
        product={product}
        isOpenCart={isOpenCart}
        onOpenCart={handleOpenCart}
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
                <h3 className="price">${item?.price}</h3>

                <ul className="color">
                  {item?.colorList?.map((i) => (
                    <li>
                      <a
                        onClick={() => handleChooseColor(i)}
                        className={color === i.code ? "active" : ""}
                      >
                        <span style={{ backgroundColor: `${i.code}` }}></span>
                      </a>
                    </li>
                  )) || <></>}
                </ul>

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
                    <button onClick={handleAddToCart}>Add to cart</button>
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
                <div className="slider-image">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="slider-img">
                        <img src={item?.imageFront} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-img">
                        <img src={item?.imageBack} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="anchor-link-btns">
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
            <div className="row mt-5">
              <div className="col text-end">
                <h6>ENVIRONMENTALLY FRIENDLY</h6>
                <p>
                  <span className="sun">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <span className="sun">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <span className="sun">
                    <i className="fa-solid fa-sun"></i>
                  </span>
                  <span className="sun">
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
                  <span className="hand">
                    <i className="fa-solid fa-hands-bubbles"></i>
                  </span>
                </p>
              </div>
              <div className="col">
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
                  <span className="burn">
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
                  <span className="gem">
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
                  Vestibulum bibendum nulla torquent semper
                </h2>
                <h5 className="title">
                  Tristique nisi rutrum porta magna pharetra aenean proin rutrum
                  nostra eu curabitur consequat dolor molestie auctor porta et
                  lacus porta fusce vulputate non dui quis.
                </h5>
              </div>
            </div>
            <div className="item">
              <div className="detail">
                <h6 className="title">PHASELLUS TORTOR</h6>
                <h2 className="title">
                  Vestibulum bibendum nulla torquent semper
                </h2>
                <h5 className="title">
                  Tristique nisi rutrum porta magna pharetra aenean proin rutrum
                  nostra eu curabitur consequat dolor molestie auctor porta et
                  lacus porta fusce vulputate non dui quis.
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
                <span></span>
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
                <span></span>
              </div>
              <h3 id="review">Reviews</h3>
              <p>There are no reviews yet.</p>
              <span style={{ fontSize: "23px" }}>
                Be the first to review “Duvet Cover Set Pumpkin Bear”
              </span>
              <br />
              <span>You must be logged in to post a review.</span>
              <div className="divider-small">
                <span></span>
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
