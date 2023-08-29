import { SET_DATA} from "../../type/index";

export const initialState = []

export const dataReducer = (state = initialState, action) => {
  switch (action && action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};
