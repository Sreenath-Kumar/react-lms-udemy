import { Link } from "react-router-dom";

function DynamicUser(props) {
  console.log();
  if (props.userExists) {
    return (
      <div className="dynamic-user-info">
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
      </div>
    );
  } else {
    return (
      <div className="dynamic-user-info">
        <Link to="/login">
          <button className="btn lg-btn lg-btn-o">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="btn  signin-btn">Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default DynamicUser;
