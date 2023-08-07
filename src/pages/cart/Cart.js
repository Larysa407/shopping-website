import React from "react";
import "./Cart.scss";
import { CartShow } from "./CartShow";

export const Cart = ({ cart, onDelete }) => {
  return (
    <>
      <div className="cart-list">
        {cart.length !== 0 ? (
          cart.map((cartItem) => (
            <CartShow
              title={cartItem.title}
              price={cartItem.price}
              image={cartItem.image}
              color={cartItem.color}
              id={cartItem.id}
              key={cartItem.id}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p className="empty-cart">The cart is empty</p>
        )}
      </div>
    </>
  );
};
