import { fetchApi } from "../../methods";

const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

const endpoints = {
  popularMovies: "/movie/popular?api_key=" + apiKey,
  popularShows: "/tv/popular?api_key=" + apiKey,
  topRatedShows: "/tv/top_rated?api_key=" + apiKey,
  genres: "/genre/movie/list?api_key=" + apiKey,
  nowPlayingMovies: "/genre/movie/now_playing?api_key=" + apiKey,
  getActors(page: number) {
    return `/person/popular?api_key=${apiKey}&page=${page}`;
  },
  getActor(id: number) {
    return `/person/${id}?api_key=${apiKey}&append_to_response=credits`;
  },
  getActorSocialInfo(id: number) {
    return `/person/${id}/external_ids?api_key=${apiKey}`;
  },
  searchMovies(query: string) {
    return `/search/movie?api_key=${apiKey}&query=${query}`;
  },
  getMovie(id: number) {
    return `/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,images`;
  },
  getShow(id: number) {
    return `/tv/${id}?api_key=${apiKey}&append_to_response=credits,videos,images`;
  },
  getMovieCredits(id: number) {
    return `/movie/${id}/credits?api_key=${apiKey}`;
  },
};

const MovieDbAPI = {
  async getPopularMovies(controller?: AbortController) {
    const movies = await fetchApi(
      apiUrl + endpoints.popularMovies,
      "GET",
      undefined,
      controller?.signal
    );
    return movies.results;
  },
  async getPopularShows(controller?: AbortController) {
    const shows = await fetchApi(
      apiUrl + endpoints.popularShows,
      "GET",
      undefined,
      controller?.signal
    );
    return shows.results;
  },
  async getTopRatedShows(controller?: AbortController) {
    const shows = await fetchApi(
      apiUrl + endpoints.topRatedShows,
      "GET",
      undefined,
      controller?.signal
    );
    return shows.results;
  },
  async getNowPlayingMovies(controller?: AbortController) {
    const movies = await fetchApi(
      apiUrl + endpoints.popularMovies,
      "GET",
      undefined,
      controller?.signal
    );
    return movies.results;
  },
  async getGenres(controller?: AbortController) {
    const movies = await fetchApi(
      apiUrl + endpoints.genres,
      "GET",
      undefined,
      controller?.signal
    );
    return movies.genres;
  },
  async getActors(page: number) {
    const actors = await fetchApi(
      apiUrl + endpoints.getActors(page),
      "GET",
      undefined
    );
    return actors;
  },
  async getMovie(id: number, controller?: AbortController) {
    const movie = await fetchApi(
      apiUrl + endpoints.getMovie(id),
      "GET",
      undefined,
      controller?.signal
    );
    return movie;
  },
  async getShow(id: number, controller?: AbortController) {
    const show = await fetchApi(
      apiUrl + endpoints.getShow(id),
      "GET",
      undefined,
      controller?.signal
    );
    return show;
  },
  async getActor(id: number, controller?: AbortController) {
    const actor = await fetchApi(
      apiUrl + endpoints.getActor(id),
      "GET",
      undefined,
      controller?.signal
    );
    return actor;
  },
  async getActorSocialInfo(id: number, controller?: AbortController) {
    const socialInfo = await fetchApi(
      apiUrl + endpoints.getActorSocialInfo(id),
      "GET",
      undefined,
      controller?.signal
    );
    return socialInfo;
  },
  async getMovieCredits(id: number, controller?: AbortController) {
    const movieCredits = await fetchApi(
      apiUrl + endpoints.getMovieCredits(id),
      "GET",
      undefined,
      controller?.signal
    );
    return movieCredits;
  },
  async searchMovies(query: string) {
    const movies = await fetchApi(
      apiUrl + endpoints.searchMovies(query),
      "GET",
      undefined
    );
    return movies.results;
  },
};

export default MovieDbAPI;
