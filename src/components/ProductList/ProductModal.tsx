import "./productList.scss";
import Dialog from "@mui/material/Dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import RulerTable from "../RulerTable/RulerTable";
import { CartItem } from "../../configs/types";
import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Option from "@mui/joy/Option";
import { EventModalType } from "../../configs/types";

type PropsType = {
  open?: boolean;
  onClose?: Function;
  item?: CartItem;
  EventModal?: EventModalType;
  quantity: number;
  isDisableAdd: boolean;
};

const ProductModal = ({
  open = false,
  onClose,
  item,
  EventModal,
  quantity,
  isDisableAdd,
}: PropsType) => {
  return (
    <Dialog open={open} onClose={() => onClose?.()}>
      <div className="product-modal">
        <div className="image-wrapper">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
        <div className="info-wrapper">
          <i className="fa-solid fa-xmark close" onClick={() => onClose?.()}></i>
          <h4 className="title">{item?.productName}</h4>
          <h5 className="price">${item?.price}</h5>
          <h6 className="desc">
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            non felis eleifend justo vel bibendum sapien.
          </h6>
          <ul className="desc">
            <li>
              Maecenas malesuada 5 elit lectus felis, malesuada ultricies.
            </li>
            <li>Curabitur et ligula. Ut molestie a, ultricies porta urna.</li>
            <li>Vestibulum commodo volutpat a, convallis ac, laoreet enim.</li>
            <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
            <li>Composition: Main material: 95% Cotton, 5% Polyester</li>
          </ul>
          <RulerTable />
          {!!item?.heightList && item.heightList.length > 0 && (
            <div className="height param-box">
              <label>Height</label>
              <ul>
                {item.heightList.map((i) => (
                  <li onClick={() => EventModal?.handleChooseHeight?.(i)}>
                    <span className={item.height === i ? "active" : ""}>
                      {i}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!!item?.ageList && (
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
                onChange={(
                  event:
                    | React.MouseEvent<Element, MouseEvent>
                    | React.KeyboardEvent<Element>
                    | React.FocusEvent<Element, Element>
                    | null,
                  value: {} | null
                ) => EventModal?.handleChooseAge?.(event, value)}
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

          {!!item?.colorList && item?.colorList.length > 0 && (
            <div className="color param-box">
              <label>Color</label>
              <ul>
                {item?.colorList?.map((i) => (
                  <li>
                    <a
                      onClick={() => EventModal?.handleChooseColor?.(i)}
                      className={
                        item?.color?.toLowerCase() === i.name.toLowerCase()
                          ? "active"
                          : ""
                      }
                    >
                      <span style={{ backgroundColor: `${i.code}` }}></span>
                    </a>
                  </li>
                )) || <></>}
              </ul>
            </div>
          )}
          <div className="add-cart">
            <div className="count">
              <button onClick={() => EventModal?.handleDecreaseValue?.()}>
                -
              </button>
              <input
                type="number"
                id="number"
                value={quantity}
                inputMode="numeric"
              />
              <button onClick={() => EventModal?.handleIncreaseValue?.()}>
                +
              </button>
            </div>
            <div className="add">
              <button
                onClick={() => EventModal?.handleAddToCart?.()}
                disabled={isDisableAdd}
                className={isDisableAdd ? "disable-btn" : ""}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="modal-meta">
            <span className="tagged-as">
              Tags: <a href="#">Baby</a> <a href="#">Set</a>
            </span>
            <span className="posted-in">
              Categories: <a href="#">Bathrobes</a> <a href="#">Classic</a>
            </span>
            <span className="sku-wrapper">
              SKU:
              <span className="sku">BE-8723U2-1-1</span>
            </span>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
