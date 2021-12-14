import React from 'react'
import './Input.css'

const Input = (props) => {
    if(props.name === "input"){
        return(
            <input className="input" type="text" value={props.value} onChange={props.onChange} id={props.id}/>
        )
    }
    return (
        <textarea className="input" style={{height: "150px"}} rows="4" value={props.value} onChange={props.onChange} id={props.id}/>
    )
}

export default Input