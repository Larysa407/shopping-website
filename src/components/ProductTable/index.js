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
    <td>{title}</td>
    <td>{image}</td>
    <td>{color}</td>
    <td>{price}</td>
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
