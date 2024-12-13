import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDU0OTgwYWZmZjFjMGJhOWRjZTdlNjIwMmE5ZWNiZiIsIm5iZiI6MTczMzc1OTk5NS4yOTUsInN1YiI6IjY3NTcxM2ZiNDMxMTA4YWEyM2QxMzY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2tPfeIoWU9kJVuXZvb-89UGhwjNzgIFISXq4G4zEyc'
  }
};

export const getMoviesFromAPI = () => axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));