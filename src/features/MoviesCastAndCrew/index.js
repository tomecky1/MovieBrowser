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
import { ImageListBlank } from "../SearchResults/styled";

export const MoviesCastAndCrew = ({ personId }) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

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
            <IconContainerList
              key={`${movie.id}-${movie.credit_id}`}
              onClick={() => handleMovieClick(movie.id)}
              style={{ cursor: "pointer" }}
            >
              {movie.poster_path ? (
                <ImageList
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <ImageListBlank />
              )}
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
                      : "0.00"}
                  </RateGradeList>
                  <RateVotesList>
                    {movie.vote_count ? movie.vote_count : "0.00"} votes
                  </RateVotesList>
                </RateList>
              </MovieDetailsList>
            </IconContainerList>
          ))
        ) : (
          <p>No movie cast available</p>
        )}
      </StyledMovieDetailsTileList>
      <Text>Movies - crew</Text>
      <StyledMovieDetailsTileList>
        {movieCredits.length > 0 ? (
          movieCredits.map((movie) => (
            <IconContainerList
              key={`${movie.id}-${movie.credit_id}`}
              onClick={() => handleMovieClick(movie.id)}
              style={{ cursor: "pointer" }}
            >
              {movie.poster_path ? (
                <ImageList
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <ImageListBlank />
              )}
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
                    {movie.vote_count ? movie.vote_count : "0"} votes
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
