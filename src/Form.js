import React, { Fragment } from 'react';

class Form extends React.Component{
  render(){
    return (
      <Fragment>
    <h1>Login Form</h1>
    <form>
      <label>Email
        </label>
        <input type="email" />
      </form>
    </Fragment>
    )
  }
}

export default Form;