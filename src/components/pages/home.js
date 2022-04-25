import SubHeader from "../subheader";
import Contents from "../content";
import React from "react";

function Home(props) {
  console.log("home render");
  return (
    <>
      <SubHeader />
      <Contents
        productList={props.productList}
        clickedItem={props.clickedItem}
      />
      {/* <SubFooter data={props.data} /> */}
    </>
  );
}

export default Home;
