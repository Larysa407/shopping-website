import React, { useState } from "react";
import Modal from "../../components/Modal";
import "./Cart.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  removeFromCart,
} from "../../redux/actions/index";

export const CartShow = ({ title, color, image, price, id }) => {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);

  const cart = useSelector((state) => state.cart);
  // const isCart = cart.some(
  //   (item) => item.title === title && item.price === price
  // );
 
  const handleClickDelete = (id) => {
    // if (isCart) {
      const itemToRemove = cart.findIndex(
        (item) => item.title === title && item.price === price
      );

      // console.log(itemToRemove);
      dispatch(removeFromCart(itemToRemove));
    // }
  };

  const handleClick = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClickOutside = () => {
    dispatch(closeModal());
  };

  return (
    <div className="card">
      <div className="cart-header">
        <span className="cart-close-btn" onClick={handleClick}></span>
        <img className="cart-img" src={image} alt="image of product" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{color}</p>
        <div className="card-footer">
          <h4 className="card-text">{price} uah</h4>
        </div>
      </div>
      {modal && (
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
              <button href="/" className="cancelBtn" onClick={handleCloseModal}>
                Cancel
              </button>
            </>
          }
          clickOutside={handleClickOutside}
        />
      )}
    </div>
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
