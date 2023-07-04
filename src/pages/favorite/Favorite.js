import React from 'react'
import { FavoriteShow } from './FavoriteShow'


export const Favorite = ({favorite}) => {

  return (
    <div className='product-list'>
    {favorite.length !== 0 ? (favorite.map(favoriteItem => 
      <FavoriteShow
      favoriteItem={favoriteItem}
      key={favoriteItem.id}
      />
    )) : (<p className='empty-card'>No favorite items</p>) }
     </div>
  )
}