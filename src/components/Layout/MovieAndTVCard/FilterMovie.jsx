import React from "react";
import Sort from "./Sort";
import Filter from "./Filter";
import WhereToWatch from "./WhereToWatch";
import { Box } from "@mui/material";

function FilterMovie() {
  return (
    <Box className="search-movies-div">
      <Sort />
      <Filter />
      <WhereToWatch />
      <Box className="search-div"></Box>
    </Box>
  );
}

export default FilterMovie;
