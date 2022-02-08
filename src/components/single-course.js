function course(props) {
  return (
    <div className="cart">
      <div className="cart-img">
        <img src={props.img} alt="cart" width="210px" height="100%" />
      </div>
      <div className="cart-content">
        <div className="left-div">
          <a href="#t">
            <p style={{ margin: "0px", marginBottom: "5px", fontSize: "15px" }}>
              <b>{props.title}</b>
            </p>
            <i
              style={{ color: "#f4c150", display: "block" }}
              className="fas fa-arrow-alt-circle-right"
            ></i>
          </a>
          <a href="#t">
            <small>{props.author}</small>
          </a>

          {/* <div className="align-div">
            <p className="align-p">{props.des}</p>
            <span className="align-span">
              <p className="price">
                <b>{props.sellingPrice}</b>
                <del>{props.regularPrice}</del>
              </p>
              <ul id="ul-list">
                <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
                <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
                <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
                <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
                <i
                  className="fas fa-star-half-alt"
                  style={{ color: "#f4c150" }}
                ></i>
                <i>{props.ratings}</i>
              </ul>
            </span>
          </div> */}

          <ul id="ul-list">
            <i className="fas fa-play-circle"></i>
            <li className="li-item">{props.lectures}</li>
            <i className="far fa-clock"></i>
            <li className="li-item">{props.duration}</li>
            <img src="./images/sliders.png" alt="slider-png" />
            <li className="li-item">{props.level}</li>
            <i className="fas fa-closed-captioning"></i>
          </ul>
        </div>
        <div className="add-cart">
          <span className="align-span">
            <p className="price">
              <b id="price">{props.sellingPrice}</b>
              <del>{props.regularPrice}</del>
            </p>
            <ul id="ul-list">
              <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
              <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
              <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
              <i className="fas fa-star" style={{ color: "#f4c150" }}></i>
              <i
                className="fas fa-star-half-alt"
                style={{ color: "#f4c150" }}
              ></i>
              <i>{props.ratings}</i>
            </ul>
          </span>
          <div className="cart-btn">
            <button
              id={props.id}
              onClick={props.clicked}
              className="add-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default course;
