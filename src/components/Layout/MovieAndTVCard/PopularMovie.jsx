import React, { useState, useEffect } from "react";
import FilterMovie from "./FilterMovie";
import MoviesList from "./MoviesList";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Typography } from "@mui/material";

const initialState = { moviesOrTVShowList: [], page: 1, isLoad: false };

const checkCategory = (url) => {
  if (url.includes("/movie/popular")) return "Popular Movies";
  else if (url.includes("/movie/now_playing")) return "Now Playing Movies";
  else if (url.includes("/movie/upcoming")) return "Upcoming Movies";
  else if (url.includes("/movie/top_rated")) return "Top Rated Movies";
  else if (url.includes("/tv/popular")) return "Popular TV Shows";
  else if (url.includes("/tv/airing_today")) return "TV Shows Airing Today";
  else if (url.includes("/tv/on_the_air")) return "Currently Airing TV Shows";
  else return "Top Rated TV Shows";
};

function PopularMovie({ API }) {
  const [state, setState] = useState(initialState);

  const fetchmoviesOrTVShowList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setState((prevState) =>
        prevState.page === 1
          ? { ...prevState, moviesOrTVShowList: [...data.results], isLoad: false }
          : {
              ...prevState,
              moviesOrTVShowList: [...prevState.moviesOrTVShowList, ...data.results],
              isLoad: false,
            }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmoviesOrTVShowList(`${API}&page=${state.page}`);
  }, [state.page, API]);

  return (
    <Box className="container">
      <InfiniteScroll
        dataLength={state?.moviesOrTVShowList?.length}
        next={
          state.isLoad &&
          (() => setState((prev) => ({ ...prev, page: prev.page + 1 })))
        }
        hasMore={true}
      >
        <Box className="movies-div">
          <Box className="title">
            <Typography variant="h4" component="h2">
              {checkCategory(API)}
            </Typography>
          </Box>
          <Box className="content-wrapper" sx={{ display: "flex" }}>
            <FilterMovie />
            <MoviesList state={state} setState={setState} isLoad={state.isLoad} />
          </Box>
        </Box>
      </InfiniteScroll>
    </Box>
  );
}

export default PopularMovie;
