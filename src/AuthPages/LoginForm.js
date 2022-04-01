import React, { Fragment } from 'react';
import FormInput from '../Components/ClassBased/FormInput';
import classes from './LoginForm.module.css';
import FormButton from '../Components/FunctionBased/FormButton';

class LoginForm extends React.Component {
  render() {
    return (
      <Fragment>
        <div className={classes.loginform}>
          <h1 className={classes.headerTitle}>Login </h1>
          <form>
            <FormInput description="Username" type="text" />
            <FormInput description="Password" type="password" />
            <div className={classes.row}>
              <label>Login as:</label>
              <select id="level" name="level">
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <FormButton description="Login"/>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default LoginForm;
