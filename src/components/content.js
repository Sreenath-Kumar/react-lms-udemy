import Featured from "./featured-item";
import Course from "./single-course";
import Instructor from "./instructor";
import SubFooter from "./subfooter";

function Contents(props) {
  return (
    <div className="middle-content">
      <div id="section">
        <div className="first-col">
          {props.data.map((item, index) => {
            return (
              <Course
                key={index}
                id={item.id}
                title={item.title}
                img={item.img}
                author={item.author}
                des={item.des}
                lectures={item.lectures}
                duration={item.duration}
                level={item.level}
                ratings={item.ratings}
                regularPrice={item.regularPrice}
                sellingPrice={item.sellingPrice}
                clicked={props.clickedItem}
              />
            );
          })}
          <SubFooter
            pageNo={props.pageNo}
            inc={props.inc}
            dec={props.dec}
            prev={props.prev}
            next={props.next}
          />
          <div className="btm-content">
            <h2 className="box-title">
              Most Popular Instructors in "JavaScript"
            </h2>

            <div className="boxcarts-div">
              <div className="container-cart">
                <Instructor />
              </div>
            </div>
          </div>
        </div>
        <div className="sec-col">
          <div className="para-div">
            <i style={{ color: "blue" }} className="fas fa-bullhorn"></i>
            &nbsp;&nbsp;&nbsp;
            <p className="right-p">
              Can't decide? Try out any course with our
              <strong> 30-day money-back guarantee</strong>
            </p>
          </div>
          <hr
            style={{
              display: "inline-block",
              width: "250px",
              marginLeft: "15px",
            }}
          />
          <p
            className="p-head"
            style={{ color: "#853c6c", fontWeight: "bold" }}
          >
            <i className="fas fa-heart" style={{ color: "#cc87b4" }}></i>
            &nbsp;Beginners rated these highest
          </p>
          <Featured />
          <hr
            style={{
              display: "inline-block",
              width: "260px",
              marginLeft: "10px",
            }}
          />
        </div>
      </div>
      <div className="bottom-divv"></div>
    </div>
  );
}
export default Contents;
