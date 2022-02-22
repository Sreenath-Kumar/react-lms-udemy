import Header from "./header";
import Footer from "./footer";
import courseData from "./course_data.json";
import { useState } from "react";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./cart";
import database from "../firebase";
import { setDoc, doc } from "firebase/firestore";

function App() {
  console.log(database);
  const [cartItems, setCartItems] = useState([]);
  const [isactive, setisactive] = useState(false);

  const toggleFn = () => {
    isactive ? setisactive(false) : setisactive(true);
  };

  const closeCart = () => {
    setisactive(false);
  };

  let data = courseData.courses;
  async function addItems(item) {
    var ref = doc(database, "course-data", item.id);
    const docRef = await setDoc(ref, {
      title: item.name,
      img: item.img,
      author: item.author,
      des: item.des,
      lectures: item.lectures,
      duration: item.duration,
      level: item.level,
      ratings: item.ratings,
      regularPrice: item.regularPrice,
      sellingPrice: item.sellingPrice,
    })
      .then(() => {
        console.log("added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  data.forEach((item) => {
    addItems(item);
  });

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
    <BrowserRouter>
      <>
        <Header cartItemNumber={cartItems.length} showcart={toggleFn} />
        <Routes>
          <Route path="/" index element={<Home data={data} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Cart
          data={data}
          clickedItem={clickedItem}
          isactive={isactive}
          closeCart={closeCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
