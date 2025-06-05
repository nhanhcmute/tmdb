import React from "react";
import { Box, Typography } from "@mui/material";
import dummyImage from "../../../../../assets/images/dummy_image.svg";

function CastCard({ cast }) {
  const castImage =
    cast.profile_path === null
      ? dummyImage
      : `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`;

  return (
    <Box className="single-cast-card">
      <Box className="cast-img-div">
        <Box
          component="img"
          src={castImage}
          alt="cast Image"
          sx={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
      <Typography variant="body2" className="cast-original-name" component="p">
        {cast.original_name}
      </Typography>
      <Typography variant="body2" className="cast-character-name" component="p">
        {cast.character}
      </Typography>
    </Box>
  );
}

export default CastCard;
