import React from 'react'
import "./Cart.scss"
import Button from '../../components/Button'


export const Cart = () => {

    const data = JSON.parse(localStorage.getItem("cartItems"))

  return (
    <>
    <div className='product-list'>
    {data !== "null" && (data.map(element => 
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
    ))}
     </div>
  </>
  )
}
