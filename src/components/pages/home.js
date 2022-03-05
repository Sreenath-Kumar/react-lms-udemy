import SubHeader from "../subheader";
import Contents from "../content";

function Home(props) {
  return (
    <>
      <SubHeader />
      <Contents
        data={props.data}
        clickedItem={props.clickedItem}
        pageNo={props.pageNo}
        inc={props.inc}
        dec={props.dec}
        prev={props.prev}
        next={props.next}
      />
      {/* <SubFooter data={props.data} /> */}
    </>
  );
}

export default Home;
