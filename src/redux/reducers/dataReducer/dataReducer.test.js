import { dataReducer, initialState } from "./dataReducer";
import { SET_DATA } from "../../type";

describe("dataReducer works", () => {
  test("returns initial state", () => {
    expect(dataReducer()).toEqual(initialState);
  });

  test("get data", () => {
    const initialState = [];
    const data = [1, 2, 3];
    const action = {
      type: SET_DATA,
      payload: data,
    };
    const newState = dataReducer(initialState, action);
    expect(newState).toEqual(data);
  });
});
