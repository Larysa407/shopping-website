import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header/index";
import { Cart } from "./pages/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import ProductList from "./components/ProductList/index";
import { useDispatch } from "react-redux";
import { setData } from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData(data));
      });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
