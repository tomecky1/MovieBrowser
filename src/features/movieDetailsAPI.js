import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/550",
  params: {
    append_to_response: "images, configuration, credits",
    language: "en-US",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDU0OTgwYWZmZjFjMGJhOWRjZTdlNjIwMmE5ZWNiZiIsIm5iZiI6MTczMzc1OTk5NS4yOTUsInN1YiI6IjY3NTcxM2ZiNDMxMTA4YWEyM2QxMzY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2tPfeIoWU9kJVuXZvb-89UGhwjNzgIFISXq4G4zEyc",
  },
};

export const getMovieDetails = async () => {
  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};

export const getMovieOverview = async (movieId) => {
  if (!movieId) {
    console.error("movieId nie został dostarczony.");
    return null;
  }

  try {
    const response = await axios.request({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
    });
    return {
      overview: response.data.overview,
      title: response.data.title,
      date: response.data.release_date,
      votes: response.data.vote_count,
      vote_average: response.data.vote_average,
      poster: response.data.poster_path,
    };
  } catch (err) {
    console.error("Błąd podczas pobierania danych filmu:", err);
    return null;
  }
};

export const getMovieCredits = async (movieId) => {
  if (!movieId) {
    console.error("movieId nie został dostarczony.");
    return null;
  }

  try {
    const response = await axios.request({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    });
    return response.data.cast.map((actor) => ({
      name: actor.name,
      character: actor.character,
    }));
  } catch (err) {
    console.error("Błąd podczas pobierania danych obsady filmu:", err);
    return null;
  }
};
