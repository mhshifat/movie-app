import React, { useEffect, useState } from "react";
import { TVShowCard } from ".";
import { MovieDbAPI } from "../services";
import { getMovieGenresAsString } from "../services/methods";

const PopularShows = () => {
  const [shows, setShows] = useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const [shows, genres] = await Promise.all([
        MovieDbAPI.getPopularShows(controller),
        MovieDbAPI.getGenres(controller),
      ]);
      for (const show of shows) {
        const movieGenresAsString = await getMovieGenresAsString(
          show.genre_ids,
          genres
        );
        show.genresAsString = movieGenresAsString;
      }
      setShows(shows);
    })();
    return () => controller.abort();
  }, []);

  return (
    <div className="popular-shows mb-16">
      <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
        Popular TV Shows
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {shows.map((show) => (
          <TVShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default PopularShows;
