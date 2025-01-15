import {
  DetailInfo,
  DetailInfoElement,
  DetailInfoElementType,
  Details,
  Header,
  IconContainer,
  Image,
  MovieDescription,
  FlexContainer,
  StyledMovieDetailsTile,
  Year,
  Rate,
  RateElement,
  RateGrade,
  RateVotes,
  StyledStarIcon,
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
  console.log(status);
  console.log(movies);
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
        console.log("Fetched Data:", fetchedData);
        if (fetchedData) {
          setOverview(fetchedData.overview);
          setTitle(fetchedData.title);
          setDate(fetchedData.date);
          setVotes(fetchedData.votes);
          setVote_average(fetchedData.vote_average);
          setPoster(fetchedData.poster);
          setGenres(fetchedData.genres);
          setProductionCountries(
            fetchedData.production_countries?.map((country) => country.name).join(", ") || "Unknown origin country"
          );
        }
      } catch (err) {
        console.error("Error while downloading movie details: ", err);
        setError(true);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <MainHeader />
      <FlexContainer>
        <StyledMovieDetailsTile>
          <IconContainer>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster ? poster : "There is no poster"
                }`}
              alt="Movie poster"
            />
          </IconContainer>
          <Details>
            <Header>
              Movie Title: {title ? title : "Loading title..."}
            </Header>
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
                {date ? date : "Release date unknown"}
              </DetailInfoElement>
            </DetailInfo>
            <GenresList genresIds={genres} />
            <Rate>
              <StyledStarIcon />
              <RateGrade>
                {vote_average !== null ? vote_average.toFixed(2) : "Loading the votes..."}
              </RateGrade>
              <RateElement>/ 10</RateElement>
              <RateVotes>{votes ? votes : "Number of votes..."} votes</RateVotes>
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
