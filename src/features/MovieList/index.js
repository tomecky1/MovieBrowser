import { useEffect, useState } from "react";
import {
  StyledMovieDetailsTileList,
  IconContainerList,
  HeaderList,
  YearList,
  RateList,
  StyledStarIcon,
  RateGradeList,
  RateVotesList,
  ImageList,
  FlexCont,
  Text,
  StyledLink,
  MovieDetailsList,
} from "./styled";
import { Pagination } from "../../common/Pagination";
import { GenresList } from "../../common/components/GenresList";
import { useGenresList } from "../../common/components/GenresList/useGenresList";

const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";
export const getPopularMovies = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching popular movies: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};

export const MovieList = () => {
  const [movies, setMovies] = useState({ results: [] });
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { genres } = useGenresList();


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedData = await getPopularMovies(currentPage);
        if (fetchedData) {
          setMovies(fetchedData);
          setTotalPages(Math.min(fetchedData.total_pages, 500));
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(true);
      }
    };
    fetchMovies();
  }, [currentPage]);

  return (
    <FlexCont>
      <Text>Popular movies</Text>
      <StyledMovieDetailsTileList>
        {movies.results.length > 0 ? (
          movies.results.map((list) => (
            <StyledLink to={`/movie/${list.id}`} key={list.id}>
              <IconContainerList>
                <ImageList
                  src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`}
                  alt={`${list.title} poster`}
                />
                <MovieDetailsList>
                  <HeaderList>{list.title}</HeaderList>
                  <YearList>
                    {new Date(list.release_date).getFullYear()}
                  </YearList>
                  <GenresList genresIds={list.genre_ids} />
                  <RateList>
                    <StyledStarIcon />
                    <RateGradeList>
                      {list.vote_average.toFixed(2)}
                    </RateGradeList>
                    <RateVotesList>{list.vote_count} votes</RateVotesList>
                  </RateList>
                </MovieDetailsList>
              </IconContainerList>
            </StyledLink>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </StyledMovieDetailsTileList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </FlexCont>
  );
};
