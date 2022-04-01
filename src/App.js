import React , { useState }from 'react';
import './style.css';
import LoginForm from './AuthPages/LoginForm';
import SignUpForm from './AuthPages/SignUpForm';
import FormButton from './Components/FunctionBased/FormButton';

export default function App() {
  const [islogin, setislogin] = useState(true);
  const formtoggler = () => {
    console.log("inside toggle")
    setislogin(state=>{
      return !state
    })
  }
  return (
    <div>
      {islogin && <LoginForm />}
      {!islogin && <SignUpForm />}
      <FormButton onclick={formtoggler} description={islogin ? "SignUp" : "Login"}/>
    </div>
  );
}
