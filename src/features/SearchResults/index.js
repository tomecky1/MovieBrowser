import {useSearchParams} from "react-router-dom";
import {useMovieSearch} from "../hooks/useMovieSearch";
import {useEffect, useState} from "react";
import {
  FlexCont,
  HeaderList,
  IconContainerList,
  ImageList,
  MovieDetailsList,
  RateGradeList,
  RateList,
  RateVotesList,
  StyledLink,
  StyledMovieDetailsTileList,
  StyledStarIcon,
  TagList,
  TagsList,
  Text,
  YearList,
} from "../MovieList/styled";
import {ImageListBlank} from "./styled";

const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";
export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error(`Error fetching popular movies: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    return null;
  }
};

export const SearchResults = () => {
   const [movies, setMovies] = useState({ results: [] });
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchMovies = async () => {
        const fetchedData = await getPopularMovies();
        if (fetchedData) {
          setMovies(fetchedData);
        } else {
          setError(true);
        }
      };
      fetchMovies();
    }, []);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { searchResults } = useMovieSearch(query);

  return (
    <FlexCont>
    <Text>Search Results for: {query}</Text>
    <StyledMovieDetailsTileList>
    {searchResults.data.map((movie) => (
    <StyledLink to={`/movie/${movie.id}`} key={movie.id}>
      <IconContainerList>
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
              <YearList>
              {movie.release_date?.split("-")[0]}
              </YearList>
              <TagsList>
                {movie.genres?.map((genre) => (
                  <TagList key={genre.id}>{genre.name}</TagList>
                ))}
              </TagsList>
              <RateList>
                <StyledStarIcon />
                <RateGradeList>
                  {movie.vote_average.toFixed(2)}
                </RateGradeList>
                <RateVotesList>{movie.vote_count} votes</RateVotesList>
              </RateList>
            </MovieDetailsList>
          </IconContainerList>
        </StyledLink>
      ))}
    </StyledMovieDetailsTileList>
  </FlexCont>
  );
};