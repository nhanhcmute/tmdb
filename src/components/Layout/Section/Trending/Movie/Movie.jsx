import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  formatDate,
  generateMovieImage,
  getURL,
} from "../../../../../Helpers/Helper";
import CircularProgressBar from "./CircularProgressBar/CircularProgressBar";

function Movie({ movie, addCard }) {
  return (
    <Box className={`single-movie ${addCard ? "add-border" : ""}`}>
      <Link to={getURL(movie)}>
        <Box className="movie-img-div" component="div">
          <Box
            component="img"
            loading="lazy"
            className={`movie-img${addCard ? " add-height" : ""}`}
            src={generateMovieImage(movie, addCard)}
            alt="movie"
            title={movie?.title ? movie.title : movie.name}
          />
        </Box>
      </Link>
      <Box className={`movie-content-div${addCard ? " remove-height" : ""}`}>
        <CircularProgressBar movieVote={movie.vote_average} scale="false" />
        <Link to={getURL(movie)} className="hover-moviename">
          {movie?.title ? movie.title : movie.name}
        </Link>
        <Typography component="p">
          {movie?.release_date
            ? formatDate(new Date(movie.release_date), false)
            : formatDate(new Date(movie.first_air_date), false)}
        </Typography>
      </Box>
    </Box>
  );
}

export default Movie;
