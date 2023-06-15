import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./ProductCard.scss";
import Button from "./Button";
import Modal from "./Modal";
import { Star } from "phosphor-react";

export default function ProductCard({
  image,
  title,
  color,
  price
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);
  

  const toggleFavorite = (e) => {
    e.preventDefault();
    if(!isFavorite){
      setIsFavorite(true)
      localStorage.setItem("favoriteItems", JSON.stringify([], isFavorite));
    } else {
      setIsFavorite(false)
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
      <div className="card-header"></div>
      <img className="card-img" src={image} alt="image of product" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{color}</p>
        <div className="card-footer">
          <h4 className="card-text">{price}</h4>
          <div className="card-footer-icons">
            <Star
              size={20}
              onClick={toggleFavorite}
              weight={isFavorite ? "light" :  "fill"}
            />
            {/* weight="fill" для зафарбування зірочки обраного товару*/}
            <Button text="Add to cart" onClick={handleClick} />
            {modalOpen && (
              <Modal
                text="Add this product to cart?"
                closeButton={true}
                closeModal={handleCloseModal}
                actions={
                  <>
                    <button
                      href="/"
                      className="confirmBtn"
                      // onClick={handleAddToCart}
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
    </>
  );
}
