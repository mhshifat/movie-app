import React, { useEffect, useState } from "react";
import { MovieCard } from ".";
import { MovieDbAPI } from "../services";
import { getMovieGenresAsString } from "../services/methods";

const PopularMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const [movies, genres] = await Promise.all([
        MovieDbAPI.getPopularMovies(controller),
        MovieDbAPI.getGenres(controller),
      ]);
      for (const movie of movies) {
        const movieGenresAsString = await getMovieGenresAsString(
          movie.genre_ids,
          genres
        );
        movie.genresAsString = movieGenresAsString;
      }
      setMovies(movies);
    })();
    return () => controller.abort();
  }, []);

  return (
    <div className="popular-movies mb-16">
      <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
        Popular Movies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
