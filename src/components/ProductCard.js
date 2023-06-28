import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./ProductCard.scss";
import Button from "./Button";
import Modal from "./Modal";
import { Star } from "phosphor-react";


export default function ProductCard({product, setFav, isFavorite, addToCart}) {
  const [modalOpen, setModalOpen] = useState(false); 

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
      <div className="card-header"></div>
      <img className="card-img" src={product.image} alt="image of product" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.color}</p>
        <div className="card-footer">
          <h4 className="card-text">{product.price}</h4>
          <div className="card-footer-icons">
            <Star
              size={20}
              id={product.id}
              onClick={setFav}
              weight={product.isFavorite ? "fill" : "light"}
            />
            <Button text="Add to cart" onClick={handleClick} />
            {modalOpen && (
              <Modal
                text="Add this product to cart?"
                closeButton={true}
                closeModal={handleCloseModal}
                actions={
                  <>
                    <a href="/"
                      className="confirmBtn"
                      id={product.id}
                      onClick={addToCart}
                    >
                      Add
                    </a>
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
