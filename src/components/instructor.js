function intructor() {
  return (
    <div className="container-cart">
      <div className="cart-div" style={{ width: "216px", height: "290px" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="cart-div-content">
            <div
              className="cart-imag-div"
              style={{
                backgroundImage: `url(
                  "/"
                )`,
              }}
            ></div>
            <div className="cart-txt-div">
              <span className="text1">Stephen Grider</span>

              <div className="text-div">
                <div>
                  <span className="text1 text2">React,Redux,Framework</span>
                </div>
                <div
                  style={{
                    marginTop: "40px",
                    fontSize: "14px",
                    color: "#505763",
                    lineHeight: "1.3",
                  }}
                >
                  <span style={{ color: "#29303b" }}>241,449</span>
                  &nbsp;students
                  <span
                    className="text4"
                    style={{ color: "#505763", display: "block" }}
                  >
                    19courses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default intructor;
