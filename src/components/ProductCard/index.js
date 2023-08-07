import React, { useState } from "react";
import "./style.scss";
import Button from "../Button/index";
import Modal from "../Modal/index";
import { Star } from "phosphor-react";
import PropTypes from "prop-types";

export default function ProductCard({
  title,
  price,
  color,
  image,
  id,
  addToFav,
  addToCart,
  removeFromFav,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem(`isFavorite_${title}`)) || false
  );

  const [isCart, setIsCart] = useState(
    JSON.parse(localStorage.getItem(`isCartItem_${title}`)) || false
  );

  const handleFav = () => {
    const newFav = !isFavorite;
    if (newFav) {
      setIsFavorite(true);
      addToFav(id);
    } else {
      setIsFavorite(!isFavorite);
      removeFromFav(id);
    }
    localStorage.setItem(`isFavorite_${title}`, JSON.stringify(newFav));
  };

  const handleAddToCart = () => {
    const newCart = !isCart
    if(newCart){
      addToCart(id);
      setIsCart(true);
      localStorage.setItem(`isCartItem_${title}`, JSON.stringify(newCart));
    }
  };

  const handleClick = () => {
    setModalOpen(true);
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
          <h4 className="card-text"> uah</h4>
          <div className="card-footer-icons">
            <Button text="To cart" onClick={handleClick} />
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
  addToCart: PropTypes.func,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
};

ProductCard.defaultProps = {
  title: "Product",
  color: "None",
  price: 0
};

