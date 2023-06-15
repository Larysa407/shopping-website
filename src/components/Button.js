import React from 'react'
import "./Button.scss"

export default function Button({backgroundColor, text, onClick}) {
  return (
    <button className="btn" style={{ backgroundColor }} onClick={onClick}>
    {text}
  </button>

  )
}
