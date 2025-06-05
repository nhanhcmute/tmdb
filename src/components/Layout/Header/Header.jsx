import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import logo from "../../../assets/images/logo.svg";
import addIcon from "../../../assets/images/add_icon.svg";
import searchIcon from "../../../assets/images/search_icon.svg";

function Header() {
  return (
    <Box component="header" className="header">
      <Box className="left-navbar">
        <Link component={RouterLink} to="/" className="logo" underline="none">
          <Box
            component="img"
            src={logo}
            alt="TMDB Logo"
            sx={{ width: "154px", height: "20px", display: "block" }}
          />
        </Link>
        <Box component="ul" className="navbar" sx={{ display: "flex", p: 0, m: 0, listStyle: "none" }}>
          <Box component="li" className="dropdown-movies" sx={{ mr: "14px", position: "relative" }}>
            <Link href="#" underline="none" sx={{ p: "0.5rem", cursor: "pointer", fontWeight: 600 }} >
              Movies
            </Link>
            <Box className="dropdown-menu">
              <Link component={RouterLink} to="/movie" className="nav-a" underline="none">
                Popular
              </Link>
              <Link component={RouterLink} to="/movie/now-playing" className="nav-a" underline="none">
                Now Playing
              </Link>
              <Link component={RouterLink} to="movie/upcoming" className="nav-a" underline="none">
                Upcoming
              </Link>
              <Link component={RouterLink} to="movie/top-rated" className="nav-a" underline="none">
                Top Rated
              </Link>
            </Box>
          </Box>
          <Box component="li" className="dropdown-tvshow" sx={{ mr: "14px", position: "relative" }}>
            <Link href="#" underline="none" sx={{ p: "0.5rem", cursor: "pointer", fontWeight: 600 }}>
              TV Shows
            </Link>
            <Box className="dropdown-menu-tv">
              <Link component={RouterLink} to="/tv" className="nav-a" underline="none">
                Popular
              </Link>
              <Link component={RouterLink} to="/tv/airing-today" className="nav-a" underline="none">
                Airing Today
              </Link>
              <Link component={RouterLink} to="/tv/on-tv" className="nav-a" underline="none">
                On TV
              </Link>
              <Link component={RouterLink} to="/tv/top-rated" className="nav-a" underline="none">
                Top Rated
              </Link>
            </Box>
          </Box>
          <Box component="li" sx={{ mr: "14px" }}>
            <Link href="#" underline="none" sx={{ p: "0.5rem", cursor: "pointer", fontWeight: 600 }}>
              People
            </Link>
          </Box>
          <Box component="li">
            <Link href="#" underline="none" sx={{ p: "0.5rem", cursor: "pointer", fontWeight: 600 }}>
              More
            </Link>
          </Box>
        </Box>
      </Box>

      <Box className="right-navbar">
        <Box component="ul" sx={{ display: "flex", alignItems: "center", p: 0, m: 0, listStyle: "none" }}>
          <Box component="li" className="add-Icon" sx={{ ml: 0 }}>
            <Link href="#" underline="none">
              <Box
                component="img"
                src={addIcon}
                alt="Add Icon"
                sx={{ display: "block", width: "23px", height: "23px" }}
              />
            </Link>
          </Box>
          <Box component="li" sx={{ ml: "30px" }}>
            <Box
              className="translate-lan"
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "28px",
                height: "26px",
                border: "1px solid #fff",
                borderRadius: "3px",
                p: "3px 5px",
                color: "inherit",
                fontSize: "0.9em",
                userSelect: "none",
                "&:hover": {
                  bgcolor: "secondary.main",
                  color: "primary.main",
                },
              }}
            >
              EN
            </Box>
          </Box>
          <Box component="li" sx={{ ml: "30px" }}>
            <Link href="#" underline="none" sx={{ fontWeight: 600 }}>
              Login
            </Link>
          </Box>
          <Box component="li" sx={{ ml: "30px" }}>
            <Link href="#" underline="none" sx={{ fontWeight: 600 }}>
              Join TMDB
            </Link>
          </Box>
          <Box component="li" sx={{ ml: "30px" }}>
            <Link href="#" underline="none">
              <Box
                component="img"
                src={searchIcon}
                alt="Search Icon"
                className="search-icon"
                sx={{ display: "block", width: "29px", height: "29px" }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
