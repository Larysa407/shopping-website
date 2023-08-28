import { modalReducer, initialState } from "./modalReducer";
import { MODAL_OPEN, MODAL_CLOSE } from "../../type";

describe("modalReducer works", () => {
  test("returns initial state", () => {
    expect(modalReducer()).toEqual(initialState);
  });

  test("open modal", () => {
    const action = {
      type: MODAL_OPEN,
      payload: { id: 1 },
    };
    const newState = modalReducer(initialState, action);
    expect(newState).toEqual({ id: 1 });
  });

  test("close modal", () => {
    expect(modalReducer(initialState, { type: MODAL_CLOSE })).toEqual(null);
  });
});
