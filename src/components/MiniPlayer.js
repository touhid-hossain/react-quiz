import React, { useRef, useState } from "react";
import img from "../assets/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";
import ReactPlayer from "react-player";

const MiniPlayer = ({ title, id }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      class={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span class={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        class={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status} 
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
