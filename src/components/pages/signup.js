import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="wrapper">
          <div className="p-one">
            <p>Sign up for our newsletter and receive a free gift.</p>
          </div>
          <div className="inp">
            <div className="inline-form">
              <div className="field-container">
                <label className="email" htmlFor="fname">
                  First Name
                </label>
                <input
                  className="email-margin"
                  type="text"
                  id="fname"
                  placeholder="Jhon"
                />
              </div>
              <div className="field-container">
                <label className="email" htmlFor="lname">
                  Last Name
                </label>
                <input
                  className="email-margin"
                  type="text"
                  id="lname"
                  placeholder="Doe"
                />
              </div>
            </div>

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
              <input type="text" id="pass" placeholder="6+ strong character" />
              <i className="fas fa-lock lock"></i>
            </div>
          </div>
          <div className="button">
            <button className="btn" type="submit">
              Create an account
            </button>
          </div>
          <div className="line">
            <span> Or sign up with</span>
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
            <span> Have an account? </span>
            <Link to="/login"> Sign in </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
