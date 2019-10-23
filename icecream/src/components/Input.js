import React from 'react';
const Input = (props) => {
    return (  
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-input"
      id={props.product}
      product={props.product}
      quantity={props.quantity}
      hasAllergen={props.hasAllergen}
      price={props.price}
      inStock={props.inStock}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
    />
  </div>
)
}

export default Input;