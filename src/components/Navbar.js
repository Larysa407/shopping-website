import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star } from 'phosphor-react'
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/"> Brands Outlet </Link>
            <div className='navbar-icons'>
            <Link to="/favorite">
                <Star size={25}/>
            </Link>
            <Link to="/cart">
                <ShoppingCart size={25}/>
            </Link>
            </div>

        </div>
        
    </div>
  )
}
