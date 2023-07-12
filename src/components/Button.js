import React from 'react'
import "./Button.scss"

export default function Button({backgroundColor, text, onClick, disabled}) {
  return (
    <button className="btn" style={{ backgroundColor }} disabled={disabled} onClick={onClick}>
    {text}
  </button>

  )
}
