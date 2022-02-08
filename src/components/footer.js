function footer() {
  return (
    <footer>
      <div className="footer-innerdiv1">
        <div className="col1">
          <ul className="footer-ul">
            <li className="footer-li" style={{ fontWeight: "700" }}>
              Udemy for Business
            </li>
            <li className="footer-li" style={{ fontWeight: "700" }}>
              Become an Instructor
            </li>
            <li className="footer-li">Mobile Apps</li>
          </ul>
        </div>
        <div className="col2">
          <ul className="footer-ul">
            <li className="footer-li">About Us</li>
            <li className="footer-li">Careers</li>
            <li className="footer-li">Blog</li>
          </ul>
        </div>
        <div className="col3">
          <ul className="footer-ul">
            <li className="footer-li">Topics</li>
            <li className="footer-li">Support</li>
            <li className="footer-li">Affiliate</li>
          </ul>
        </div>
        <div className="col4">
          <ul className="footer-ul" style={{ margin: "0px" }}>
            <li className="footer-li">
              <button className="English-btn">
                <span
                  style={{
                    marginLeft: "10px",
                    marginRight: "15px",
                    padding: "5px",
                  }}
                >
                  <i
                    className="fas fa-globe-asia"
                    style={{ marginRight: "10px" }}
                  ></i>
                  English
                </span>
                <i className="fas fa-angle-up"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-innerdiv2">
        <div className="left-contlist">
          <a href="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
              alt="udemy-logo"
              width="110px"
            />
          </a>
          <span
            className="copyright-span"
            style={{ marginLeft: "20px", color: "#686f7a" }}
          >
            Copyright © 2018 Udemy, Inc.
          </span>
        </div>

        <div className="right-contlist">
          <ul className="ullist-right">
            <li className="r-li-itm">Terms</li>
            <li className="r-li-itm">Privacy Policy and Cookie Policy</li>
            <li className="r-li-itm">Intellectual Property</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default footer;
