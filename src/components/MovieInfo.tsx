import React, { useState } from "react";
import PlayTrailerModal from "./modals/PlayTrailerModal";

interface Props {
  movie: any;
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const [playTrailer, setPlayTrailer] = useState(false);

  return (
    <div className="movie-info border-b border-gray-400">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row ">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
          alt="parasite"
          className="w-96"
          style={{
            width: "24rem",
          }}
        />

        <div className="md:ml-24 ">
          <h2 className="text-4xl font-semibold">{movie?.title}</h2>
          <div className="flex flex-wrap items-center text-gray-400 text-sm">
            <svg
              className="fill-current text-orange-500 w-4"
              viewBox="0 0 24 24"
            >
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                />
              </g>
            </svg>
            <span className="ml-1">{movie?.vote_average * 10}%</span>
            <span className="mx-2">|</span>
            <span>{movie?.release_date}</span>
            <span className="mx-2">|</span>
            <span>{movie?.genresAsString}</span>
          </div>
          <p className="text-gray-300 mt-8">{movie?.overview}</p>

          <div className="mt-12">
            <h4 className="text-white font-semibold">Featured Cast</h4>
            <div className="flex mt-4">
              {movie?.credits?.crew
                .filter?.((_: any, ind: number) => ind < 2)
                ?.map?.((crew: any) => (
                  <div className="mr-8" key={crew.credit_id}>
                    <div>{crew?.name}</div>
                    <div className="text-sm text-gray-400">{crew?.job}</div>
                  </div>
                ))}
            </div>
          </div>

          {movie?.videos?.results?.length > 0 && (
            <div className="mt-12">
              <button className="flex inline-flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150">
                <svg className="w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="ml-2" onClick={() => setPlayTrailer(true)}>
                  Play Trailer
                </span>
              </button>
            </div>
          )}

          <PlayTrailerModal
            open={playTrailer}
            movie={movie}
            onClose={() => setPlayTrailer(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
