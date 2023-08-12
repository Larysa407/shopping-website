import {
    ADD_TO_CART,
    ADD_TO_FAVORITES,
    REMOVE_FROM_CART,
    REMOVE_FROM_FAVORITES,
    SET_DATA,
    MODAL_OPEN,
    MODAL_CLOSE,
  } from "../type/index";
  
  export const addToCart = (title, price, image, color) => {
    return {
      type: ADD_TO_CART,
      payload: {
        title,
        price,
        image,
        color,
      },
    };
  };
  
  export const addToFavorites = (title, price, image, color) => ({
    type: ADD_TO_FAVORITES,
    payload: {
      title,
      price,
      image,
      color,
    },
  });
  
  export const removeFromCart = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index,
  });
  
  export const removeFromFavorites = (index) => {
    return {
      type: REMOVE_FROM_FAVORITES,
      payload: index,
    };
  };
  
  export const setData = (dataList) => ({
    type: SET_DATA,
    payload: dataList,
  });
  
  export const openModal = (index) => ({
    type: MODAL_OPEN,
    payload: index
  });
  
  export const closeModal = () => ({
    type: MODAL_CLOSE,
  });
  