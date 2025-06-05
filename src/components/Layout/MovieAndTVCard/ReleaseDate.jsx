import React, { useState } from "react";
import { Box, Typography, FormControlLabel, Checkbox } from "@mui/material";

function ReleaseDate() {
  const [allReleases, setAllReleases] = useState(true);

  return (
    <Box className="filter">
      <Typography variant="h6" component="h3" className="release-date-heading">
        Release Dates
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={allReleases}
            onChange={() => setAllReleases(!allReleases)}
            name="all-releases"
            id="all-releases"
            className="availability-input"
          />
        }
        label="Search all Releases?"
        className="ml"
        htmlFor="all-releases"
      />

    </Box>
  );
}

export default ReleaseDate;
