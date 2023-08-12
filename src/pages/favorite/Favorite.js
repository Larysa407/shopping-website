import React from "react";
import { FavoriteShow } from "./FavoriteShow";
import { useSelector } from "react-redux";

export const Favorite = () => {
  const favorite = useSelector((state) => state.favorite);
  return (
    <div className="product-list">
      {favorite.length !== 0 ? (
        favorite.map((favoriteItem) => (
          <FavoriteShow
            image={favoriteItem.image}
            title={favoriteItem.title}
            color={favoriteItem.color}
            price={favoriteItem.price}
            key={favoriteItem.id}
          />
        ))
      ) : (
        <p className="empty-card">No favorite items</p>
      )}
    </div>
  );
};
