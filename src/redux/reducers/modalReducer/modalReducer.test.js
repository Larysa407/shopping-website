import { modalReducer, initialState } from "./modalReducer";
import { MODAL_OPEN, MODAL_CLOSE } from "../../type";

describe("modalReducer works", () => {
  test("returns initial state", () => {
    expect(modalReducer()).toEqual(initialState);
  });

  test("open modal", () => {
    expect(modalReducer(initialState, { type: MODAL_OPEN })).toEqual({ modal: action.payload});
  });

  test("close modal", () => {
    expect(modalReducer(initialState, { type: MODAL_CLOSE })).toEqual(null);
  });
});
