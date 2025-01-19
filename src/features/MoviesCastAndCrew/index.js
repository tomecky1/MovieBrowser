import { useEffect, useState } from "react";
import { getPersonMovieCredits } from "../useApiKey";
import {
  HeaderList,
  IconContainerList,
  ImageList,
  MovieDetailsList,
  RateGradeList,
  RateList,
  RateVotesList,
  StyledMovieDetailsTileList,
  StyledStarIcon,
  TagList,
  TagsList,
  Text,
} from "../MovieList/styled";
import { MovieRole } from "./styled";
import { useNavigate } from "react-router-dom";

export const MoviesCastAndCrew = ({ personId }) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const navigate = useNavigate()
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  }

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getPersonMovieCredits(personId);
        if (credits && credits.cast) {
          setMovieCredits(credits.cast);
        }
      } catch (error) {
        console.error("An error occurred during loading filmography:", error);
      }
    };
    fetchMovieCredits();
  }, [personId]);

  return (
    <>
      <Text>Movies - cast</Text>
      <StyledMovieDetailsTileList>
        {movieCredits.length > 0 ? (
          movieCredits.map((movie) => (
            <IconContainerList key={`${movie.id}-${movie.credit_id}`} onClick={() => handleMovieClick(movie.id)} style={{ cursor: "pointer" }}>
              <ImageList
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "ścieżka/do/placeholder/image"
                }
                alt={`${movie.title} poster`}
              ></ImageList>
              <MovieDetailsList>
                <HeaderList>{movie.title}</HeaderList>
                <MovieRole>{movie.character}</MovieRole>
                <TagsList>
                  <TagList>Action</TagList>
                </TagsList>
                <RateList>
                  <StyledStarIcon />
                  <RateGradeList>
                    {movie.vote_average
                      ? movie.vote_average.toFixed(2)
                      : "Loading movie score"}
                  </RateGradeList>
                  <RateVotesList>
                    {movie.vote_count ? movie.vote_count : "Number of votes"}{" "}
                    votes
                  </RateVotesList>
                </RateList>
              </MovieDetailsList>
            </IconContainerList>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledMovieDetailsTileList>
      <Text>Movies - crew</Text>
      <StyledMovieDetailsTileList>
        {movieCredits.length > 0 ? (
          movieCredits.map((movie) => (
            <IconContainerList key={`${movie.id}-${movie.credit_id}`} onClick={() => handleMovieClick(movie.id)} style={{ cursor: "pointer" }}>
              <ImageList
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "ścieżka/do/placeholder/image"
                }
                alt={`${movie.title} poster`}
              ></ImageList>
              <MovieDetailsList>
                <HeaderList>{movie.title}</HeaderList>
                <MovieRole>{movie.character}</MovieRole>
                <TagsList>
                  <TagList>Action</TagList>
                </TagsList>
                <RateList>
                  <StyledStarIcon />
                  <RateGradeList>
                    {movie.vote_average
                      ? movie.vote_average.toFixed(2)
                      : "Loading movie score"}
                  </RateGradeList>
                  <RateVotesList>
                    {movie.vote_count ? movie.vote_count : "Number of votes"}{" "}
                    votes
                  </RateVotesList>
                </RateList>
              </MovieDetailsList>
            </IconContainerList>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledMovieDetailsTileList>
    </>
  );
};