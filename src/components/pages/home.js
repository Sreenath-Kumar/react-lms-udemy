import SubHeader from "../subheader";
import Contents from "../content";
import SubFooter from "../subfooter";

function Home(props) {
  return (
    <>
      <SubHeader />
      <Contents data={props.data} clickedItem={props.clickedItem} />
      <SubFooter />
    </>
  );
}

export default Home;
