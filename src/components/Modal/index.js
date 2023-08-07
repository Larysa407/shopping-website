import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

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

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

Modal.defaultProps = {
  text: "Sorry, something goes wrong...",
};
