import React from "react";
import img from "../assets/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <div class={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span class={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span class={`material-icons-outlined ${classes.close}`}> close </span>
      <img src={img} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
