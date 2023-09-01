import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

export default function Modal({
  header,
  closeButton,
  closeModal,
  text,
  actionBtn,
  cancelBtn,
  addToCart,
  clickOutside,
  removeFromCart
}) {
  return (
    <div className="modal-container" onClick={clickOutside}>
      <div className="modal" id="modal">
        <h3 className="modalHeader">
          {header}
          {closeButton && (
            <span className="closeBtn" onClick={closeModal} role="closeBtn"></span>
          )}
        </h3>
        <div className="modalContent" role="text">{text}</div>
        <div className="actionsBtn">
          <button className="confirmBtn" onClick={addToCart || removeFromCart}>{actionBtn}</button>
          <button className="cancelBtn" onClick={closeModal}>{cancelBtn} </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

Modal.defaultProps = {
  text: "Sorry, something goes wrong...",
};
