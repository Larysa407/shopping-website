import { ADD_TO_CART, REMOVE_FROM_CART } from "../type/index";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.some((item) => item.id === action.payload.id)) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    case REMOVE_FROM_CART:
      const index = state.filter((item) => item.id !== action.payload.id)
      console.log(index)
      return index
    default:
      return state;
  }
};
