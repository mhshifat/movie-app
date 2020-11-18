import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieCast, MovieImages, MovieInfo } from "../components";
import { MovieDbAPI } from "../services";

const MovieDetails = () => {
  const [movie, setMovie] = useState<any>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const [movie] = await Promise.all([
        MovieDbAPI.getMovie(+params.id, controller),
      ]);
      movie.genresAsString = movie.genres
        .map((movie: any) => movie.name)
        .join(", ");
      setMovie(movie);
    })();
    return () => controller.abort();
  }, [params.id]);

  return movie ? (
    <Fragment>
      <MovieInfo movie={movie} />
      <MovieCast movie={movie} />
      <MovieImages movie={movie} />
    </Fragment>
  ) : null;
};

export default MovieDetails;
