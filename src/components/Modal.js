import React from "react";
import "./Modal.scss"

export default function Modal({
  header,
  closeButton,
  closeModal,
  text,
  actions,
  clickOutside,
}) {
  return (
    <div className="modal-container" onClick={clickOutside}>
      <div className="modal" id="modal">
        <h3 className="modalHeader">
          {header}
          {closeButton && (
            <span className="closeBtn" onClick={closeModal}></span>
          )}
        </h3>
        <div className="modalContent">{text}</div>
        {actions && <div className="actionsBtn">{actions}</div>}
      </div>
    </div>
  );
}
