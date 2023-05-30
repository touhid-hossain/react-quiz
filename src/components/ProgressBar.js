import React from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProgressBar = () => {
  return (
    <div class={classes.progressBar}>
      <div class={classes.backButton}>
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div class={classes.rangeArea}>
        <div class={classes.tooltip}>24% Cimplete!</div>
        <div class={classes.rangeBody}>
          <div class={classes.progress} style={{width: "20%"}}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={classes.next}>
          <span>Next Question</span>
          <span class="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
};

export default ProgressBar;
