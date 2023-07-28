import React from 'react'
import { Favorite } from './Favorite'

export const FavoriteShow = ({favoriteItem}) => {
  
    // const handleClick = () => {
    //     onDelete(favoriteItem.id)
    // }

  return (
    <>
    <div className="card">
    <div className="card-header">
    <img className="card-img" src={favoriteItem.image} alt="image of product" />
    </div>
    <div className="card-body">
      <h3 className="card-title">{favoriteItem.title}</h3>
      <p className="card-text">{favoriteItem.color}</p>
      <div className="card-footer">
        <h4 className="card-text">{favoriteItem.price} uah</h4>
      </div>
    </div>
    </div>
  </>
  )
}