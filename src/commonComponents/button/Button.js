import React from 'react'
import "./Button.css"

const Button = ({name, className}) => {
  return (
    <div className={className}>{name}</div>
  )
}

export default Button