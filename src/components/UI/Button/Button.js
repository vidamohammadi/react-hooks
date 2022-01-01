import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button className={`btn ${props.btnType}`}  onClick={props.onClick}>{props.value}</button>
    )
}

export default Button
