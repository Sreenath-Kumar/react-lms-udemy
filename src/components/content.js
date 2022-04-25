import Featured from "./featured-item";
import Course from "./single-course";
import Instructor from "./instructor";
import SubFooter from "./subfooter";
import { useState } from "react";

function Contents(props) {
  const productList = props.productList;

  // ============================================== //
  //Pagination section
  // ============================================== //
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [pageNumberLimit, setPageNumberLimit] = useState(2);
  const [maxPage, setMaxPage] = useState(2);
  const [minPage, setMinPage] = useState(0);

  let pages = [];

  for (let i = 1; i <= Math.ceil(productList.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPage + 1 && number > minPage) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`ab-li ${
            currentPage === number ? "paginition-active" : null
          }`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = productList.slice(firstItemIndex, lastItemIndex);

  const handleNextbtn = () => {
    if (currentPage <= pages.length) {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage + 1 > maxPage) {
      setMaxPage(maxPage + pageNumberLimit);
      setMinPage(minPage + pageNumberLimit);
    }
    if (maxPage === pages.length && currentPage === pages.length) {
      setMaxPage(2);
      setMinPage(0);
      setCurrentPage(1);
    }
  };

  const handlePrevbtn = () => {
    console.log(currentPage);
    console.log("from content page", maxPage);
    if (currentPage === 1 && maxPage === 2) {
      console.log("condition satisfied");
      setMaxPage(pages.length);
      setMinPage(pages.length - pageNumberLimit);
      setCurrentPage(pages.length);
    } else {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPage(maxPage - pageNumberLimit);
        setMinPage(minPage - pageNumberLimit);
      }
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPage) {
    pageIncrementBtn = (
      <li className="ab-li three-dot" onClick={handleNextbtn}>
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPage >= 1) {
    pageDecrementBtn = (
      <li className="ab-li three-dot" onClick={handlePrevbtn}>
        &hellip;
      </li>
    );
  }

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 5);
  };

  return (
    <div className="middle-content">
      <div id="section">
        <div className="first-col">
          {currentItem.map((item, index) => {
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
            productList={props.productList}
            pageNo={renderPageNumbers}
            inc={pageIncrementBtn}
            dec={pageDecrementBtn}
            prev={handlePrevbtn}
            next={handleNextbtn}
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
