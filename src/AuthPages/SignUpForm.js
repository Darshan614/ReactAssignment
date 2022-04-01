import React, { Fragment } from 'react';
import FormInput from '../Components/FunctionBased/FormInput';
import FormButton from '../Components/FunctionBased/FormButton';
import classes from './SignUpForm.module.css';

function SignUpForm() {
  return (
    <Fragment>
      <div className={classes.signupform}>
      <h1 className={classes.headerTitle}>SignUp</h1>
      <form>
        <FormInput description="Email" type="email" />
        <FormInput description="Password" type="password" />
        <label>SignUp as:</label>
        <select id="gender" name="gender">
          <option value="Male">Admin</option>
          <option value="Male">Employee</option>
          <option value="Male">Student</option>
        </select>
        <FormButton />
      </form>
      </div>
    </Fragment>
  );
}

export default SignUpForm;
