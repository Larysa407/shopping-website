import React from "react";
import PropTypes from "prop-types";


export const FavoriteShow = ({ image, title, price, color }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="card-img" src={image} alt="image of product" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{color}</p>
        <div className="card-footer">
          <h4 className="card-text">{price} uah</h4>
        </div>
      </div>
    </div>
  );
};

FavoriteShow.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  onDelete: PropTypes.func,
};

FavoriteShow.defaultProps = {
  title: "Product",
  color: "None",
  price: 0,
};
