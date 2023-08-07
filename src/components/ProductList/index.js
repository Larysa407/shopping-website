import React from "react";
import ProductCard from "../ProductCard/index";
import PropTypes from "prop-types";

export default function ProductList({
  products,
  addToFav,
  addToCart,
  removeFromFav,
}) {
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
          addToFav={addToFav}
          addToCart={addToCart}
          removeFromFav={removeFromFav}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToFav: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromFav: PropTypes.func,
};
