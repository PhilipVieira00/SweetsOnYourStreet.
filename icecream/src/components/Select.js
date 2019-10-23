// import React from "react";

// const Select = (props) => {
//     return(
//         <div className="form-group">
//             <label htmlFor={props.name}> {props.title} </label>
//             <select
//               name={props.name}
//               value={props.value}
//               onChange={props.handleChange}
//               >
//               <option value="" disabled>{props.placeholder}</option>
//               {props.options.map(option => {
//                 return (
//                   <option
//                     key={option}
//                     value={option}
//                     label={option}>{option}
//                   </option>
//                 );
//               })}
        
//             </select>
//     <Select title={'hasAllergen'}
//        name={'hasAllergen'}
//        options = {this.state.hasAllergenOptions} 
//        value = {this.state.newProduct.hasAllergen}
//        placeholder = {'Does it have an allergen?'}
//        handleChange = {this.handleInput}
// /> <Select title={'inStock'}
//        name={'inStock'}
//        options = {this.state.inStockOptions} 
//        value = {this.state.newProduct.inStock}
//        placeholder = {'Do you have stock of this item?'}
//        handleChange = {this.handleInput}
// />
//       </div>)
// }

// export default Select;