import React from "react";
import { NowPlayingMovies, PopularMovies } from "../components";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PopularMovies />
      <NowPlayingMovies />
    </div>
  );
};

export default Home;
