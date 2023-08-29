import { favoriteReducer, initialState } from "./favoriteReducer";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "../../type";

describe("favoriteReducer works", () => {
  test("returns initial state", () => {
    expect(favoriteReducer()).toEqual(initialState);
  });

  test("add the first product to favorite", () => {
    const action = {
      type: ADD_TO_FAVORITES,
      payload: { id: 1, qty: 1 },
    };
    const newState = favoriteReducer(initialState, action);
    expect(newState).toEqual([{ id: 1, qty: 1 }]);
  });

  test("delete the first product from favorite", () => {
    const initialState = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
      ];
      const indexToRemove = 1;
      const action = {
        type: REMOVE_FROM_FAVORITES,
        payload: indexToRemove,
      };
  
      const newState = favoriteReducer(initialState, action);
  
      expect(newState).toEqual([{ id: 1, name: "Product A" }]);
  
  });

});
