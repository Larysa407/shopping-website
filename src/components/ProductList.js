import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Favorite } from "../pages/favorite/Favorite";

export default function ProductList({products, isFavorite, setFav, addToCart, onDelete}) {

 
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          setFav={setFav}
          addToCart={addToCart}
          onDelete={onDelete}
          isFavorite={product.isFavorite}
        />
      ))}
    </div>
  );
}
