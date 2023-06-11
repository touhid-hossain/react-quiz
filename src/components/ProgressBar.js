import React, { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProgressBar = ({ next, prev, submit, progressStatus }) => {
  const [tooltip, setTooltip] = useState(false)
  const tooltipRef = useRef()

  function toggleTooltip() {
    if(tooltip) {
      setTooltip(false)
      tooltipRef.current.style.display = "none"
    }else {
      setTooltip(true)
      tooltipRef.current.style.left = `calc(${progressStatus}% - 65px)`
      tooltipRef.current.style.display = "block"
    }
  }

  return (
    <div class={classes.progressBar}>
      <div class={classes.backButton} onClick={prev}>
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div class={classes.rangeArea}>
        <div class={classes.tooltip} ref={tooltipRef}>{progressStatus}% Cimplete!</div>
        <div class={classes.rangeBody}>
          <div
            class={classes.progress}
            style={{ width: `${progressStatus}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progressStatus === 100 ? submit : next}
      >
        <span>{progressStatus === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span class={progressStatus === 100 ? "" : "material-icons-outlined"}>
          {progressStatus === 100 ? "" : "arrow_forward"}
        </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
