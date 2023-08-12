import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { modalReducer } from "./modalReducer";
import { favoriteReducer } from "./favoriteReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  products: dataReducer,
  modal: modalReducer,
  favorite: favoriteReducer,
  cart: cartReducer,
});

export default rootReducer;
