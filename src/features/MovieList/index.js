import { useEffect, useState } from "react";
import {
  StyledMovieDetailsTileList,
  IconContainerList,
  MobileDetailsList,
  HeaderList,
  YearList,
  TagsList,
  TagList,
  RateList,
  StyledStarIcon,
  RateGradeList,
  RateVotesList,
  ImageList,
  FlexCont,
  Text,
  StyledLink,
} from "./styled";
import { Pagination } from "../../common/Pagination";

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


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedData = await getPopularMovies(currentPage);
        if (fetchedData) {
          setMovies(fetchedData);
          setTotalPages(fetchedData.total_pages);
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
        {movies.results.map((list) => (
          <StyledLink to={`/movie/${list.id}`} key={list.id}>
            <IconContainerList>
              <ImageList
                src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`}
                alt={`${list.title} poster`}
              />
              <MobileDetailsList>
                <HeaderList>{list.title}</HeaderList>
                <YearList>
                  {new Date(list.release_date).getFullYear()}
                </YearList>
                <TagsList>
                  {list.genres?.map((genre) => (
                    <TagList key={genre.id}>{genre.name}</TagList>
                  ))}
                </TagsList>
                <RateList>
                  <StyledStarIcon />
                  <RateGradeList>
                    {list.vote_average.toFixed(2)}
                  </RateGradeList>
                  <RateVotesList>{list.vote_count} votes</RateVotesList>
                </RateList>
              </MobileDetailsList>
            </IconContainerList>
          </StyledLink>
        ))}
      </StyledMovieDetailsTileList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </FlexCont>
  );
};
