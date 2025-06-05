import React, { useEffect, useState } from "react";
import CircularProgressBar from "../Section/Trending/Movie/CircularProgressBar/CircularProgressBar";
import CastInfo from "./CastInfo/CastInfo";
import {
  formatDate,
  toHours,
  generateGenreName,
  findOriginCountry,
  getStreamingLogo,
  getStreamingChannelName,
} from "../../../Helpers/Helper";
import { useParams } from "react-router-dom";
import playIcon from "../../../assets/images/play_icon.svg";
import thumbnailIcon from "../../../assets/images/thumbnail_icon.svg";
import favouriteIcon from "../../../assets/images/favourite_icon.svg";
import bookmarkIcon from "../../../assets/images/bookmark_icon.svg";
import starIcon from "../../../assets/images/star_rating_icon.svg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const initialState = {
  posterPath: "",
  title: "",
  releasedDate: "",
  backdrop: "",
  genres: [],
  runTime: "",
  country: "",
  tagLine: "",
  overView: "",
  voteAvg: "",
  videoKey: "",
  providers: {},
  providerChannelLogoPath: "",
  providerStreamingChannel: "",
};

function InfoCard() {
  const [cardInfo, setCardInfo] = useState(initialState);
  const { type, id } = useParams();

  const fetchInfo = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status_code !== 34) {
        setCardInfo((prevState) => ({
          ...prevState,
          posterPath: data.poster_path,
          backdrop: data.backdrop_path,
          title: data.original_title ? data.original_title : data.name,
          year: data.release_date
            ? data.release_date.substring(0, 4)
            : data?.last_air_date?.substring(0, 4),
          releasedDate: data.release_date ? data.release_date : data?.last_air_date,
          genres: data.genres,
          runTime: data.runtime ? toHours(data.runtime) : toHours(data.episode_run_time),
          country: findOriginCountry(data),
          tagLine: data?.tagline,
          overView: data?.overview,
          voteAvg: data?.vote_average,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCardInfo((prev) => ({
        ...prev,
        videoKey: data?.results[0] === null ? null : data?.results[0]?.key,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProviders = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCardInfo((prev) => ({
        ...prev,
        providers: data?.results?.IN ? data.results.IN : null,
        providerChannelLogoPath: getStreamingLogo(data?.results?.IN),
        providerStreamingChannel: getStreamingChannelName(data?.results?.IN),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=700a119d738aa19bfa6867998fafed10`
    );
    fetchVideo(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=700a119d738aa19bfa6867998fafed10`
    );
    fetchProviders(
      `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, [type, id]);

  return (
    <>
      <Box
        className="backdrop-div"
        sx={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${cardInfo.backdrop})`,
        }}
      >
        <Box className="more-info-poster-div">
          <Box className="container mt-0">
            <Box className="more-info-wrapper">
              <Box component="section" className="poster-content">
                <Box className="poster-wrapper">
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${cardInfo.posterPath}`}
                    alt="poster"
                  />
                  {cardInfo.providers && (
                    <Box className="ott-offer">
                      <Box className="text-wrapper">
                        <Box className="button">
                          <Box className="provider">
                            {cardInfo.providerChannelLogoPath !== "" ? (
                              <img
                                src={`https://image.tmdb.org/t/p/original${cardInfo.providerChannelLogoPath}`}
                                alt="provider channel"
                              />
                            ) : (
                              cardInfo.providerStreamingChannel
                            )}
                          </Box>
                          <Box className="text">
                            <Typography variant="h6" component="h4">
                              Now Streaming
                            </Typography>
                            <Typography variant="h5" component="h3">
                              Watch Now
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box className="content-wrappers">
                  <Box className="header-content">
                    <Box className="title-info">
                      <Typography variant="h4" component="h2">
                        {cardInfo.title}
                        <span>{` (${cardInfo.year})`}</span>
                      </Typography>
                      <Box className="facts">
                        <span className="release">
                          {`${formatDate(new Date(cardInfo.releasedDate), true)}(${cardInfo.country})`}
                        </span>
                        <span className="genres before">{generateGenreName(cardInfo.genres)}</span>
                        {cardInfo.runTime !== "m" && (
                          <span className="runtime before">{cardInfo.runTime}</span>
                        )}
                      </Box>
                    </Box>
                    <Box className="score-info">
                      <CircularProgressBar movieVote={cardInfo.voteAvg} scale="true" />
                      <Box className="user-score">
                        User <br /> Score
                      </Box>
                      {/* buttons */}
                      <Box className="add-to-list-btn action-btns">
                        <img src={thumbnailIcon} alt="thumbnail icon" />
                      </Box>
                      <Box className="fav-btn action-btns">
                        <img src={favouriteIcon} alt="favourite icon" />
                      </Box>
                      <Box className="bookmark-btn action-btns">
                        <img src={bookmarkIcon} alt="bookmark icon" />
                      </Box>
                      <Box className="star-btn action-btns">
                        <img src={starIcon} alt="star icon" />
                      </Box>
                      {/* video play button */}
                      {cardInfo.videoKey && (
                        <Box className="play-div">
                          <a href={`https://www.youtube.com/watch?v=${cardInfo.videoKey}`}>
                            <img src={playIcon} alt="play trailer" />
                            <span>Play Trailer</span>
                          </a>
                        </Box>
                      )}
                    </Box>
                    <Box className="overview-info">
                      {cardInfo.tagLine && (
                        <Typography variant="h6" className="tagline" component="h3">
                          {cardInfo.tagLine}
                        </Typography>
                      )}
                      <Typography variant="h5" className="overview" component="h3">
                        Overview
                      </Typography>
                      <Typography component="p">{cardInfo.overView}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Cast Section */}
      <Box className="container remove-mt">
        <Box className="div-content-wrapper">
          <CastInfo title={cardInfo.title} type={type} id={id} />
        </Box>
      </Box>
    </>
  );
}

export default InfoCard;
