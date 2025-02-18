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

import { fetchMovies, selectMovies, selectStatus } from "../movieBrowserSlice";
import { useEffect, useState } from "react";
import { getMovieOverview } from "../movieDetailsAPI";
import { CastAndCrew } from "../CastAndCrew";
import MainHeader from "../../common/MainHeader";
import { useParams } from "react-router-dom";
import { GenresList } from "../../common/components/GenresList";
import Loading from "../../common/Loading";
import {useAppDispatch, useAppSelector} from "../../core/hooks";

const MovieDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const movies = useAppSelector(selectMovies);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const [isLoading, setIsLoading] = useState(true);
  const [overview, setOverview] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [votes, setVotes] = useState(null);
  const [vote_average, setVote_average] = useState<number | null>(null);
  const [poster, setPoster] = useState(null);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);

  interface CastAndCrewProps {
    movieId: number;
    personId: number;
    role: string;
    character: string;
    actorId: number;
    name: string;
    job: string;
    profilePath: string;
    posterPath: string;
    voteAverage: number;
    voteCount: number;
    releaseDate: string;
    overview: string;
    credit: string;
    credit_id: string;
    id: number;
  }

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
              ?.map((country: { name: string }) => country.name)
              .join(", ") || "Unknown origin country"
          );
        }
      } catch (error) {
        console.error("Error while downloading movie details: ", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);
  const formatDateToPL = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  if (isLoading) {
    return <Loading type={""} />;
  }

  // @ts-ignore
  return (
    <>
      <MainHeader children={undefined}/>
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
            <Header as="h1">Movie Title: {title ? title : "Loading title..."}</Header>
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
              <StyledStarIcon style={{ display: vote_average === 0 ? "none" : "inline" }} />
              <RateGrade
                style={{
                  paddingLeft: vote_average === 0 ? "0" : "12px",
                }}
              >
                {vote_average && vote_average > 0
                    ? vote_average.toFixed(1)
                    : ""}
              </RateGrade>
              <RateElement hidden={vote_average === 0}>/ 10</RateElement>
              <RateVotes
                style={{
                  paddingLeft: vote_average === 0 ? "0" : "12px",
                }}
              >
                {votes
                  ? `${votes} ${votes === 1 ? "vote" : "votes"}`
                  : "no votes yet"}
              </RateVotes>
            </Rate>
          </Details>
          <MovieDescription>
            {overview ? overview : "No movie description found..."}
          </MovieDescription>
        </StyledMovieDetailsTile>
        <CastAndCrew movieId={id!} personId={0} role={""} character={""} actorId={0} name={""} job={""} profilePath={""}
                     posterPath={""} voteAverage={0} voteCount={0} releaseDate={""} overview={""} credit={""}
                     credit_id={""}/>
      </FlexContainer>
    </>
  );
};

export default MovieDetails;
