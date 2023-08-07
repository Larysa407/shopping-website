import React, { useState } from "react";
import Modal from "../../components/Modal";
import "./Cart.scss";
import PropTypes from "prop-types";

export const CartShow = ({ title, color, image, price, id, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [isCart, setIsCart] = useState(
    JSON.parse(localStorage.getItem(`isCartItem_${title}`)) || false
  );

  const handleClickDelete = () => {
    const newCart = !isCart;
    if (!newCart) {
      onDelete(id);
      setIsCart(false);
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
    <>
      <div className="cart">
        <div className="cart-header">
          <span className="cart-close-btn" onClick={handleClick}></span>
          <img className="cart-img" src={image} alt="image of product" />
        </div>
        <div className="cart-body">
          <h3 className="cart-title">{title}</h3>
          <p className="cart-text">{color}</p>
          <div className="cart-footer">
            <h4 className="cart-text">{price} uah</h4>
          </div>
        </div>
        {modalOpen && (
          <Modal
            text="Do you want to remove this item from cart?"
            closeButton={true}
            closeModal={handleCloseModal}
            actions={
              <>
                <button
                  href="/"
                  className="confirmBtn"
                  onClick={handleClickDelete}
                >
                  Remove
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
    </>
  );
};

CartShow.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  onDelete: PropTypes.func,
};

CartShow.defaultProps = {
  title: "Product",
  color: "None",
  price: 0,
};
