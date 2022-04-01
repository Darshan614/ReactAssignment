import React from 'react';
import classes from './FormInput.module.css';

class FormInput extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  formsubmithandler() {
    console.log(this.state.email);
  }
  render() {
    return (
      <div className={classes.row}>
        <label>{this.props.description}</label>
        <input type={this.props.type} />
      </div>
    );
  }
}

export default FormInput;
