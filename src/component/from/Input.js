import React from 'react'

const Input = (props) => {
  return (
    <div className="input-field">
      <input id={props.id} type={props.type} className="validate"/>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
};

export default Input
