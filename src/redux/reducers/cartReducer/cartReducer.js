import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from "../../type/index";

export const initialState = []


export const cartReducer = (state = initialState, action) => {
  switch (action && action.type) {
    case ADD_TO_CART:
      if (state.some((item) => item.id === action.payload.id)) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    case REMOVE_FROM_CART:
      return state.filter(({ id }) => id !== action.payload);
    case REMOVE_ALL_FROM_CART:
      localStorage.removeItem("persist:root");
      return initialState
    default:
      return state;
  }
};
