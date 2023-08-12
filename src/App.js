import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/index";
import { Cart } from "./pages/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import ProductList from "./components/ProductList/index";
import { useSelector, useDispatch } from "react-redux";
import { setData, addToFavorites, removeFromFavorites, addToCart, removeFromCart } from "./redux/actions/index"

function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  const favorite = useSelector(state => state.favorite)
  // const [favorite, setFavorite] = useState(
  //   JSON.parse(localStorage.getItem("favItems")) || []
  // );

  const cart = useSelector(state => state.cart)
  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("cartItems")) || []
  // );

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData(data));
      });
  }, []);

  const addToFav = (id) => {
    const data = products.find((element) => element.id === id);
    const updatedData = [data, ...favorite];
    dispatch(addToFavorites(updatedData));
    localStorage.setItem("favItems", JSON.stringify(updatedData));
  };

  const removeFromFav = (id) => {
    const deleteData = favorite.filter((item) => {
      return item.id !== id;
    });
    dispatch(removeFromFavorites(deleteData));
    localStorage.setItem("favItems", JSON.stringify(deleteData));
  };

  const addToCart = (id) => {
    const data = products.find((element) => element.id === id);
    const updatedData = [data, ...cart];
    dispatch(addToCart(updatedData))
    localStorage.setItem("cartItems", JSON.stringify([data, ...cart]));
  };

  const deleteFromCart = (id) => {
    const updatedData = cart.filter((item) => {
      return item.id !== id;
    });
    dispatch(removeFromCart(updatedData))
    localStorage.setItem("cartItems", JSON.stringify(updatedData));
  };

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              addToFav={addToFav}
              addToCart={addToCart}
              removeFromFav={removeFromFav}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} products={products} onDelete={deleteFromCart} />
          }
        />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
