import { SET_DATA, ADD_TO_CART } from "../type/index";

const defaultState = []

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};
