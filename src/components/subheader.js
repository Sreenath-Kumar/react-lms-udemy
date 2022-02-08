import React from "react";

function SubHeader() {
  return (
    <div id="content">
      <div className="content-innerdiv wrapper">
        <div className="p-div">
          <p>
            1094 results for
            <strong> javascript</strong>
          </p>
        </div>
        <div className="btn-div">
          <div className="col1">
            <button className="btn-list btn-row">Web development</button>
            <button className="btn-list btn-row">HTML</button>
            <button className="btn-list btn-row">CSS</button>
            <button className="btn-list btn-row">Ratings</button>
            <button className="btn-list btn-row">Duration</button>
          </div>
          <div className="col2">
            <button className="btn-list btn-row">ALL Filters</button>
            <button className="btn-list btn-row">Sort</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
