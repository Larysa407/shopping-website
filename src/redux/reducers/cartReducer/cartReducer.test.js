import { cartReducer, initialState } from "./cartReducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../type";

describe("cartReducer works", () => {
  test("returns initial state", () => {
    expect(cartReducer()).toEqual(initialState);
  });

  test("add the first product to cart", () => {
    const action = {
      type: ADD_TO_CART,
      payload: { id: 1, qty: 1 },
    };
    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([{ id: 1, qty: 1 }]);
  });

  test("delete the first product from cart", () => {
    const initialState = [
      { id: 1, name: "Product A" },
      { id: 2, name: "Product B" },
    ];
    const indexToRemove = 1;
    const action = {
      type: REMOVE_FROM_CART,
      payload: indexToRemove,
    };
    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([{ id: 1, name: "Product A" }]);
  });

  test("remove all from cart", () => {
    expect(cartReducer()).toEqual(initialState);
  });
});
