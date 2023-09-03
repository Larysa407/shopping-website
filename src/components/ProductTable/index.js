import React from "react";
import Button from "../Button/index";
import Modal from "../Modal/index";
import "./style.scss";
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

export default function ProductCard({ title, price, color, image, id, qty }) {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal === id);

  const favorite = useSelector((state) => state.favorite);
  const isFavorite = favorite.some(
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

  const handleClick = () => {
    dispatch(openModal(id));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClickOutside = () => {
    dispatch(closeModal());
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image, color, qty }));
    dispatch(closeModal());
  };

  return (
    <tr>
      <td>
        <img className="table-image" src={image} alt="product"></img>
      </td>
      <td>{title}</td>
      <td>{color}</td>
      <td>{price} uah</td>
      <td>
        <Star
          size={20}
          onClick={handleFav}
          weight={isFavorite ? "fill" : "light"}
        />
      </td>
      <td>
        <Button text="To cart" onClick={handleClick} />
        {modal && (
          <Modal
            text="Add this product to the cart?"
            closeButton={true}
            closeModal={handleCloseModal}
            actionBtn="Add"
            cancelBtn="Cancel"
            addToCart={handleAddToCart}
            clickOutside={handleClickOutside}
          />
        )}
      </td>
    </tr>
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
