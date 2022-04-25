import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import db, { auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(props) {
  console.log("login render");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isCancelled = false;
    const handleChange = () => {};
    handleChange();
    return () => {
      isCancelled = true;
    };
  }, [loginEmail, loginPass]);

  const login = async () => {
    try {
      const userAuth = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
      alert("Login Successful");
      await setDoc(doc(db, "user-cart", auth.currentUser.uid), {
        ...props.cartItems,
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="signup-container">
          <div className="wrapper">
            <div className="p-one">
              <p>Sign in to your your account.</p>
            </div>
            <div className="inp">
              <div className="field-container">
                <label className="email" htmlFor="email">
                  Email
                </label>
                <input
                  className="email-margin"
                  type="text"
                  id="email"
                  placeholder="youremail@gmail.com"
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
                <i className="fas fa-envelope email"></i>
              </div>
              <div className="field-container">
                <label className="pass" htmlFor="pass">
                  Password
                </label>
                <input
                  type="text"
                  id="pass"
                  placeholder="6+ strong character"
                  onChange={(e) => {
                    setLoginPass(e.target.value);
                  }}
                />
                <i className="fas fa-lock lock"></i>
              </div>
            </div>
            <div className="button">
              <button
                className="btn"
                type="submit"
                onClick={login}
                onSubmit={login}
              >
                Sign in
              </button>
            </div>
            <div className="line">
              <span> Or login with</span>
            </div>
            <div className="icon-wrapper">
              <div className="google">
                <i className="fab fa-google"></i>
              </div>
              <div className="facebook">
                <i className="fab fa-facebook"></i>
              </div>
              <div className="apple">
                <i className="fab fa-apple"></i>
              </div>
            </div>
            <div className="down">
              <span> Don't have an account? </span>
              <Link to="/signup"> Sign Up Now </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
