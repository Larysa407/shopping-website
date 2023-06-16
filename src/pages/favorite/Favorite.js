import React, { useState, useEffect} from "react";
import ProductList from "../../components/ProductList";
import "../../components/ProductCard.scss";


export const Favorite = ({ image, title, color, price }) => {
    const [fav, setFav] = useState([])

    const show = () => {
      setFav(localStorage.getItem("favoriteItems"))
      console.log(setFav)
    }

    show()
  return (
    
    <>

      <div className="card-header"></div>
      <img className="card-img" src={image} alt="image of product" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{color}</p>
        <div className="card-footer">
          <h4 className="card-text">{price}</h4>
          <div className="card-footer-icons"></div>
        </div>
      </div>
    </>
  );
};
