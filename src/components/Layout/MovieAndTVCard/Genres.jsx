import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemButton } from "@mui/material";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [selectedGenresId, setSelectedGenresId] = useState([]);

  const fetchGenres = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenres(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=700a119d738aa19bfa6867998fafed10`
    );
  }, []);

  return (
    <div className="filter">
      <Typography variant="h6" component="h3" className="genres-heading">
        Genres
      </Typography>
      <List className="genres-nav" disablePadding>
        {console.log("array is ", selectedGenresId)}
        {genres.map((genre) => {
          const isSelected = selectedGenresId.includes(genre.id);
          return (
            <ListItem
              key={genre.id}
              disablePadding
              className={isSelected ? "active-genre" : ""}
              onClick={() => {
                if (!isSelected) {
                  setSelectedGenresId((prevState) => [...prevState, genre.id]);
                } else {
                  // Nếu muốn bỏ chọn khi click lại (optional)
                  setSelectedGenresId((prevState) =>
                    prevState.filter((id) => id !== genre.id)
                  );
                }
              }}
            >
              <ListItemButton>
                {genre.name}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default Genres;
