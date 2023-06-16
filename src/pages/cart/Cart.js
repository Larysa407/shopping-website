import React from 'react'

export const Cart = ({image, title, price, color, id}) => {

  console.log(id)
  return (
    <>
    <div className="card" key={id} id={id}></div>
    <div className="card-header"></div>
    <img className="card-img" src={image} alt="image of product" />
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{color}</p>
      <div className="card-footer">
        <h4 className="card-text">{price}</h4>
      </div>
    </div>
  </>
  )
}
