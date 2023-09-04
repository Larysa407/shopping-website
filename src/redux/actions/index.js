import {
  ADD_TO_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITES,
  SET_DATA,
  MODAL_OPEN,
  MODAL_CLOSE,
  REMOVE_ALL_FROM_CART
} from "../type/index";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const addToFavorites = (id, title, price, image, color) => ({
  type: ADD_TO_FAVORITES,
  payload: {
    id,
    title,
    price,
    image,
    color,
  },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};

export const setData = (dataList) => ({
  type: SET_DATA,
  payload: dataList,
});

export const openModal = (id) => ({
  type: MODAL_OPEN,
  payload: id,
});

export const closeModal = () => ({
  type: MODAL_CLOSE,
});

export const removeAllFromCart = (item) => ({
  type: REMOVE_ALL_FROM_CART,
  payload: item,
});

