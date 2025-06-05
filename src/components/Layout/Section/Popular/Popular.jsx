import React, { useState, useRef } from "react";
import Movie from "../Trending/Movie/Movie";
import { useGlobalContext } from "../../../../context";

function Popular() {
  const [popularOnTV, setPopularOnTV] = useState(true);
  const [popularOnTheater, setPopularOnTheater] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const scrollDiv = useRef(null);

  const { popularMovies, getPopularByOnTv, getPopularByTheater } =
    useGlobalContext();

  // Xử lý scroll để thay đổi class hiệu ứng fade
  const handleScroll = () => {
    const scrollLeft = scrollDiv.current?.scrollLeft || 0;
    setIsScroll(scrollLeft > 50);
  };

  // Chuyển trạng thái sang On TV
  const handleOnTVClick = (e) => {
    e.preventDefault();
    setPopularOnTV(true);
    setPopularOnTheater(false);
    getPopularByOnTv();
  };

  // Chuyển trạng thái sang In Theaters
  const handleOnTheaterClick = (e) => {
    e.preventDefault();
    setPopularOnTV(false);
    setPopularOnTheater(true);
    getPopularByTheater();
  };

  return (
    <div className="popular-div">
      <div className="popular-title-div">
        <h2>What's Popular</h2>
        <div className="popular-selector">
          <h3 className={popularOnTV ? "active-popular" : ""}>
            <a
              href="#"
              className={popularOnTV ? "active-link" : ""}
              onClick={handleOnTVClick}
            >
              On TV
            </a>
          </h3>
          <h3 className={popularOnTheater ? "active-popular" : ""}>
            <a
              href="#"
              className={popularOnTheater ? "active-link" : ""}
              onClick={handleOnTheaterClick}
            >
              In Theaters
            </a>
          </h3>
        </div>
      </div>

      <div
        className={`trending-movies-container should-fade ${
          isScroll ? "is-not-fading" : "is-fading"
        }`}
      >
        <div
          ref={scrollDiv}
          className="trending-movie"
          onScroll={handleScroll}
        >
          {popularMovies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
