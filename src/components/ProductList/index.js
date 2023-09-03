import React from "react";
import ProductCard from "../ProductCard/index";
import "./style.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Switcher from "../Switch/index";
import { useContext } from "react";
import { SwitchContext } from "../Context/index";
import ProductTable from "../ProductTable/index";

export default function ProductList() {
  const products = useSelector((state) => state.products);

  const { isSelected } = useContext(SwitchContext);

  return (
    <>
      <Switcher />
      {isSelected ? (
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
          {products.map((product, index) => (
            <ProductTable
              title={product.title}
              color={product.color}
              price={product.price}
              image={product.image}
              id={product.id}
              key={index}
            />
          ))}
        </table>
      ) : (
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard
              title={product.title}
              color={product.color}
              price={product.price}
              image={product.image}
              id={product.id}
              key={index}
            />
          ))}
        </div>
      )}
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  addToFav: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromFav: PropTypes.func,
};
