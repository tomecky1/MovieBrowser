import { useLocation, useSearchParams } from "react-router-dom";
import { useMovieSearch } from "../hooks/useMovieSearch";
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
import {
  ImageListBlank,
  ImageWrapper,
  StyledPersonLink,
  StyledPersonWrapper,
  WrapperActorName,
  WrapperItem,
} from "./styled";

import { Pagination } from "../../common/Pagination";
import Error from "../../common/Error";
import NotFound from "../../common/NotFound";

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
  const [movies, setMovies] = useState({ results: [], total_results: 0 });
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        setMovies({ results: [], total_results: 0 });
        setTotalPages(1);
        return;
      }
      try {
        const fetchedData = await getMoviesByQuery(query, currentPage);
        if (fetchedData) {
          setMovies(fetchedData);
          setTotalPages(Math.min(fetchedData.total_pages, 500));
        } else {
          setMovies({ results: [], total_results: 0 });
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError(true);
      }
    };
    fetchMovies();
  }, [query, currentPage]);

  const location = useLocation();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ query, page });
  };


  return (
    <FlexCont>
      {movies.total_results > 0 && (
        <Text>
          Search Results for "{query}"({movies.total_results})
        </Text>
      )}
      {movies.results.length > 0 ? (
        <>
          <StyledMovieDetailsTileList>
            {movies.results.map((movie) => (
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
                    <YearList>{movie.release_date?.split("-")[0]}</YearList>
                    <TagsList>
                      {movie.genres?.map((genre) => (
                        <TagList key={genre.id}>{genre.name}</TagList>
                      ))}
                    </TagsList>
                    <RateList>
                      <StyledStarIcon hidden={movie.vote_average === 0} />

                      <RateGradeList
                        style={{
                          paddingLeft: movie.vote_average === 0 ? "0" : "12px",
                        }}
                      >
                        {movie.vote_average
                          ? movie.vote_average.toFixed(1)
                          : ""}
                      </RateGradeList>
                      <RateVotesList
                        style={{
                          paddingLeft: movie.vote_average === 0 ? "0" : "12px",
                        }}
                      >
                        {movie.vote_count
                          ? `${movie.vote_count} ${
                              movie.vote_count === 1 ? "vote" : "votes"
                            }`
                          : "no votes yet"}
                      </RateVotesList>
                    </RateList>
                  </MovieDetailsList>
                </IconContainerList>
              </StyledLink>
            ))}
          </StyledMovieDetailsTileList>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <NotFound query={query} />
      )}
    </FlexCont>
  );
};
