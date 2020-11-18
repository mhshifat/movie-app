import React from "react";
import { PopularShows, TopRatedShows } from "../components";

const Shows = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PopularShows />
      <TopRatedShows />
    </div>
  );
};

export default Shows;
