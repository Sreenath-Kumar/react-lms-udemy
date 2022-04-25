import { useState } from "react";
import React from "react";

function Checkout(props) {
  console.log("checkout render");
  const cartData = props.cartItems;
  const [selectedCard, setSelectedCard] = useState("Visa");
  const [selectedCardLogo, setSelectedCardLogo] = useState(
    "https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
  );
  const [otherCards, setOtherCards] = useState([
    "Master Card",
    "American Express",
  ]);

  let price = cartData.reduce(
    (total, prod) => total + parseFloat(prod.sellingPrice),
    0
  );
  let vat = parseFloat(((price * 19) / 100).toFixed(2));
  let delivery = 4.95;
  let totalPrice = price + vat + delivery;
  console.log(typeof vat);

  console.log(totalPrice);

  const cardSelected = (e) => {
    let oldcard = selectedCard;
    let item = e.target.innerText;
    setSelectedCard(item);
    let x = otherCards.indexOf(item);
    otherCards[x] = oldcard;
    setOtherCards(otherCards);
  };
  const changeLogo = (item) => {
    if (item === "Visa") {
      setSelectedCardLogo(
        "https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
      );
    } else if (item === "Master Card") {
      setSelectedCardLogo(
        "https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.pnghttps://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png"
      );
    } else if (item === "American Express") {
      setSelectedCardLogo(
        "https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png"
      );
    }
  };
  const showDropdown = () => {
    const element = document.getElementsByClassName("dropdown-select");
    const ele = element[0];
    if (ele.className.includes("visible")) {
      ele.classList.remove("visible");
    } else {
      ele.classList.add("visible");
    }
  };

  // let activeDropdown;
  // window.onclick = function (e) {
  //   // console.log(e.target.tagName);
  //   // console.log("dropdown");
  //   // console.log(activeDropdown);
  //   if (e.target.tagName === "LI" && activeDropdown) {
  //     if (e.target.innerHTML === "Master Card") {
  //       document.getElementById("credit-card-image").src =
  //         "https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png";
  //       activeDropdown.classList.remove("visible");
  //       activeDropdown = null;
  //       e.target.innerHTML = document.getElementById("current-card").innerHTML;
  //       document.getElementById("current-card").innerHTML = "Master Card";
  //     } else if (e.target.innerHTML === "American Express") {
  //       document.getElementById("credit-card-image").src =
  //         "https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png";
  //       activeDropdown.classList.remove("visible");
  //       activeDropdown = null;
  //       e.target.innerHTML = document.getElementById("current-card").innerHTML;
  //       document.getElementById("current-card").innerHTML = "American Express";
  //     } else if (e.target.innerHTML === "Visa") {
  //       document.getElementById("credit-card-image").src =
  //         "https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png";
  //       activeDropdown.classList.remove("visible");
  //       activeDropdown = null;
  //       e.target.innerHTML = document.getElementById("current-card").innerHTML;
  //       document.getElementById("current-card").innerHTML = "Visa";
  //     }
  //   } else if (e.target.className !== "dropdown-btn" && activeDropdown) {
  //     activeDropdown.classList.remove("visible");
  //     activeDropdown = null;
  //   }
  // };

  return (
    <div className="container">
      <div className="window">
        <div className="order-info">
          <div className="order-info-content">
            <h2>Order Summary</h2>
            <div className="line"></div>
            {cartData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="prod-container">
                    <div className="img-col">
                      <img src={item.img} className="full-width" alt=""></img>
                    </div>
                    <div className="info-col">
                      <div className="prod-title-variation">
                        <span className="thin">{item.title}</span>
                      </div>
                      <div className="prod-price-variation">
                        {/* <div class="prod-variation">
                    <span>Color: Grey/Orange</span>
                    <span>Size: 10.5</span>
                  </div> */}
                        <div className="price">${item.sellingPrice}</div>
                      </div>
                    </div>
                  </div>
                  <div className="line"></div>
                </div>
              );
            })}

            {/* <div className="line"></div>

            <div className="line"></div> */}
            <div className="total">
              <span style={{ float: "left" }}>
                <div className="thin dense">VAT 19%</div>
                <div className="thin dense">Delivery</div>
                TOTAL
              </span>
              <span style={{ float: "right", textAlign: "right" }}>
                <div className="thin dense">${vat}</div>
                <div className="thin dense">${delivery}</div>$
                {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="credit-info">
          <div className="credit-info-content">
            <div className="credit-info-head">
              <div style={{ width: "50%" }}>Please select your card:</div>
              <div
                className="dropdown"
                id="card-dropdown"
                onClick={(e) => showDropdown(e)}
              >
                <div className="dropdown-btn" id="current-card">
                  {selectedCard}
                </div>
                <div className="dropdown-select">
                  <ul>
                    {otherCards.map((item) => {
                      return (
                        <li
                          key={item}
                          onClick={(e) => {
                            cardSelected(e);
                            changeLogo(item);
                          }}
                        >
                          {item}
                        </li>
                      );
                    })}

                    {/* <li>American Express</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <img
              src={`${selectedCardLogo}`}
              height="80"
              className="credit-card-image"
              id="credit-card-image"
              alt={selectedCard}
            ></img>
            Card Number
            <input className="input-field"></input>
            Card Holder
            <input className="input-field"></input>
            <div className="inline-form">
              <div className="field-container">
                <label className="email" htmlFor="expire">
                  Expires
                </label>
                <input className="input-field" id="expire"></input>
              </div>
              <div className="field-container">
                <label className="email" htmlFor="cvc">
                  CVC
                </label>
                <input className="input-field" id="cvc"></input>
              </div>
            </div>
            <button className="pay-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
