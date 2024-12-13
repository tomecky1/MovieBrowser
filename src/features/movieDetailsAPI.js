import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/550',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDU0OTgwYWZmZjFjMGJhOWRjZTdlNjIwMmE5ZWNiZiIsIm5iZiI6MTczMzc1OTk5NS4yOTUsInN1YiI6IjY3NTcxM2ZiNDMxMTA4YWEyM2QxMzY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2tPfeIoWU9kJVuXZvb-89UGhwjNzgIFISXq4G4zEyc'
  }
};

export const getMovieDetails = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;

  } catch (err) {
    console.error(err);
    throw err;
  }
};
// axios
//   .request(options)
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));