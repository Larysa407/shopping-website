import React, { useState } from "react";
import Modal from "../../components/Modal";
import "./Cart.scss";

export const CartShow = ({ cartItem, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [isCart, setIsCart] = useState(
    JSON.parse(localStorage.getItem(`isCartItem_${cartItem.title}`)) || false
  );

  const handleClickDelete = () => {
    const newCart = !isCart
    if(!newCart){
      onDelete(cartItem.id);
      setIsCart(false);
      localStorage.setItem(`isCartItem_${cartItem.title}`, JSON.stringify(newCart));
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
          <img
            className="cart-img"
            src={cartItem.image}
            alt="image of product"
          />
        </div>
        <div className="cart-body">
          <h3 className="cart-title">{cartItem.title}</h3>
          <p className="cart-text">{cartItem.color}</p>
          <div className="cart-footer">
            <h4 className="cart-text">{cartItem.price} uah</h4>
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
