import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../context/productsContext";
import { Favorite } from "../pages/favorite/Favorite";

export default function ProductList() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                color={product.color}

              />
            </div>
          );
        })}
      </div>
    </>
  );
}
