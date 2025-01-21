import {
  AdditionalInfo,
  Image,
  MobileWrapper,
  MovieName,
  MovieRating,
  MovieVotes,
  RatingContainer,
  RatingOutOf,
  StyledHeader,
  StyledStar,
} from "./styled.js";
import { useEffect, useState } from "react";
import { getMovieOverview } from "../../features/movieDetailsAPI";
import { useParams } from "react-router-dom";

const MainHeader = ({ children }) => {
  const { id } = useParams();
  const [title, setTitle] = useState(null);
  const [backdrop, setBackdrop] = useState(null);
  const [votes, setVotes] = useState(null);
  const [vote_average, setVote_average] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const fetchedData = await getMovieOverview(id);
        if (fetchedData) {
          setTitle(fetchedData.title);
          setBackdrop(fetchedData.backdrop);
          setVotes(fetchedData.votes);
          setVote_average(fetchedData.vote_average);
        }
      } catch (err) {
        console.error("Błąd podczas pobierania szczegółów filmu:", err);
        setError(true);
      }
    };

    fetchMovieDetails();
  }, [id]);
  return (
    <StyledHeader>
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          backdrop ? backdrop : "no backdrop"
        }`}
        alt="Movie backdrop"
      />
      {children}
      <AdditionalInfo>
        <MovieName>{title ? title : "Loading movie title..."}</MovieName>
        <MobileWrapper>
          <RatingContainer>
            <StyledStar />
            <MovieRating>
              {vote_average ? vote_average.toFixed(1) : "Loading average votes"}
            </MovieRating>
            <RatingOutOf>/ 10</RatingOutOf>
          </RatingContainer>
          <MovieVotes>{votes ? votes : "Liczba głosów"} votes</MovieVotes>
        </MobileWrapper>
      </AdditionalInfo>
    </StyledHeader>
  );
};

export default MainHeader;
