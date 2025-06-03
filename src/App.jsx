import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Section from "./components/Layout/Section/Section";
import PopularMovie from "./components/Layout/MovieAndTVCard/PopularMovie";
import InfoCard from "./components/Layout/MoreInfo/InfoCard";

const POPULARMOVIEAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=700a119d738aa19bfa6867998fafed10";
const NOWPLAYINGAPI =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=700a119d738aa19bfa6867998fafed10";
const UPCOMINGMOVIEAPI =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=700a119d738aa19bfa6867998fafed10";
const TOPRATEDMOVIEAPI =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=700a119d738aa19bfa6867998fafed10";

const POPULARTVAPI =
  "https://api.themoviedb.org/3/tv/popular?api_key=700a119d738aa19bfa6867998fafed10";
const AIRINGTODAYTVAPI =
  "https://api.themoviedb.org/3/tv/airing_today?api_key=700a119d738aa19bfa6867998fafed10";
const ONTVMOVIEAPI =
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=700a119d738aa19bfa6867998fafed10";
const TOPRATEDTVAPI =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=700a119d738aa19bfa6867998fafed10";

function App() {
  return (
    <>
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Section />} />
        {/* Movies */}
        <Route path="/movie" element={<PopularMovie API={POPULARMOVIEAPI} />} />
        <Route path="/movie/now-playing" element={<PopularMovie API={NOWPLAYINGAPI} />} />
        <Route path="/movie/upcoming" element={<PopularMovie API={UPCOMINGMOVIEAPI} />} />
        <Route path="/movie/top-rated" element={<PopularMovie API={TOPRATEDMOVIEAPI} />} />
        {/* TV Shows */}
        <Route path="/tv" element={<PopularMovie API={POPULARTVAPI} />} />
        <Route path="/tv/airing-today" element={<PopularMovie API={AIRINGTODAYTVAPI} />} />
        <Route path="/tv/on-tv" element={<PopularMovie API={ONTVMOVIEAPI} />} />
        <Route path="/tv/top-rated" element={<PopularMovie API={TOPRATEDTVAPI} />} />
        {/* Show more info */}
        <Route path="/:type/:id" element={<InfoCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
