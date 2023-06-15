import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ( props ) => {
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
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
