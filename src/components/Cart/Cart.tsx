import "./cart.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { CartItem } from "../../configs/types";

type Props = {
  product?: CartItem[];
  open?: boolean;
  onOpen?: Function
  onClose?: Function
  onRemoveItemCart?: Function
  onIncreaseItemCart?: Function
  onDecreaseItemCart?: Function
};

const Cart = ({ product = [], open = false, onOpen, onClose, onRemoveItemCart, onDecreaseItemCart, onIncreaseItemCart }: Props) => {
  let totalPrice = 0
  for (let i = 0; i < product.length; i++) {
    totalPrice += product[i].price*product[i].quantity
  }
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open}
      onClose={() => onClose?.(false)}
      onOpen={() => onOpen?.(true)}
    >
      <div className="cart-wrapper">
        <div className="cart-header">
          <i className="fa-solid fa-xmark" onClick={() => onClose?.(false)}></i>
          <h2 className="title">Cart</h2>
        </div>
        <div className="cart-list-item">
          {product?.map((e: CartItem) => (
            <div className="cart-item p-2 mb-3">
              <div
                className="cart-item-detail"
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <div className="row">
                  <div className="col p-2">
                    <img src={e?.imageFront} alt="" />
                  </div>
                  <div
                    className="col p-2"
                    style={{ borderRight: "1px solid #ddd" }}
                  >
                    <h5 className="name">{e?.productName}</h5>
                    <p className="color">
                      <span>Color:</span>
                      {e?.color}
                    </p>
                    <p className="price">
                      <span>Price:</span>${e?.price}
                    </p>
                  </div>
                  <div className="col p-2 d-flex justify-content-center align-items-center">
                    <h5 className="price">${e?.price * e?.quantity || 0}</h5>
                  </div>
                </div>
              </div>
              <div className="cart-action pt-2">
                <div className="count">
                  <button onClick={() => onDecreaseItemCart?.(e)}>-</button>
                  <input
                    type="number"
                    id="number"
                    value={e?.quantity}
                    inputMode="numeric"
                  />
                  <button onClick={() => onIncreaseItemCart?.(e)}>+</button>
                </div>
                <span className="btn-remove" onClick={() => onRemoveItemCart?.(e)}>
                  <i className="fa-solid fa-trash"></i>Remove
                </span>
              </div>
            </div>
          )) || <></>}
        </div>
        <div className="to-checkout">
          <div className="total-price">
            <span className="title">Subtotal:</span>
            <span className="title">${totalPrice}</span>
          </div>
          <div className="total-price">
            <span className="title">Total:</span>
            <span className="value">${totalPrice}</span>
          </div>
          <div className="button-black">
            <a>Proceed to checkout</a>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default Cart;
