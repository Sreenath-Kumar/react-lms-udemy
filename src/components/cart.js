import CartItem from "./cart-list-item";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Cart(props) {
  let cartItems = props.cartItems;
  const navigate = useNavigate();
  let price = cartItems.reduce(
    (total, prod) => total + parseFloat(prod.sellingPrice),
    0
  );

  return (
    <div
      onMouseOver={props.showcart}
      onMouseLeave={props.closeCart}
      id="cart-wrapper"
      className={props.isactive ? "cart-wrapper cart-visible" : "cart-wrapper"}
    >
      <div className="cart-panel">
        <div className="cart-header">
          <div className="cart-tabs">
            <ul className="cart-tab-table">
              <li className="cart-tab-cell selected">
                <span className="cart-tab">
                  <span className="tab-ic tab-cart-ic"></span>
                  <span className="tab-label">{price}</span>
                </span>
              </li>
            </ul>
            <span className="tab-selector"></span>
          </div>
        </div>
        <div className="cart-content" style={{ height: "50%" }}>
          <div className="cart-sections">
            <section className="cart-section nano has-scrollbar">
              <ul
                className="cart-list overthrow nano-content"
                style={{ right: "-17px" }}
              >
                {cartItems.map((item, index) => {
                  return (
                    <CartItem
                      key={index}
                      id={item.id}
                      img={item.img}
                      name={item.title}
                      sellingPrice={item.sellingPrice}
                      removeCartItem={props.removeFromCart}
                    />
                  );
                })}
              </ul>
              <div className="nano-pane" style={{ display: "block" }}>
                <div
                  className="nano-slider"
                  style={{ height: "74px", transform: "translate(0px, 0px)" }}
                ></div>
              </div>
            </section>
          </div>
        </div>
        <footer className="cart-footer">
          <div className="cart-checkout-btn">
            <span className="checkout-cart-ic"></span>

            <span
              className="checkout-label"
              onClick={() => {
                auth.currentUser ? navigate("/cart") : navigate("/signup");
              }}
            >
              Checkout
            </span>
          </div>
          <span className="cart-copyright">
            <span onClick={props.closeCart}>close</span>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default Cart;
