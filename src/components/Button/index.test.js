import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";
import "@testing-library/jest-dom/extend-expect";

describe("Button component", () => {
  test("test for text and background color of button", () => {
    const buttonText = "To cart";
    const backgroundColor = "yellow";
    const onClick = jest.fn();

    const { getByText } = render(
      <Button
        backgroundColor={backgroundColor}
        text={buttonText}
        onClick={onClick}
      />
    );

    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ background: backgroundColor });
  });

  test("calls onClick function when button is clicked", () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <Button backgroundColor="blue" text="To cart" onClick={onClick} />
    );

    const buttonElement = getByText("To cart");

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

