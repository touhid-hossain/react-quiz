import React from "react";
import img from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";

const Video = ({ title, id, noq }) => {
  return (
    <div class={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div class={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
};

export default Video;
