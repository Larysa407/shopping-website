import React from "react";
import { CartShow } from "./CartShow";
import { useSelector } from "react-redux";
import Forms from "../../components/Form";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="wrapper">
      {cart.length !== 0 ? (
        <>
          <div className="form-container">
            <Forms />
          </div>
          <div className="cart-product-list">
            {cart.map((cartItem) => (
              <CartShow
                title={cartItem.title}
                price={cartItem.price}
                image={cartItem.image}
                color={cartItem.color}
                id={cartItem.id}
                key={cartItem.id}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="empty-cart">The cart is empty</p>
      )}
    </div>
  );
};
