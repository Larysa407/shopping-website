import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer/dataReducer";
import { modalReducer } from "./modalReducer/modalReducer";
import { favoriteReducer } from "./favoriteReducer/favoriteReducer";
import { cartReducer } from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  products: dataReducer,
  modal: modalReducer,
  favorite: favoriteReducer,
  cart: cartReducer,
});

export default rootReducer;
