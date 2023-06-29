import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favItems")) || []
  );

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addToFav = (id) => {
    const data = products.find((element) => element.id === id);
    console.log(data)
    const updatedData = [data, ...favorite];
    setFavorite(updatedData);
    localStorage.setItem("favItems", JSON.stringify([data, ...favorite]));

    const deleteData = favorite.filter((item) => {
      return item.id !== id;
    });
    setCart(deleteData);
    localStorage.setItem("cartItems", JSON.stringify(deleteData));

  }

  const addToCart = (e) => {
    const data = products.find((element) => element.id == e.currentTarget.id);
    const updatedData = [data, ...cart];
    setCart(updatedData);
    localStorage.setItem("cartItems", JSON.stringify([data, ...cart]));
  };

  const deleteFromCart = (id) => {
    const updatedData = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(updatedData);
    localStorage.setItem("cartItems", JSON.stringify(updatedData));
  };

  console.log(cart);
  return (
    <Router>
      <Navbar cart={cart} favorite={favorite} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              addToFav={addToFav}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              products={products}
              onDelete={deleteFromCart}
            />
          }
        />
        <Route path="/favorite" element={<Favorite favorite={favorite} />} />
      </Routes>
    </Router>
  );
}

export default App;
