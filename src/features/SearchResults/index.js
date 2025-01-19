import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { ImageListBlank } from "./styled";
import { Pagination } from "../../common/Pagination";

const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";

export const getMoviesByQuery = async (query, page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching movies by query: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return null;
  }
};

export const SearchResults = () => {
  const [movies, setMovies] = useState({ results: [] });
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        setMovies({ results: [] });
        setTotalPages(1);
        return;
      }

      try {
        const fetchedData = await getMoviesByQuery(query, currentPage);
        if (fetchedData) {
          setMovies(fetchedData);
          setTotalPages(Math.min(fetchedData.total_pages, 500)); // Limit to max 500 pages
        } else {
          setMovies({ results: [] });
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError(true);
      }
    };
    fetchMovies();
  }, [query, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ query, page });
  };

  return (
    <FlexCont>
      <Text>Search Results for: {query}</Text>
      <StyledMovieDetailsTileList>
        {movies.results.length > 0 ? (
          movies.results.map((movie) => (
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
          ))
        ) : (
          <p>No results found</p>
        )}
      </StyledMovieDetailsTileList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </FlexCont>
  );
};