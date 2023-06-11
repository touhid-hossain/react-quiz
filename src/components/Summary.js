import React from "react";
import img from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

const Summary = ({ score, noq }) => {
  const getKeyword = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "Excellent";
    }
  };

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const resultImage = result ? result?.photos[0].src.medium : img;

  return (
    <div class={classes.summary}>
      <div class={classes.point}>
        {/* <!-- progress bar will be placed here  */}
        <p class={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div class={classes.badge}> Loading your badge....</div>}
      {error && <div class={classes.badge}> Error occurred!</div>}

      {!loading && !error && (
        <div class={classes.badge}>
          <img src={resultImage} alt="Success" />
        </div>
      )}
    </div>
  );
};

export default Summary;
