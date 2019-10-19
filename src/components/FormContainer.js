/*Update Product Form
*product, quantity, hasAllergen, price, inStock
Create, Update, Delete*/

import React, {Component} from 'react';
import Input from '../components/Input'; 
import Buttons from '../components/Buttons';
import Select from '../components/Select';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newProduct: {
        product: '',
        quantity: '',
        hasAllergen: '',
        price: '',
        inStock: ''

      },

      inStockOptions: ['Yes', 'No'], //or a ternary expression?
   hasAllergenOptions: ['Yes', 'No'], //or a ternary expression?
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  } 

/* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> {/* Name of product */}
        <Input /> {/* Input for quantity*/} 
        <Select /> {/* Does it have allergen? */}
        <Input /> {/* Input for price*/} 
        <Select /> {/* Is it currently in stock? */}
	    <Buttons /> { /*Submit */ }
        <Buttons /> {/* Clear the form */}
      </form>
    );
  }
}

export default FormContainer;

