import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../type/index";

export const initialState = []

export const favoriteReducer = (state = initialState, action) => {
  switch (action && action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      const index = action.payload;
      return state.filter((item, idx) => idx !== index);
    default:
      return state;
  }
};
