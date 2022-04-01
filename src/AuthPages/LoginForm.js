import React, { Fragment } from 'react';
import FormInput from '../Components/ClassBased/FormInput';
import classes from './LoginForm.module.css';

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
              <select id="gender" name="gender">
                <option value="Male">Admin</option>
                <option value="Male">Employee</option>
                <option value="Male">Student</option>
              </select>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default LoginForm;
