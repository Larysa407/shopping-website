import React from "react";
import ProductCard from "../ProductCard/index";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.products);
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          title={product.title}
          color={product.color}
          price={product.price}
          image={product.image}
          id={product.id}
          key={product.id}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  addToFav: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromFav: PropTypes.func,
};
