import React from "react";
import "./style.scss";
import Button from "../Button/index";
import Modal from "../Modal/index";
import { Star } from "phosphor-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  addToCart,
  openModal,
  closeModal,
} from "../../redux/actions/index";

export default function ProductCard({ title, price, color, image, id, index}) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const modal = useSelector((state) => state.modal);

  const favorite = useSelector((state) => state.favorite);
  const isFavorite = favorite.some(
    (item) => item.title === title && item.price === price
  );

  const cart = useSelector((state) => state.cart);
  const isCart = cart.some(
    (item) => item.title === title && item.price === price
  );

  const handleFav = () => {
    if (isFavorite) {
      const itemToRemove = favorite.findIndex(
        (item) => item.title === title && item.price === price
      );
      dispatch(removeFromFavorites(itemToRemove));
    } else {
      dispatch(addToFavorites(id, title, price, image, color));
    }
  };

  const handleAddToCart = () => {
    dispatch(closeModal());
};

  const handleClick = () => {
    if(!isCart){
      const itemToCart = products.find(
        (item) => item.title === title && item.price === price
      );
      dispatch(addToCart(itemToCart));
      dispatch(openModal());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClickOutside = () => {
    dispatch(closeModal());
  };

  return (
    <div className="card">
      <div className="card-header">
        <img className="card-img" src={image} alt="image of product" />
        <Star
          className="card-fav_item"
          size={20}
          onClick={handleFav}
          weight={isFavorite ? "fill" : "light"}
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{color}</p>
        <div className="card-footer">
          <h4 className="card-text"> {price} uah</h4>
          <div className="card-footer-icons">
            <Button text="To cart" onClick={handleClick} />
            {modal && (
              <Modal
                text="Add this product to the cart?"
                closeButton={true}
                closeModal={handleCloseModal}
                actions={
                  <>
                    <button
                      href="/"
                      className="confirmBtn"
                      id={id}
                      onClick={handleAddToCart}
                    >
                      Add
                    </button>
                    <button
                      href="/"
                      className="cancelBtn"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                  </>
                }
                clickOutside={handleClickOutside}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  title: "Product",
  color: "None",
  price: 0,
};
