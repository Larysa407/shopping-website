import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star } from 'phosphor-react'
import "./Navbar.scss"

export const Navbar = ({cart, favorite}) => {

  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/"> Brands Outlet </Link>
            <div className='navbar-icons'>
            <Link to="/favorite" className='favorite-link'>
                <Star size={25}/>
                <div className='favorite-length'>{favorite.length}</div>
            </Link>
            <Link to="/cart" className='cart-link'>
                <ShoppingCart size={25}/>
                <div className='cart-length'>{cart.length}</div>
            </Link>
            </div>

        </div>
        
    </div>
  )
}
