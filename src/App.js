import React from 'react';
import './style.css';
import LoginForm from './AuthPages/LoginForm';
import SignUpForm from './AuthPages/SignUpForm';

export default function App() {
  return (
    <div>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}
