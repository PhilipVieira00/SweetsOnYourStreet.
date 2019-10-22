/*Update Product Form
*product, quantity, hasAllergen, price, inStock
Create, Update, Delete*/

import React, {Component} from 'react';
import Input from '../components/Input'; 
import FormButtons from '../components/FormButtons';
import Select from '../components/Select';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    state = {
      newProduct: {
        product: '',
        quantity: 0,
        hasAllergen: '',
        price: 0,
        inStock: ''

      },
      
      inStockOptions: ['Yes', 'No'], //or a ternary expression?
   hasAllergenOptions: ['Yes', 'No'], //or a ternary expression?
    }
    this.state = initialState
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  } 

  
/* This life cycle hook gets executed when the component mounts */
handleChange(event) {
  this.setState({value: event.target.value});
}

  handleFormSubmit(event) {
    // Form submission logic
    alert('Info updated: ' + this.state.value);
    event.preventDefault();
  }
  handleClearForm() {
    // Logic for resetting the form
    this.setState(() => this.initialState)
  }
  
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> {/* Name of product */}
        <Input /> {/* Input for quantity*/} 
        <Select /> {/* Does it have allergen? */}
        <Input /> {/* Input for price*/} 
        <Select /> {/* Is it currently in stock? */}
	    <FormButtons /> { /*Submit */ }
        <FormButtons /> {/* Clear the form */}
      </form>
    );
  }
}

export default FormContainer;

