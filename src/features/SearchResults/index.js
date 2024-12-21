import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { ReactComponent as PictureIcon } from "../../icons/Picture.svg";

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MovieCard = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const MovieInfo = styled.div`
  padding: 16px;
`;

const MovieTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 8px;
  text-decoration: none;
`;

const MovieYear = styled.div`
  color: inherit;
`;

const ProfileIcon = styled(PictureIcon)`
  width: 176px;
  height: 231px;
  border-radius: 5px;
`;

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { searchResults } = useMovieSearch(query);

  return (
    <>
      <h1>Search Results for: {query}</h1>
      <ResultsGrid>
        {searchResults.data.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard>
              {movie.poster_path ? (
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <ProfileIcon />
              )}

              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieYear>{movie.release_date?.split("-")[0]}</MovieYear>
              </MovieInfo>
            </MovieCard>
          </Link>
        ))}
      </ResultsGrid>
    </>
  );
};
