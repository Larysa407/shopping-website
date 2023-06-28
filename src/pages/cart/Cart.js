import React from 'react'
import "./Cart.scss"
import { CartShow } from './CartShow'


export const Cart = ({cart, onDelete}) => {

  return (
    <>
    <div className='product-list'>
    {cart.length !== 0 ? (cart.map(cartItem => 
      <CartShow
      cartItem={cartItem}
      key={cartItem.id}
      onDelete={onDelete}
      />
    )) : (<p className='empty-cart'>The cart is empty</p>) }
     </div>
  </>
  )
}



