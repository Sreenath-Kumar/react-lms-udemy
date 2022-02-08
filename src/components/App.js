import SubHeader from "./subheader";
import Header from "./header";
import Contents from "./content";
import Cart from "./cart";
import SubFooter from "./subfooter";
import Footer from "./footer";
import courseData from "./course_data.json";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isactive, setisactive] = useState(false);

  const toggleFn = () => {
    isactive ? setisactive(false) : setisactive(true);
  };

  const closeCart = () => {
    setisactive(false);
  };

  let data = courseData.courses;

  const clickedItem = (e) => {
    let x = e.target.id;
    let y = data.findIndex((item) => item.id === x);

    setCartItems((oldItem) => {
      let itExist = false;

      oldItem.forEach((item) => {
        if (item.id === data[y].id) {
          itExist = true;
        }
      });

      console.log(itExist);
      if (itExist) {
        alert("Aready in Cart");
        return [...oldItem];
      } else {
        return [...oldItem, data[y]];
      }
    });
  };
  const removeFromCart = (e) => {
    let clickedCartItem = e.target.id;
    let newarray = cartItems.filter((item) => {
      return item.id !== clickedCartItem;
    });
    setCartItems(newarray);
  };

  return (
    <>
      <Header cartItemNumber={cartItems.length} showcart={toggleFn} />
      <SubHeader />
      <Contents data={data} clickedItem={clickedItem} />
      <Cart
        isactive={isactive}
        closeCart={closeCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <SubFooter />
      <Footer />
    </>
  );
}

export default App;
