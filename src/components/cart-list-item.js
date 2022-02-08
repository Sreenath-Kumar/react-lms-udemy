function CartItem(props) {
  return (
    <>
      <li className="cart-list-item">
        <div
          className="cart-item-img"
          style={{
            backgroundImage: `url(
          ${props.img}
        )`,
          }}
        ></div>
        <div className="cart-item">
          <div className="cart-item-description">
            <span>
              <p className="cart-item-label">{props.name}</p>
              <div className="price-quant">
                <p className="cart-item-price">${props.sellingPrice}</p>
              </div>
            </span>
          </div>
          <div className="cart-item-trash">
            <span
              className="item-trash-ic"
              id={props.id}
              onClick={props.removeCartItem}
            ></span>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItem;
