import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

function CondiPart() {
  const [userExists, setUserExists] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUserExists(true);
      } else {
        setUserExists(false);
      }
    });
    return userExists;
  }, [userExists]);

  if (userExists) {
    return (
      <>
        <Link to="/wishlist">
          <button className="btn-wishlist">
            <i className="far fa-heart" style={{ color: "gray" }}></i>
          </button>
        </Link>

        <Link to="/account" className="user-profile">
          <img
            className="user-avatar"
            src="../images/icon.png"
            alt="user-avatar"
          />
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/login">
          <button className="btn lg-btn lg-btn-o">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="btn  signin-btn">Sign Up</button>
        </Link>
      </>
    );
  }
}
export default CondiPart;
