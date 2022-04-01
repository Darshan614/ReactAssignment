import React from 'react';
import classes from './FormInput.module.css';

const FormInput = (props) => {
  return (
    <div className={classes.row}>
      <label>{props.description}</label>
      <input type={props.type} />
    </div>
  );
};

export default FormInput;
