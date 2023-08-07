import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

export default function Button({ backgroundColor, text, onClick }) {
  return (
    <button className="btn" style={{ backgroundColor }} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "Button",
};
