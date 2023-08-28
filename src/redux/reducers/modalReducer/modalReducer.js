import { MODAL_OPEN } from "../../type/index";
import { MODAL_CLOSE } from "../../type/index";

export const initialState = {
  modal: null
}

export const modalReducer = (state = initialState, action) => {
  switch (action && action.type) {
    case MODAL_OPEN:
      return action.payload;
    case MODAL_CLOSE:
      return null;
    default:
      return state;
  }
};
