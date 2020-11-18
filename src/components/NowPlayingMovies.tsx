import React, { useEffect, useState } from "react";
import { MovieDbAPI } from "../services";
import { getMovieGenresAsString } from "../services/methods";
import MovieCard from "./cards/MovieCard";

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const [movies, genres] = await Promise.all([
        MovieDbAPI.getNowPlayingMovies(controller),
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
    <div className="now-playing mb-16">
      <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
        Now Playing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlayingMovies;
