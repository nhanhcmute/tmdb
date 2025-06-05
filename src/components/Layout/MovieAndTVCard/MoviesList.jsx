import React from "react";
import Movie from "../Section/Trending/Movie/Movie";
import { Box, Button } from "@mui/material";

function MoviesList({ state, setState, isLoad }) {
  const loadHandler = (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, isLoad: true }));
    setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  };

  return (
    <Box className="movies-list-div">
      {/* show movie card */}
      {state?.moviesOrTVShowList?.map((movie) => {
        return <Movie movie={movie} key={movie.id} addCard="true" />;
      })}
      <Box className="load-more-div" sx={{ textAlign: "center", mt: 2 }}>
        <Button
          variant="contained"
          className="load-btn"
          onClick={loadHandler}
          disabled={isLoad}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
}

export default MoviesList;
