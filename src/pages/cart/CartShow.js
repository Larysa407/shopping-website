import React from "react";
import Modal from "../../components/Modal";
import "./Cart.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  removeFromCart,
} from "../../redux/actions/index";

export const CartShow = ({ title, color, image, price, id, qty }) => {

  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal === id);

  const cart = useSelector((state) => state.cart);

  const handleClickDelete = () => {
    const itemToRemove = cart.findIndex(
      (item) => item.title === title && item.price === price
    );
    dispatch(removeFromCart(itemToRemove));
  };

  const handleClick = () => {
    dispatch(openModal(id));
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
        <img className="cart-img" src={image} alt="product" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{color}</p>
        <div className="card-footer">
          <h4 className="card-text">{price} uah</h4>
          <div className="card-qty">
            <h3 className="card-qty-number">{qty} pcs</h3>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          text="Do you want to remove this item from cart?"
          closeButton={true}
          closeModal={handleCloseModal}
          actionBtn="Delete"
          cancelBtn="Cancel"
          removeFromCart={handleClickDelete}
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
