import React from "react";
import { Header } from "./index";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store/index"

describe("Header component", () => {
    test("snapshot test for Header component", () => {
        const component = renderer.create(
          <Provider store={store}>
            <Router>
              <Header />
            </Router>
          </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
})