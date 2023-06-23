import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../context/productsContext";
import { Favorite } from "../pages/favorite/Favorite";

export default function ProductList({isFavorite}) {
  const { products } = useContext(ProductsContext);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favItems")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );


  const setFav = (e) => {
    e.preventDefault();
    if(!isFavorite){
      const data = products.find((element) => element.id == e.currentTarget.id);
      setFavorite([...favorite, data, data.isFavorite ="true"])
      console.log(data.isFavorite)
      localStorage.setItem(
        "favItems",
        JSON.stringify([...favorite, data])
      );
    }
  };

  const addToCart = (e) => {
    const data = products.find((element) => element.id == e.currentTarget.id);
    setCart([...cart, data]);
    localStorage.setItem("cartItems", JSON.stringify([...cart, data]));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          setFav={setFav}
          addToCart={addToCart}
          isFavorite={product.isFavorite}
        />
      ))}
    </div>
  );
}
