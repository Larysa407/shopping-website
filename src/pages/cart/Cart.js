import React from "react";
import { CartShow } from "./CartShow";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
      <div className="product-list">
        {cart.length !== 0 ? (
          cart.map((cartItem) => (
            <CartShow
              title={cartItem.title}
              price={cartItem.price}
              image={cartItem.image}
              color={cartItem.color}
              id={cartItem.id}
              key={cartItem.id}
            />
          ))
        ) : (
          <p className="empty-cart">The cart is empty</p>
        )}
      </div>
  );
};
