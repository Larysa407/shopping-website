import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "phosphor-react";
import "./style.scss";
import { useSelector } from "react-redux";

export const Header = () => {
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="header">
      <div className="links">
        <Link to="/" className="header-brand">
          Brand's Outlet
        </Link>
        <div className="header-icons">
          <Link to="/favorite" className="favorite-link">
            <Star size={25} />
            <div className="favorite-length">{favorite.length}</div>
          </Link>
          <Link to="/cart" className="cart-link">
            <ShoppingCart size={25} />
            <div className="cart-length">{cart.length}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
