import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./cart";
import MyCart from "./pages/my-cart";
import WishList from "./pages/wishlist";
import MyAccount from "./pages/my-account";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import database from "../firebase";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, getDocs, collection, doc, setDoc } from "firebase/firestore";
import Checkout from "./pages/checkout";

function App() {
  console.log("app rendered");
  const [userID, setUserID] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isactive, setisactive] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // ============================================== //
  // Behaviour of Cart Layout
  // ============================================== //
  const toggleFn = () => {
    // isactive ? setisactive(false) : setisactive(true);
    setisactive(true);
    console.log("is active updated");
  };

  const closeCart = () => {
    setisactive(false);
    console.log("is active updated");
  };

  // ============================================== //
  // Checking User logged in or not
  // ============================================== //

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  });

  useEffect(() => {
    // const checkUser = async () => {};
    // checkUser();
    if (!userID && userLoggedIn) {
      setUserID(auth.currentUser.uid);
    }
    return userID;
  }, [userLoggedIn, userID]);

  function compareArray(arr1, arr2) {
    const matchedData = [];
    const unMatchedData = [];

    for (let i = 0; i < arr1.length; i++) {
      const ae1 = arr1[i];
      let notmatch = 0;
      for (let j = 0; j < arr2.length; j++) {
        const ae2 = arr2[j];
        console.log(ae1, ae2);
        if (ae1.id === ae2.id) {
          console.log(ae1, "found");
          matchedData.push(ae1);
          break;
        } else {
          notmatch++;
          console.log("not found", notmatch);
          if (notmatch === arr2.length) {
            unMatchedData.push(ae1);
          }
        }
      }
    }
    return unMatchedData.length;
  }

  // ============================================== //
  // Getting product data from database
  // ============================================== //
  useEffect(() => {
    console.log("getting product data called");
    async function getItems() {
      const productCol = collection(database, "courses");
      const productSnapshot = await getDocs(productCol);
      const productList = productSnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return setProductList(productList);
    }
    getItems();
  }, []);

  // ============================================== //
  // Getting cart data from database
  // ============================================== //

  useEffect(() => {
    if (userID) {
      console.log("getting cart data called");

      async function getCartData() {
        const docSnap = await getDoc(doc(database, "user-cart", userID));
        let snapData = docSnap.data();

        if (snapData) {
          const receivedData = snapData; // received data from the database
          if (cartItems.length === 0) {
            setCartItems(() => {
              var result = Object.keys(receivedData).map(function (key) {
                return receivedData[key];
              });
              return result;
            });
          }
        }

        // checking if there is any changes in cartdata or not
        // if (cartItems.length !== 0) {
        //   let x = compareArray(receivedData, cartItems);
        //   if (x !== 0) {
        //     setCartItems(receivedData);
        //   }
        // }
      }
      getCartData();
    }
    // return getCart();
  }, [userID]);

  // ============================================== //
  // Adding New data to database
  // ============================================== //
  const addData = async (db, id, item) => {
    console.log("adding data to user-cart");

    await setDoc(doc(db, "user-cart", id), {
      ...item,
    });
  };

  // ============================================== //
  //Detecting the purchased items
  // ============================================== //
  const clickedItem = (e) => {
    // const userID = auth.currentUser.uid;
    let choosedItem = e.target.id;
    let y = productList.findIndex((item) => {
      return item.id === choosedItem;
    });
    let itExist = false; //set item not exists by default

    cartItems.forEach((item) => {
      if (item.id === productList[y].id) {
        itExist = true;
      }
    });
    //add item to Cart based on existence condition
    if (itExist) {
      alert("Aready in Cart");
      // addData(database, userID, [...oldItem]);
    } else {
      if (userLoggedIn) {
        addData(database, userID, [...cartItems, productList[y]]);
      }
      setCartItems([...cartItems, productList[y]]);
    }
  };

  // ============================================== //
  // Remove item from cart
  // ============================================== //
  const removeFromCart = (id) => {
    // let clickedCartItem = e.target.id;
    console.log(id);
    let newarray = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(newarray);
    if (userLoggedIn) {
      addData(database, userID, newarray);
    }
  };

  return (
    <BrowserRouter>
      <>
        <Header
          cartItemNumber={cartItems.length}
          showcart={toggleFn}
          closecart={closeCart}
          userExists={userLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home productList={productList} clickedItem={clickedItem} />
            }
          />
          <Route path="/login" element={<Login cartItems={cartItems} />} />
          <Route path="/signup" element={<SignUp cartItems={cartItems} />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/account" element={<MyAccount />} />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          />
          <Route
            path="/cart"
            element={
              <MyCart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
        <Cart
          data={productList}
          clickedItem={clickedItem}
          isactive={isactive}
          showcart={toggleFn}
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
