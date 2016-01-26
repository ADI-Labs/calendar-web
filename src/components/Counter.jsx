import React from 'react'

export default (props) => (
  <div>
    <p>{ 'Current value: ' + props.value }</p>
    <button onClick={ props.handleIncrement }>{ 'Increment' }</button>
    <button onClick={ props.handleDecrement }>{ 'Decrement' }</button>
  </div>
)