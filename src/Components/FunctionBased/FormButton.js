import React from 'react';
import classes from './FormButton.module.css';

function FormButton(props){
  return <div className={classes.button} className={classes.row}>
    <button onClick={props.onclick}>
      {props.description}
      </button>
    </div>
}

export default FormButton;