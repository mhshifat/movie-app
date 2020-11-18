export const fetchApi = (
  url: string,
  method: "GET" | "POST",
  token?: string,
  signal?: AbortController["signal"]
) => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { authorization: token } : {}),
    },
    signal,
  }).then((res) => res.json());
};

export const getMovieGenresAsString = async (
  genreIds: number[],
  movieGenres: { id: number; name: string }[]
): Promise<string> => {
  let genresAsString = "";

  for (const id of genreIds) {
    const correspondingGenreName = movieGenres.find((genre) => genre.id === +id)
      ?.name;
    if (correspondingGenreName) {
      genresAsString += correspondingGenreName + ", ";
    }
  }

  return genresAsString.trim().substr(0, genresAsString.length - 2);
};

export const debounce = (callback: any, delay: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};
