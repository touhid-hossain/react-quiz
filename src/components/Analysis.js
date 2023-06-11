import React from "react";
import classes from "../styles/Analysis.module.css";
import Questions from "./Questions";

const Analysis = ({answers}) => {
  return (
    <div class={classes.analysis}>
      <h1>Question Analysis</h1>
        <Questions answers={answers}/>
    </div>
  );
};

export default Analysis;
