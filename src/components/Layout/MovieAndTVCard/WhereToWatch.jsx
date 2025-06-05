import React, { useState } from "react";
import Chevron from "../../../assets/images/chevron_right.svg";
import { Box, Typography, IconButton } from "@mui/material";

function WhereToWatch() {
  const [whereToWatchIsOpen, setWhereToWatchIsOpen] = useState(false);

  return (
    <Box
      className="where-to-watch-div border-color-shadow mt"
      sx={{
        borderColor: "rgba(0,0,0,0.1)",
        borderStyle: "solid",
        borderWidth: 1,
        mt: 2,
      }}
    >
      <Box
        className="name"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", p: 1 }}
        onClick={() => setWhereToWatchIsOpen(!whereToWatchIsOpen)}
      >
        <Typography variant="h5" component="h2">
          Where To Watch
        </Typography>
        <IconButton
          size="small"
          sx={{
            transform: whereToWatchIsOpen ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 0.3s",
            p: 0,
          }}
          aria-label="toggle where to watch"
        >
          <img src={Chevron} alt="chevron image" />
        </IconButton>
      </Box>
      {/* Bạn có thể thêm nội dung hiển thị khi mở ở đây nếu muốn */}
    </Box>
  );
}

export default WhereToWatch;
