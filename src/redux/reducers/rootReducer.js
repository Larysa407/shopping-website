import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { modalReducer } from "./modalReducer";
import { favoriteReducer } from "./favoriteReducer";
import {
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
} from "./localStorageActions";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  products: dataReducer,
  modal: modalReducer,
  favorite: favoriteReducer,
  cart: cartReducer
});

const initialState = loadDataFromLocalStorage();

const localStorageReducer = (state = initialState, action) => {
  const nextState = rootReducer(state, action);
  saveDataToLocalStorage(nextState);
  return nextState;
};

export default rootReducer;
