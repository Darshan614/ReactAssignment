import React from 'react';

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
      <div>
        <label>{this.props.description}</label>
        <input type={this.props.type} />
      </div>
    );
  }
}

export default FormInput;
