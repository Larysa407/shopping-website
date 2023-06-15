import React from "react";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../context/productsContext";

export default function ProductList() {

  const { products } = useContext(ProductsContext)

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
