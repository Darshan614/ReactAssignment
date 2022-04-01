import React, { Fragment } from 'react';
import FormInput from '../Components/ClassBased/FormInput';
import classes from './LoginForm.module.css';
import FormButton from '../Components/FunctionBased/FormButton';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.usernamechangehandler = this.usernamechangehandler.bind(this);
  }
  usernamechangehandler(event) {
    this.setState({
      username: event.target.value,
      password: this.state.password,
    });
    console.log(this.state);
  }
  // passwordchangehandler(event) {
  //   this.setState = { password: event.target.value };
  // }
  render() {
    return (
      <Fragment>
        <div className={classes.loginform}>
          <h1 className={classes.headerTitle}>Login </h1>
          <form>
            <FormInput
              description="Username"
              type="text"
              onchang={this.usernamechangehandler}
            />
            <FormInput description="Password" type="password" />
            <div className={classes.row}>
              <label>Login as:</label>
              <select id="level" name="level">
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <FormButton description="Login" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default LoginForm;
