import React from "react";
import { Link } from "react-router-dom";
import dateIcon from "../../../../assets/images/date_icon.svg";
import favIcon from "../../../../assets/images/favourite_icon.svg";
import watchListIcon from "../../../../assets/images/bookmark_icon.svg";
import starIcon from "../../../../assets/images/star_rating_icon.svg";
import {
  formatDate,
  selectPosterPath,
  getDate,
  checkDate,
} from "../../../../Helpers/Helper";
import dummyImg from "../../../../assets/images/recommendation_dummy_poster.svg";

// Import các component MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkMui from "@mui/material/Link";

function RecommandedCard({ item }) {
  return (
    <>
      {console.log("RecommandedMOvie Date", item)}
      <Box className="mini-card">
        <Box
          className={`image-content ${
            selectPosterPath(item.backdrop_path) === false && "border-div"
          }`}
        >
          <LinkMui
            component={Link}
            to={`/${item.media_type}/${item.id}`}
            className={!selectPosterPath(item.backdrop_path) && "dummy-poster"}
            underline="none"
          >
            <img
              src={
                selectPosterPath(item.backdrop_path)
                  ? `https://www.themoviedb.org/t/p/w250_and_h141_face${item?.backdrop_path}`
                  : dummyImg
              }
              alt="movie poster"
            />
          </LinkMui>
          <Box className="meta">
            <Box className="release-date">
              <img src={dateIcon} alt="date Icon" className="date-img" />
              <Typography component="span">
                {checkDate(item) !== "false" &&
                  getDate(new Date(item.release_date || item.first_air_date))}
              </Typography>
              <Box
                className={`action-img ${
                  item.release_date === "" ||
                  (item.first_air_date === "" && "ml")
                }`}
              >
                <img src={favIcon} alt="fav Icon" className="black-color" />
                <img
                  src={watchListIcon}
                  alt="Watch List Icon"
                  className="black-color"
                />
                <img
                  src={starIcon}
                  alt="star rating icon"
                  className="black-color"
                />
              </Box>
            </Box>
            <span></span>
          </Box>
        </Box>
        <Box className="info-div-recommand">
          <LinkMui
            component={Link}
            to={`/${item.media_type}/${item.id}`}
            className="name-href"
            underline="none"
          >
            <bdi title={item.title || item.original_name}>
              {item.title || item.original_name}
            </bdi>
          </LinkMui>
          <Typography className="vote-average" component="span">
            {item.vote_average.toFixed(1) * 10}%
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default RecommandedCard;
