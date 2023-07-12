import React, { useState } from "react";
import "./ProductCard.scss";
import Button from "./Button";
import Modal from "./Modal";
import { Star } from "phosphor-react";
import PropTypes from "prop-types";

export default function ProductCard({
  product,
  addToFav,
  addToCart,
  removeFromFav,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem(`isFavorite_${product.title}`)) || false
  );

  const [disabled, setDisabled] = useState(false);

  const handleFav = () => {
    const newFav = !isFavorite;
    if (newFav) {
      setIsFavorite(true);
      addToFav(product.id);
    } else {
      setIsFavorite(!isFavorite);
      removeFromFav(product.id);
    }
    localStorage.setItem(`isFavorite_${product.title}`, JSON.stringify(newFav));
  };

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  const handleClick = () => {
    setModalOpen(true);
    setDisabled(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClickOutside = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img className="card-img" src={product.image} alt="image of product" />
        <Star
          className="card-fav_item"
          size={20}
          onClick={handleFav}
          weight={isFavorite ? "fill" : "light"}
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.color}</p>
        <div className="card-footer">
          <h4 className="card-text">{product.price} uah</h4>
          <div className="card-footer-icons">
            <Button text="To cart" disabled={disabled} onClick={handleClick} />
            {modalOpen && (
              <Modal
                text="Add this product to the cart?"
                closeButton={true}
                closeModal={handleCloseModal}
                actions={
                  <>
                    <button
                      href="/"
                      className="confirmBtn"
                      id={product.id}
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
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
};
