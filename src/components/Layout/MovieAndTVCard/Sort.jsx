import React, { useState } from "react";
import DropDown from "../UI/DropDown";
import Chevron from "../../../assets/images/chevron_right.svg";
import { Box, Typography, IconButton } from "@mui/material";

const popularitySort = [
  { label: "Popularity Descending", value: "Popularity Descending" },
  { label: "Popularity Ascending", value: "Popularity Ascending" },
  { label: "Rating Descending", value: "Rating Descending" },
  { label: "Rating Ascending", value: "Rating Ascending" },
  { label: "Release Date Descending", value: "Release Date Descending" },
  { label: "Release date Ascending", value: "Release date Ascending" },
  { label: "Title (A-Z)", value: "Title (A-Z)" },
  { label: "Title (Z-A)", value: "Title (Z-A)" },
];

function Sort() {
  const [sortIsOpen, setSortIsOpen] = useState(true);

  return (
    <Box className="sort-div border-color-shadow">
      <Box
        className="name"
        onClick={() => {
          setSortIsOpen(!sortIsOpen);
        }}
        sx={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "space-between" }}
      >
        <Typography variant="h5" component="h2">
          Sort
        </Typography>
        <IconButton
          size="small"
          sx={{
            transition: "transform 0.3s",
            transform: sortIsOpen ? "rotate(0deg)" : "rotate(-90deg)",
            padding: 0,
          }}
          aria-label="toggle sort"
        >
          <img src={Chevron} alt="chevron image" />
        </IconButton>
      </Box>

      {sortIsOpen && (
        <Box className="more-info-div" sx={{ mt: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Sort Results By
          </Typography>
          <DropDown popularitySort={popularitySort} />
        </Box>
      )}
    </Box>
  );
}

export default Sort;
