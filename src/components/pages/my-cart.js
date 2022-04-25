import { Link } from "react-router-dom";
import "../../css/cart-page.css";

function MyCart(props) {
  const total = props.cartItems.reduce(
    (total, prod) => total + parseFloat(prod.sellingPrice),
    0
  );

  return (
    <section className="cart_page_wrapper">
      <div className="cart_page_lists">
        <div className="cart_title">
          <span className="material-icons-outlined">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="40"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16l.803-10Z" />
                <path d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5" />
              </g>
            </svg>
          </span>
          Your Shopping Cart
        </div>

        <div className="cart_list_wrap">
          <div className="cart_responsive">
            {props.cartItems.map((item) => {
              return (
                <div className="tr_item" key={item.id}>
                  <div className="td_item item_img">
                    <img alt="product-thumbnail" src={item.img} />
                  </div>
                  <div className="td_item item_name">
                    <label className="main">{item.title}</label>
                    <label className="sub">Ref. 007891987</label>
                  </div>
                  <div className="td_item item_color">
                    <label>Blue</label>
                  </div>
                  <div className="td_item item_qty">
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="more">More</option>
                    </select>
                  </div>
                  <div className="td_item item_price">
                    <label>$ {item.sellingPrice}</label>
                  </div>
                  <div className="td_item item_remove">
                    <span
                      id={item.id}
                      onClick={() => {
                        props.removeFromCart(item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25c-6.2 6.25-14.4 9.35-22.6 9.35s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416s-16.37-3.1-22.625-9.4c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="footer">
            <div className="back_cart">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="21"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M447.1 256c0 17.7-13.4 32-31.1 32H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25c-6.3 6.25-14.5 9.35-22.7 9.35s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416c17.7 0 31.1 14.3 31.1 32z"
                  />
                </svg>
                <span>Back to Shop</span>
              </Link>
            </div>
            <div className="subtotal">
              <label>Subtotal: </label>
              <strong>${total}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="cart_details">
        <div className="cart_title">Cart Details</div>
        <div className="form_row">
          <div className="form_group cart_type">
            <label className="input_label">Select Card Type</label>

            <input type="radio" name="cartType" required id="master" />
            <label className="type master" title="Master" htmlFor="master">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="40"
                height="35.56"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7c-6.8 0-11.2-5.2-11.2-11.7c0-6.5 4.4-11.7 11.2-11.7c6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7c0 6.5 4.1 11.7 11.2 11.7c6.5 0 10.9-4.9 10.9-11.7c-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7c0 6.5 4.1 11.7 10.9 11.7c6.8 0 11.2-4.9 11.2-11.7c0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1c0 .3-.3.5-.3 1.1c-.3.3-.3.5-.5.8c-.3.3-.5.5-1.1.5c-.3.3-.5.3-1.1.3c-.3 0-.5 0-1.1-.3c-.3 0-.5-.3-.8-.5c-.3-.3-.5-.5-.5-.8c-.3-.5-.3-.8-.3-1.1c0-.5 0-.8.3-1.1c0-.5.3-.8.5-1.1c.3-.3.5-.3.8-.5c.5-.3.8-.3 1.1-.3c.5 0 .8 0 1.1.3c.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3c.3-.3.3-.5.3-.8c0-.3 0-.5-.3-.8c-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5c27.2 0 53.9-8.2 76.5-23.1c-72.9-59.3-72.4-171.2 0-230.5c-22.6-15-49.3-23.1-76.5-23.1c-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5c-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7c-4.6 0-9.5 1.4-12.8 6.5c-2.4-4.1-6.5-6.5-12.2-6.5c-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2c10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2c10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4c-10.3 0-18.2 8.2-18.2 19.3c0 11.2 7.9 19.3 18.2 19.3c5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2c0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2c0 14.3 22.9 8.3 22.9 15c0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6c-10.6 0-18.2 7.9-18.2 19.3c0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15c0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9c0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9c0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6c-.3-.3-.5-.8-.8-1.1c-.3-.3-.8-.5-1.1-.8c-.5 0-1.1-.3-1.6-.3c-.3 0-.8.3-1.4.3c-.5.3-.8.5-1.1.8c-.5.3-.8.8-.8 1.1c-.3.5-.3 1.1-.3 1.6c0 .3 0 .8.3 1.4c0 .3.3.8.8 1.1c.3.3.5.5 1.1.8c.5.3 1.1.3 1.4.3c.5 0 1.1 0 1.6-.3c.3-.3.8-.5 1.1-.8c.3-.3.5-.8.8-1.1c.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5l-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3c-27.2 0-53.9 8.2-76.5 23.1c72.1 59.3 73.2 171.5 0 230.5c22.6 15 49.5 23.1 76.5 23.1c76.4.1 138.5-61.9 138.5-138.4z"
                />
              </svg>
            </label>

            <input type="radio" name="cartType" required id="visa" />
            <label className="type visa" title="Visa" htmlFor="visa">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="40"
                height="35.56"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5c-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106l-4.3-21.5l-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3c-14.1-7.1-22.7-11.9-22.7-19.2c.2-6.6 7.3-13.4 23.1-13.4c13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7l5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6c-39.7 0-67.6 21.2-67.8 51.4c-.3 22.3 20 34.7 35.2 42.2c15.5 7.6 20.8 12.6 20.8 19.3c-.2 10.4-12.6 15.2-24.1 15.2c-16 0-24.6-2.5-37.7-8.3l-5.3-2.5l-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3c42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
                />
              </svg>
            </label>

            <input type="radio" name="cartType" required id="paypal" />
            <label className="type paypal" title="PayPal" htmlFor="paypal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="40"
                height="35.56"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5c-9.2 0-16-5.2-16-15c0-12.2 9.5-22 21.7-22c9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7l8.2-.3c11 0 19.5-1.5 21.5-14.2c2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7l8-.3c13 0 22-3 22-18c-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7c28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2c-5.8-8.5-14.2-10-23.7-10c-24.5 0-43.2 21.5-43.2 45.2c0 19.5 12.2 32.2 31.7 32.2c9 0 20.2-4.9 26.5-11.9c-.5 1.5-1 4.7-1 6.2c0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7c0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39l-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5c0 1.2 19.5 56.8 21.2 62.1c-2.7 3.8-20.5 28.6-20.5 31.6c0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7c28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2c-5.5-8.5-14-10-23.7-10c-24.5 0-43.2 21.5-43.2 45.2c0 19.5 12.2 32.2 31.7 32.2c9.3 0 20.5-4.9 26.5-11.9c-.3 1.5-1 4.7-1 6.2c0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104l-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22c0 9.7 7 15 16.2 15c12 0 21.7-9.2 21.7-21.5c.1-9.8-6.9-15.5-16.2-15.5z"
                />
              </svg>
            </label>
          </div>

          <div className="form_group">
            <label className="input_label">Card Number</label>
            <input
              type="text"
              className="input"
              id="card_number"
              name="card"
              min="16"
              max="16"
              placeholder="0000 0000 0000 0000"
              autoComplete="off"
              required
            />
          </div>

          <div className="form_group w_75">
            <label className="input_label">Ecpiry Date</label>
            <input
              type="text"
              className="input"
              id="card_date"
              placeholder="MM / YY"
              autoComplete="off"
              required
            />
          </div>

          <div className="form_group w_25">
            <label className="input_label">CVV</label>
            <input
              type="password"
              className="input"
              min="3"
              max="3"
              placeholder="***"
              autoComplete="off"
              required
            />
          </div>

          <button className="btn">Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default MyCart;
