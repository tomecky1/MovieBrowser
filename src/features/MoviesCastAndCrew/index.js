import { useState, useEffect } from "react";
import { getPersonMovieCredits } from "../useApiKey";
import {
  Text,
  StyledMovieDetailsTileList,
  IconContainerList,
  ImageList,
  MobileDetailsList,
  HeaderList,
  TagsList,
  TagList,
  RateList,
  StyledStarIcon,
  RateGradeList,
  RateVotesList,
} from "../MovieList/styled";
import { MovieRole } from "./styled";

export const MoviesCastAndCrew = ({ personId }) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getPersonMovieCredits(personId);
        if (credits && credits.cast) {
          setMovieCredits(credits.cast);
        }
      } catch (error) {
        console.error("Błąd podczas pobierania filmografii:", error);
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
            <IconContainerList key={`${movie.id}-${movie.credit_id}`}>
              <ImageList
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "ścieżka/do/placeholder/image"
                }
                alt={`${movie.title} poster`}
              ></ImageList>
              <MobileDetailsList>
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
                      : "Ładuję ocenę filmu"}
                  </RateGradeList>
                  <RateVotesList>
                    {movie.vote_count ? movie.vote_count : "Liczba głosów"}{" "}
                    votes
                  </RateVotesList>
                </RateList>
              </MobileDetailsList>
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
            <IconContainerList key={`${movie.id}-${movie.credit_id}`}>
              <ImageList
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "ścieżka/do/placeholder/image"
                }
                alt={`${movie.title} poster`}
              ></ImageList>
              <MobileDetailsList>
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
                      : "Ładuję ocenę filmu"}
                  </RateGradeList>
                  <RateVotesList>
                    {movie.vote_count ? movie.vote_count : "Liczba głosów"}{" "}
                    votes
                  </RateVotesList>
                </RateList>
              </MobileDetailsList>
            </IconContainerList>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledMovieDetailsTileList>
    </>
  );
};
