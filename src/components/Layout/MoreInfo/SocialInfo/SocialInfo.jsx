import React, { useState, useEffect } from "react";
import { formatDate, getAvatarPath } from "../../../../Helpers/Helper";
import starIcon from "../../../../assets/images/star_rating_icon.svg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SocialInfo({ type, id, title }) {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async (url) => {
    try {
      const results = await fetch(url);
      const data = await results.json();
      setReviews(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchReviews(
      `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  return (
    <Box className="review-div">
      <Box className="menu">
        <Typography variant="h5" component="h3" className="title-heading">
          Social
        </Typography>
        <Typography variant="h5" component="h3" className="review-heading">
          Reviews <span>{reviews.length}</span>
        </Typography>
      </Box>
      {reviews.length > 0 ? (
        <Box className="content">
          <Box className="review-container">
            <Box className="card">
              <Box className="grouped">
                <Box className="avatar">
                  <img
                    src={`https://secure.gravatar.com/avatar${getAvatarPath(
                      reviews[0].author_details.avatar_path
                    )}?s=64`}
                    loading="lazy"
                    alt=""
                  />
                </Box>
                <Box className="info">
                  <Box className="rating-wrapper">
                    <Typography variant="h6" component="h3">
                      A review by{" "}
                      {reviews[0].author
                        ? reviews[0].author
                        : reviews[0]?.author_details.name}
                    </Typography>
                    <Box className="rounded-rating">
                      <img
                        src={starIcon}
                        alt="star rating icon"
                        style={{ filter: "invert(0)" }}
                      />
                      <span>{`${
                        reviews[0].author_details.rating
                          ? reviews[0].author_details.rating + ".0"
                          : 0
                      }`}</span>
                    </Box>
                  </Box>
                  <Typography variant="subtitle2" component="h5" className="h5">
                    Written by <span>{reviews[0].author}</span> on{" "}
                    {formatDate(
                      new Date(reviews[0].created_at.slice(0, 10)),
                      false
                    )}
                  </Typography>
                </Box>
              </Box>
              <Box className="teaser">
                <Typography className="spoiler-para" component="p">
                  {reviews[0].content.length > 600
                    ? `${reviews[0].content.substring(0, 600)}...`
                    : reviews[0].content}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* <p className="read-button">Read All Reviews</p> */}
        </Box>
      ) : (
        `We dont have any reviews for ${title}. Would you like to write one`
      )}
    </Box>
  );
}

export default SocialInfo;
