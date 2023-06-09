import { ProductType, ColorType } from "../../configs/types";
import "./productList.scss";
import ProductModal from "./ProductModal";
import useProductList from "./useProductList";

type PropsType = {
  data: ProductType[];
  handleWishlist: (productId: number) => void;
  wishlist: number[];
  handleExpand?: (item: ProductType) => void;
};

const ProductList = (props: PropsType) => {
  const {
    navigate,
    openProductModal,
    currentProduct,
    handleOpenModal,
    handleCloseModal,
    EventModal,
    quantity,
    isDisableAdd,
  } = useProductList();
  return (
    <>
      <ProductModal
        open={openProductModal}
        onClose={handleCloseModal}
        item={currentProduct}
        EventModal={EventModal}
        quantity={quantity}
        isDisableAdd={isDisableAdd}
      />
      <div className="products-list">
        <div className="products-wrapper">
          <ul>
            {props.data.map((item: ProductType) => (
              <li className="product" key={item.id}>
                <div className="product-card">
                  <div className="image-wrapper">
                    <img src={item.imageFront} className="img-front" alt="" />
                    <img src={item.imageBack} className="img-back" alt="" />
                    <div className="option">
                      <a>
                        <i
                          className="fa-solid fa-link"
                          onClick={() => navigate(`/product/${item.id}`)}
                        ></i>
                      </a>
                      <a>
                        <i
                          onClick={() => props.handleWishlist(item.id)}
                          className="fa-solid fa-heart"
                          style={{
                            color: props.wishlist.includes(item.id)
                              ? "red"
                              : "black",
                          }}
                        ></i>
                      </a>
                      <a>
                        <i
                          onClick={() => handleOpenModal(item)}
                          className="fa-solid fa-expand"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="info-wrapper">
                    <h5 className="product-name">{item.productName}</h5>
                    <ul className="colors-wrapper">
                      {item.colorList.map((color: ColorType, index: number) => (
                        <li key={index}>
                          <a href="#">
                            <span
                              style={{ backgroundColor: color.code }}
                            ></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <p className="price">${item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductList;
