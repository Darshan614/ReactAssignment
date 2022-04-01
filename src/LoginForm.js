import React, { Fragment } from 'react';
import FormInput from './Components/ClassBased/FormInput';

class LoginForm extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Login Form</h1>
        <form>
          <FormInput description="Email" type="email" />
          <FormInput description="Password" type="password" />
          <label>Login as:</label>
          <select id="gender" name="gender">
            <option value="Male">Admin</option>
            <option value="Male">Employee</option>
            <option value="Male">Student</option>
          </select>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
