import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({products, addToFav, addToCart}) {

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          addToFav={addToFav}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
