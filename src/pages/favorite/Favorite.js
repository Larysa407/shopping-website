import React from "react";
import ProductCard from "../../components/ProductList";
import "../../components/ProductCard.scss";


export const Favorite = ({favorite}) => {

  console.log(favorite)
  return (
    <>
    <div className='product-list'>
    {favorite.length !== 0 ? (favorite.map(element => 
    <div className="card" key={element.id}>
    <div className="card-header">
    <img className="card-img" src={element.image} alt="image of product" />
    <span className="closeBtn"></span>
    </div>
    <div className="card-body">
      <h3 className="card-title">{element.title}</h3>
      <p className="card-text">{element.color}</p>
      <div className="card-footer">
        <h4 className="card-text">{element.price}</h4>
      </div>
    </div>
    </div>
    )) : (<p className='empty-cart'>No favorite items</p>) }
     </div>
  </>
  )
}
