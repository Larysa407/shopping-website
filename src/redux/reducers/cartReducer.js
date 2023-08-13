import { ADD_TO_CART, REMOVE_FROM_CART } from "../type/index";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      const index = action.payload;
      return state.filter((item, idx) => idx !== index);
    default:
      return state;
  }
};
