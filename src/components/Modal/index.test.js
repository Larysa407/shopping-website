import React from "react";
import Modal from './index'
import {fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";


describe("Modal component", () => {
  test("renders modal with text and close button", () => {
    const text = "Text";
    const onClose = jest.fn();

    const { getByText, getByRole } = render(
      <Modal text={text} closeButton onClose={onClose} />
    );

    const textElement = getByText(text);
    const closeButtonElement = getByRole("closeBtn");

    expect(textElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();

    fireEvent.click(closeButtonElement);

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test("renders modal with buttons and calls onClick functions", () => {
    
    const btnOneText = "addBtn"
    const btnTwoText = "cancelBtn"

    const onClickFn = jest.fn();

    const { getByText } = render(
      <Modal
        header="Modal Header"
        closeButton
        onClose={() => {}}
        actionBtn={btnOneText}
        cancelBtn={btnTwoText}
        text="Text"
        onClick={onClickFn}
      />
    );


    const btnOneElement = getByText(btnOneText);
    const btnTwoElement = getByText(btnTwoText);

    fireEvent.click(btnOneElement);
    fireEvent.click(btnTwoElement);

    expect(onClickFn).toHaveBeenCalledTimes(0);
    expect(onClickFn).toHaveBeenCalledTimes(0);
  });
});
