function featured() {
  return (
    <div className="para-div2">
      <p className="p-title" style={{ marginBottom: "7px" }}>
        Modern Javascript From The Beginning
      </p>

      <div className="right-paradiv">
        <div className="div-img">
          <img
            src="images/cover-img.jpg"
            alt="cover"
            width="70px"
            height="70px"
          />
        </div>
        <div className="div-contnt">
          <div>
            <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
            &nbsp;
            <span
              style={{ color: "#505763", fontSize: "13px", fontWeight: "400" }}
            >
              4.7
            </span>
            <span style={{ color: "#a1a7b3", fontSize: "13px" }}>(4,189)</span>
            <p
              className="price"
              style={{
                margin: "0px",
                lineHeight: "1.8",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              <b>$10.99</b>
              <del
                style={{
                  color: "#505763",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                $199.99
              </del>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default featured;
