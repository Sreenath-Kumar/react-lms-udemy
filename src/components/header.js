import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import DynamicUser from "./dynamic-user-info";

function Header(props) {
  console.log("render header");
  // const [userExists, setUserExists] = useState("");

  // useEffect(() => {
  //   const checkUser = async () => {
  //     onAuthStateChanged(auth, (u) => {
  //       if (u) {
  //         setUserExists(true);
  //       }
  //     });
  //   };
  //   checkUser();
  // }, []);
  return (
    <>
      <div id="nav-div">
        <div className="nav-content">
          <div className="three-divs">
            <div className="img-div">
              <Link to="/" className="one">
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                  alt="udemy logo"
                  width="110px"
                  height="31.89px"
                />
              </Link>
            </div>

            <div className="cate-dropdown ">
              <button className="btn lg-btn cat-btn">
                <i className="fas fa-th" style={{ color: "#a1a7b3" }}></i>{" "}
                Categories
              </button>
              <div className="dropdown-content">
                <ul>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="three-divs">
            <input
              type="text"
              className="input-area"
              placeholder="Search for Courses"
            />
            <i className="fas fa-search input-logo"></i>
          </div>

          <div className="three-divs">
            <button className="btn lg-btn">Udemy for Business</button>
            <button className="btn lg-btn">Tech Online</button>
            <Link to="/cart">
              <div
                id="cart-btn"
                className="cart-btn"
                onMouseEnter={props.showcart}
                onMouseLeave={props.closecart}
              >
                <button className="btn btn-round">
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "gray" }}
                  ></i>
                </button>
                <div className="cart-nmbr">{props.cartItemNumber}</div>
              </div>
            </Link>
            <DynamicUser userExists={props.userExists} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
