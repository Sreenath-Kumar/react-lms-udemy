import { Link } from "react-router-dom";
function Login() {
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
                />
                <i className="fas fa-lock lock"></i>
              </div>
            </div>
            <div className="button">
              <button className="btn" type="submit">
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
