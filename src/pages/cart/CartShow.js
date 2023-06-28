import React from 'react'
import { Cart } from './Cart'
import "./Cart.scss"

export const CartShow = ({cartItem, onDelete}) => {
  
    const handleClick = () => {
        onDelete(cartItem.id)
    }

  return (
    <>
    <div className="card">
    <div className="card-header">
    <span className="closeBtn" onClick={handleClick}></span>
    <img className="card-img" src={cartItem.image} alt="image of product" />
    </div>
    <div className="card-body">
      <h3 className="card-title">{cartItem.title}</h3>
      <p className="card-text">{cartItem.color}</p>
      <div className="card-footer">
        <h4 className="card-text">{cartItem.price}</h4>
      </div>
    </div>
    </div>
  </>
  )
}