// Format date to "Mon DD, YYYY"
function dateFormater(date) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  if (day < 10) day = "0" + day;

  return `${month} ${day}, ${year}`;
}

// Decide movie poster based on availability and display mode
const generateMovieImage = (movie, addCard) => {
  if (movie?.poster_path && addCard) {
    return "https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path;
  } else if (movie?.poster_path) {
    return "https://image.tmdb.org/t/p/original" + movie.poster_path;
  } else {
    return "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  }
};

// Build URL for movie or TV show
const getURL = (movie) => {
  const type = movie.first_air_date ? "tv" : "movie";
  return `/${type}/${movie.id}`;
};

// Format date with two options: MM/DD/YYYY or "Mon DD, YYYY"
function formatDate(date, info) {
  if (info) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  } else {
    return dateFormater(date);
  }
}

// Format date to YYYY-MM-DD
const getDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Convert minutes to hours and minutes
const toHours = (minutes) => {
  const hour = Math.floor(minutes / 60);
  return hour === 0 ? `${minutes}m` : `${hour}h`;
};

// Generate genre name from genres array
const generateGenreName = (genres) => {
  let genreName = "";
  genres.forEach((genre) => {
    genreName += `, ${genre.name}`;
  });
  return genreName.replace(/^, /, ""); // remove leading comma
};

// Extract country code from various data sources
const findOriginCountry = (data) => {
  if (data?.production_countries?.[0]?.iso_3166_1) {
    return data.production_countries[0].iso_3166_1;
  } else if (data?.origin_country?.[0]) {
    return data.origin_country[0];
  } else if (data?.production_companies?.[0]?.origin_country) {
    return data.production_companies[0].origin_country;
  } else {
    return "false";
  }
};

// Get streaming provider logo
const getStreamingLogo = (providers) => {
  if (providers?.flatrate) return providers.flatrate[0].logo_path;
  if (providers?.buy) return providers.buy[0].logo_path;
  if (providers?.ads) return providers.ads[0].logo_path;
  if (providers?.free) return providers.free[0].logo_path;
  if (providers?.rent) return providers.rent[0].logo_path;
  return "";
};

// Get streaming provider name
const getStreamingChannelName = (providers) => {
  if (providers?.flatrate) return providers.flatrate[0].provider_name;
  if (providers?.buy) return providers.buy[0].provider_name;
  if (providers?.ads) return providers.ads[0].provider_name;
  if (providers?.free) return providers.free[0].provider_name;
  if (providers?.rent) return providers.rent[0].provider_name;
  return "";
};

// Get avatar path from full path
const getAvatarPath = (path) => {
  if (!path) return;
  const pathIndex = path.lastIndexOf("/");
  return path.substring(pathIndex);
};

// Return true if poster path is valid
const selectPosterPath = (path) => {
  return path !== null;
};

// Check if the movie has a valid release or first air date
const checkDate = (item) => {
  if (!item.first_air_date && !item.release_date) return "false";
  return item.first_air_date || item.release_date;
};

export {
  checkDate,
  getDate,
  selectPosterPath,
  dateFormater,
  generateMovieImage,
  getURL,
  formatDate,
  toHours,
  generateGenreName,
  findOriginCountry,
  getStreamingLogo,
  getStreamingChannelName,
  getAvatarPath
};
