import {
  DetailInfo,
  DetailInfoElement,
  DetailInfoElementType,
  Details,
  FlexContainer,
  Header,
  IconContainer,
  Image,
  MovieDescription,
  Rate,
  RateElement,
  RateGrade,
  RateVotes,
  StyledMovieDetailsTile,
  StyledStarIcon,
  Year,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectStatus } from "../movieBrowserSlice";
import { useEffect, useState } from "react";
import { getMovieOverview } from "../movieDetailsAPI";
import { CastAndCrew } from "../CastAndCrew";
import MainHeader from "../../common/MainHeader";
import { useParams } from "react-router-dom";
import { GenresList } from "../../common/components/GenresList";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const [overview, setOverview] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [votes, setVotes] = useState(null);
  const [vote_average, setVote_average] = useState(null);
  const [poster, setPoster] = useState(null);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const fetchedData = await getMovieOverview(id);
        if (fetchedData) {
          setOverview(fetchedData.overview);
          setTitle(fetchedData.title);
          setDate(fetchedData.date);
          setVotes(fetchedData.votes);
          setVote_average(fetchedData.vote_average);
          setPoster(fetchedData.poster);
          setGenres(fetchedData.genres);
          setProductionCountries(
            fetchedData.production_countries
              ?.map((country) => country.name)
              .join(", ") || "Unknown origin country"
          );
        }
      } catch (error) {
        console.error("Error while downloading movie details: ", error);
        setError(true);
      }
    };
    fetchMovieDetails();
  }, [id]);
  const formatDateToPL = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  return (
    <>
      <MainHeader />
      <FlexContainer>
        <StyledMovieDetailsTile>
          <IconContainer>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${
                poster ? poster : "There is no poster"
              }`}
              alt="Movie poster"
            />
          </IconContainer>
          <Details>
            <Header>Movie Title: {title ? title : "Loading title..."}</Header>
            <Year></Year>
            <DetailInfo>
              <DetailInfoElement>
                <DetailInfoElementType>Production:&nbsp;</DetailInfoElementType>
                {productionCountries || "Unknown origin country"}
              </DetailInfoElement>
              <DetailInfoElement>
                <DetailInfoElementType>
                  Release date:&nbsp;
                </DetailInfoElementType>
                {date ? formatDateToPL(date) : "Release date unknown"}
              </DetailInfoElement>
            </DetailInfo>
            <GenresList genresIds={genres} />
            <Rate>
              <StyledStarIcon />
              <RateGrade>
                {vote_average !== null ? vote_average.toFixed(1) : "0.00"}
              </RateGrade>
              <RateElement>/ 10</RateElement>
              <RateVotes>{votes ? votes : "0.00"} votes</RateVotes>
            </Rate>
          </Details>
          <MovieDescription>
            {overview ? overview : "No movie description founded..."}
          </MovieDescription>
        </StyledMovieDetailsTile>
        <CastAndCrew movieId={id} />
      </FlexContainer>
    </>
  );
};

export default MovieDetails;
