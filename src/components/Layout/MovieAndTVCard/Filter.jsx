import React, { useState } from "react";
import Chevron from "../../../assets/images/chevron_right.svg";
import Availability from "./Availability";
import ReleaseDate from "./ReleaseDate";
import Genres from "./Genres";

import {
  Box,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Collapse,
} from "@mui/material";

function Filter() {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [showMe, setShowMe] = useState(0);

  return (
    <Box className="filter-div border-color-shadow mt">
      <Box className="name" onClick={() => setFilterIsOpen(!filterIsOpen)} sx={{ cursor: "pointer" }}>
        <Typography variant="h5">Filters</Typography>
        <Box
          component="img"
          src={Chevron}
          alt="chevron image"
          className={`${!filterIsOpen ? "closed" : ""}`}
          sx={{ userSelect: "none" }}
        />
      </Box>

      <Collapse in={filterIsOpen} timeout="auto" unmountOnExit>
        <Box className="filter">
          <Typography variant="h6">Show Me</Typography>
          <RadioGroup
            name="showme"
            value={showMe.toString()}
            onChange={(e) => setShowMe(Number(e.target.value))}
          >
            <FormControlLabel
              value="0"
              control={<Radio className="radio-input" />}
              label="Everything"
              id="everything"
              htmlFor="everything"
            />
            <FormControlLabel
              value="1"
              control={<Radio className="radio-input" />}
              label="Movies I Haven't Seen"
              id="not_seen"
              htmlFor="not_seen"
            />
            <FormControlLabel
              value="2"
              control={<Radio className="radio-input" />}
              label="Movies I Have Seen"
              id="seen"
              htmlFor="seen"
            />
          </RadioGroup>
        </Box>

        <Availability />
        <ReleaseDate />
        <Genres />
      </Collapse>
    </Box>
  );
}

export default Filter;
