import { useEffect } from "react";
import "../styles/homePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../../../components/Header/Header";
import HomePageFooter from "../../../components/HomePageFooter/HomePageFooter";
import Footer from "../../../components/Footer/Footer";
import ProductList from "../../../components/ProductList/ProductList";
import useHomePage from "../hooks/useHomePage";
import HeaderMobile from "../../../components/Header/HeaderMobile";
import Cart from "../../../components/Cart/Cart";

const HomePage = () => {
  const {
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
  } = useHomePage();
  useEffect(() => {
    document.title = "BeBaby Shop";
  }, []);
  return (
    <>
      <HeaderMobile onOpenCart={handleOpenCart} product={product} />
      <Header
        product={product}
        isOpenCart={isOpenCart}
        onOpenCart={handleOpenCart}
        page={"home"}
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
      <div className="homepage">
        <div className="homepage-wrapper">
          <div className="section-wrapper">
            <div className="slider-image">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="image">
                    <img src="./images/babyshop-slider-pic1.webp" alt="" />
                    <div className="slider-content">
                      <h2>
                        <i>Collection</i>
                      </h2>
                      <h1>Autumn - Winter</h1>
                      <h1 className="year">2021</h1>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image">
                    <img src="./images/babyshop-slider-pic2.webp" alt="" />
                    <div className="slider-content">
                      <h1>What's Trending</h1>
                      <h1 className="year">in 2022</h1>
                      <a href="#">
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="promo-wrapper">
              <div className="promo-list">
                <div className="promo-item">
                  <h3>
                    Select your <br />
                    child's age
                  </h3>
                  <a href="#">
                    <span>0 - 2</span>
                  </a>
                  <a href="#">
                    <span>2- 4</span>
                  </a>
                  <a href="#">
                    <span>4- 6</span>
                  </a>
                </div>
                <div className="promo-item promo-collection">
                  <div className="item">
                    <img src="./images/babyshop-promo-pic1.webp" alt="" />
                    <h3>
                      Duvet Cover Set <br />
                      <b>-40% off</b>
                    </h3>
                    <a href="#">
                      <span>VIEW COLLECTION</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="product-type-list">
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>Bed Sets</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>Sleepwear</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>Pyjamas</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>Nighties</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>Bathrobes</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>Classic</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>Fancy</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="product-type-wrapper">
                  <div className="type-box">
                    <a href="#">
                      <span>More products</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-wrapper">
            <div className="product-catalog">
              <div className="product-catalog-wrapper">
                <div className="pw-header">
                  <div className="header-inner">
                    <h3>
                      Welcome in our child's world. <br />
                      All our products are made <br />
                      from generations with pasion
                    </h3>
                  </div>
                </div>
                <div className="pw-header">
                  <div className="header-inner">
                    <h2>
                      Product's
                      <br />
                      Catalog
                    </h2>
                  </div>
                </div>
                <ProductList
                  data={mockData}
                  handleWishlist={handleWishlist}
                  wishlist={product.wishlist}
                />
                <div className="pw-header">
                  <a className="button-black" href="#">
                    go to shop
                  </a>
                  <a className="button-grey" href="#">
                    see promotions
                  </a>
                </div>
                <div className="special-offers">
                  <div className="special-offers-wrapper">
                    <div
                      className="special-inner offer-home-pic"
                      style={{
                        backgroundImage: `url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-home-pic1.webp)`,
                      }}
                    >
                      <div className="offer-wrapper">
                        <p>limited offer</p>
                        <h1>-50%</h1>
                        <h2>
                          Holiday <br />
                          Sale
                        </h2>
                        <div className="offer-timing">
                          <h3>
                            222 <br />
                            <span>days</span>
                          </h3>
                          <h3>
                            10
                            <br />
                            <span>hours</span>
                          </h3>
                          <h3>
                            07
                            <br />
                            <span>minutes</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="special-inner giftcard">
                      <div className="offer-wrapper">
                        <p>use discounts and promotions</p>
                        <h3>
                          Special <span>Offers</span>
                        </h3>
                        <div className="giftcard-slider">
                          <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <div className="slider-img">
                                <img
                                  src="./images/babyshop-giftcart.webp"
                                  alt=""
                                />
                                <div className="desc">
                                  <h5>Gift card with benefits</h5>
                                  <img
                                    src="./images/babyshop-befriends.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="slider-img">
                                <img
                                  src="./images/babyshop-bebear.webp"
                                  alt=""
                                />
                                <div className="desc">
                                  <h5>Win a big</h5>
                                  <img
                                    src="./images/babyshop-beteddybear.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="benefits">
                <div className="benefits-header">
                  <h2>
                    What are benefits of <br /> choosing us?
                  </h2>
                  <h5>
                    Vestibulum dapibus, mauris nec malesuada fames ac turpis
                    velit, <br /> rhoncus eu, luctus et interdum.
                  </h5>
                </div>
                <div className="benefits-detail-wrapper">
                  <div className="row">
                    <div className="col-2 d-flex flex-column justify-content-evenly">
                      <div className="text-center">
                        <img
                          src="./images/babyshop-features-icon1.png"
                          alt=""
                        />
                        <h6 className="title">100% bio</h6>
                        <div className="desc">
                          Lorem ipsum dolor sit amet enim etiam lorem lectus
                        </div>
                      </div>
                      <div className="text-center">
                        <img
                          src="./images/babyshop-features-icon3.png"
                          alt=""
                        />
                        <h6 className="title">comfort foam</h6>
                        <div className="desc">
                          Lorem ipsum dolor sit amet enim etiam lorem lectus
                        </div>
                      </div>
                    </div>
                    <div className="col-8 text-center">
                      <img src="./images/babyshop-features-pic1.webp" alt="" />
                    </div>
                    <div className="col-2 d-flex flex-column justify-content-evenly">
                      <div className="text-center">
                        <img
                          src="./images/babyshop-features-icon2.png"
                          alt=""
                        />
                        <h6 className="title">high safety</h6>
                        <div className="desc">
                          Lorem ipsum dolor sit amet enim etiam lorem lectus
                        </div>
                      </div>
                      <div className="text-center">
                        <img
                          src="./images/babyshop-features-icon4.png"
                          alt=""
                        />
                        <h6 className="title">moisture control</h6>
                        <div className="desc">
                          Lorem ipsum dolor sit amet enim etiam lorem lectus
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center  mt-5 mb-5">
                <a href="#" className="button-black">
                  see all features
                </a>
              </div>
              <div className="blogpost-wrapper">
                <div className="row">
                  <div className="col-8 p-0 blog-post">
                    <div className="photo-wrapper">
                      <img
                        src="./images/babyshop-blog-pic1-1200x900.webp"
                        alt=""
                      />
                    </div>
                    <div className="desc-wrapper">
                      <div className="desc">
                        <div className="post-meta">
                          <span className="author me-1">
                            <i className="fa-solid fa-user me-1"></i>
                            <a href="#">Muffin group</a>
                          </span>
                          <span className="date">
                            <span className="label me-1">on</span>
                            <i className="fa-solid fa-clock me-1"></i>
                            <span className="post-date">October 11, 2021</span>
                          </span>
                        </div>
                        <div className="post-title">
                          <h3>
                            <a href="">Tempor diam pede cursus vitae</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <div className="blog-post">
                      <div className="photo-wrapper">
                        <img
                          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic2-1200x900.webp"
                          alt=""
                        />
                      </div>
                      <div className="desc-wrapper">
                        <div className="desc">
                          <div className="post-meta">
                            <span className="author me-1">
                              <i className="fa-solid fa-user me-1"></i>
                              <a href="#">Muffin group</a>
                            </span>
                            <span className="date">
                              <span className="label me-1">on</span>
                              <i className="fa-solid fa-clock me-1"></i>
                              <span className="post-date">
                                October 11, 2021
                              </span>
                            </span>
                          </div>
                          <div className="post-title">
                            <h3>
                              <a href="">Tempor diam pede cursus vitae</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-post">
                      <div className="photo-wrapper">
                        <img
                          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic3-1200x900.webp"
                          alt=""
                        />
                      </div>
                      <div className="desc-wrapper">
                        <div className="desc">
                          <div className="post-meta">
                            <span className="author me-1">
                              <i className="fa-solid fa-user me-1"></i>
                              <a href="#">Muffin group</a>
                            </span>
                            <span className="date">
                              <span className="label me-1">on</span>
                              <i className="fa-solid fa-clock me-1"></i>
                              <span className="post-date">
                                October 11, 2021
                              </span>
                            </span>
                          </div>
                          <div className="post-title">
                            <h3>
                              <a href="">Tempor diam pede cursus vitae</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bestsellers-wrapper pt-5">
                <div className="text-center">
                  <h2 className="title">Our bestsellers</h2>
                </div>
                <ProductList
                  data={mockBestSellers}
                  handleWishlist={handleWishlist}
                  wishlist={product.wishlist}
                />
              </div>
              <div className="client-wrapper">
                <div>
                  <a className="img" href="#">
                    <img src="./images/babyshop-client1.png" alt="" />
                  </a>
                </div>
                <div>
                  <a className="img" href="#">
                    <img src="./images/babyshop-client2.png" alt="" />
                  </a>
                </div>
                <div>
                  <a className="img" href="#">
                    <img src="./images/babyshop-client3.png" alt="" />
                  </a>
                </div>

                <div>
                  <a className="img" href="#">
                    <img src="./images/babyshop-client4.png" alt="" />
                  </a>
                </div>
                <div>
                  <a className="img" href="#">
                    <img src="./images/babyshop-client5.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-wrapper">
            <div
              className="social"
              style={{
                backgroundImage: `url(https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-instagram.webp)`,
              }}
            >
              <a href="#" className="button-yellow">
                instagram
              </a>
            </div>
          </div>
          <div className="section">
            <HomePageFooter />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
