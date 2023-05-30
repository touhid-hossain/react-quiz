import React from "react";
import classes from '../styles/Illustration.module.css'
import img from '../assets/images/signup.svg'
const Illustration = () => {
  return (
    <div class={classes.illustration}>
      <img src={img} alt="Signup" />
    </div>
  );
};

export default Illustration;
