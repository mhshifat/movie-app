import React, { useState } from "react";
import { Link } from "react-router-dom";
import { debounce, MovieDbAPI } from "../../services";

const HeaderSearch = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchString, setSearchString] = useState("");

  const handleMovieSearch = async (query: string) => {
    debounce(() => {
      MovieDbAPI.searchMovies(query)
        .then((res) => {
          setMovies(res.filter((_: any, ind: number) => ind < 7));
        })
        .catch((err) => console.log(err));
    }, 400)();
  };

  return (
    <div className="relative mt-3 md:mt-0">
      <input
        type="text"
        className="bg-gray-800 rounded-full w-64 px-4 py-1 pl-8 focus:outline-none focus:shadow-outline"
        placeholder="Search"
        onChange={(e) => {
          const query = e.target.value;
          setSearchString(query);
          setMovies([]);
          if (query.length > 2) {
            handleMovieSearch(query);
          } else {
            setMovies([]);
          }
        }}
      />
      <div className="absolute top-0">
        <svg
          className="fill-current w-4 text-gray-500 mt-2 ml-2"
          viewBox="0 0 24 24"
        >
          <path
            className="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      </div>

      <div className="z-50 absolute bg-gray-800 text-sm rounded w-64 mt-4">
        <ul>
          {!!movies.length &&
            !!searchString.length &&
            movies.map((movie) => (
              <li className="border-b border-gray-700" key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  className="block hover:bg-gray-700 px-3 py-3 flex items-center"
                >
                  <img
                    src={
                      movie?.poster_path
                        ? "https://image.tmdb.org/t/p/w92" + movie.poster_path
                        : "https://via.placeholder.com/50x75"
                    }
                    alt={movie.title}
                    className="w-8"
                  />
                  <span className="ml-4">{movie.title}</span>
                </Link>
              </li>
            ))}
        </ul>
        {!movies.length && !!searchString.length && (
          <div className="px-3 py-3">No results for "{searchString}"</div>
        )}
      </div>
    </div>
  );
};

export default HeaderSearch;
