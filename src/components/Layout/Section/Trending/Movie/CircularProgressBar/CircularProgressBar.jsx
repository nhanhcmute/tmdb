import { Circle } from "rc-progress";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// calculate Movie Vote
const calcMovieVote = (vote) => {
  const voteAvg = Number(vote).toFixed(1);
  let percentage = voteAvg * 10;
  return (percentage = percentage === 0 ? "NR" : percentage);
};

// make strokeColor based on percentage
const makeStrokeColor = (percentage) => {
  if (percentage >= 70 && percentage <= 100) return "#21d07a";
  else if (percentage >= 40 && percentage <= 69) return "#d2d531";
  else return "#db2360";
};

function CircularProgressBar({ movieVote, scale }) {
  const percentage = calcMovieVote(movieVote);
  const strokeColor = percentage !== "NR" ? makeStrokeColor(percentage) : "#666";

  return (
    <Box className={`circular-div ${scale === "true" ? "scale-div" : ""}`}>
      <Circle
        className="circular-progress"
        strokeColor={strokeColor}
        strokeWidth={8}
        trailColor="#1d4028"
        trailWidth={8}
        percent={percentage !== "NR" ? percentage : 0}
      />
      <Typography
        component="span"
        className={scale === "true" ? "large-span-font" : ""}
      >
        {percentage}
        {percentage !== "NR" && (
          <Typography
            component="sup"
            className={scale === "true" ? "large-sup-font" : ""}
          >
            %
          </Typography>
        )}
      </Typography>
    </Box>
  );
}

export default CircularProgressBar;
