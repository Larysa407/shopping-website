import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <>
    <div className="product-list">
      {products.map((product) => {
        return(
            <div className="card" id={product.id} key={product.id} >
            <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                color={product.color}
            />
          </div>
        )
      })}
    </div>
    </>
  );
}
