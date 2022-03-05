import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./cart";
import WishList from "./pages/wishlist";
import MyAccount from "./pages/my-account";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import database from "../firebase";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

import { getDoc, getDocs, collection, doc, setDoc } from "firebase/firestore";

function App() {
  const [userExists, setUserExists] = useState("");
  const [userID, setUserID] = useState("");
  const [isactive, setisactive] = useState(false);
  const [productList, setProductList] = useState([]);
  const [getcart, setGetCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //Checking User logged in or not
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUserExists(true);
        setUserID(u.uid);
      } else {
        setUserExists(false);
      }
    });
    return userExists;
  }, [userExists]);

  // Getting cart data from database
  useEffect(() => {
    const getCart = async () => {
      const docRef = doc(database, "user-cart", userID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setGetCart(docSnap.data().item);
        setCartItems(getcart);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    return getCart();
  }, [userID, getcart]);

  // Getting product data from database
  useEffect(() => {
    async function getItems() {
      const productCol = collection(database, "course-data");
      const productSnapshot = await getDocs(productCol);
      const productList = productSnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return setProductList(productList);
    }
    getItems();
  }, []);

  //Adding New data to database
  const addData = async (id, item) => {
    await setDoc(doc(database, "user-cart", id), {
      item,
    });
  };

  // Behaviour of Cart Layout
  const toggleFn = () => {
    isactive ? setisactive(false) : setisactive(true);
  };

  const closeCart = () => {
    setisactive(false);
  };
  //Detecting the purchased items
  const clickedItem = (e) => {
    // const userID = auth.currentUser.uid;
    let choosedItem = e.target.id;
    let y = productList.findIndex((item) => {
      return item.id === choosedItem;
    });

    let itExist = false;

    setCartItems((oldItem) => {
      oldItem.forEach((item) => {
        if (item.id === productList[y].id) {
          itExist = true;
        }
      });

      if (itExist) {
        alert("Aready in Cart");
        addData(userID, [...oldItem]);
        return [...oldItem];
      } else {
        addData(userID, [...oldItem, productList[y]]);
        return [...oldItem, productList[y]];
      }
    });
    addData(userID, cartItems);
  };

  //Remove item from cart
  const removeFromCart = (e) => {
    let clickedCartItem = e.target.id;
    let newarray = cartItems.filter((item) => {
      return item.id !== clickedCartItem;
    });
    setCartItems(newarray);
    addData(userID, newarray);
  };

  //Pagination section
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

    console.log("Next triggered");
    if (currentPage + 1 > maxPage) {
      setMaxPage(maxPage + pageNumberLimit);
      setMinPage(minPage + pageNumberLimit);
    }
    if (maxPage === pages.length && currentPage === pages.length) {
      setMaxPage(2);
      setMinPage(0);
      setCurrentPage(1);
    }
    console.log(currentPage);
    console.log(maxPage);
  };

  const handlePrevbtn = () => {
    console.log(currentPage);
    console.log(maxPage);
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
    console.log(currentPage);
    console.log(maxPage);

    // if (currentPage === 0) {
    //   setMaxPage(pages.length);
    //   setMinPage(pages.length - pageNumberLimit);
    //   setCurrentPage(pages.length);
    // }
    // console.log(currentPage);
    // console.log(maxPage);
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
    <BrowserRouter>
      <>
        <Header
          cartItemNumber={getcart.length}
          showcart={toggleFn}
          userExists={userExists}
        />
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home
                data={currentItem}
                clickedItem={clickedItem}
                pageNo={renderPageNumbers}
                inc={pageIncrementBtn}
                dec={pageDecrementBtn}
                prev={handlePrevbtn}
                next={handleNextbtn}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
        <Cart
          data={productList}
          clickedItem={clickedItem}
          isactive={isactive}
          closeCart={closeCart}
          cartItems={getcart}
          removeFromCart={removeFromCart}
        />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
