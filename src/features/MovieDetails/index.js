import {
  DetailInfo,
  DetailInfoElement,
  DetailInfoElementType,
  Details,
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
  Tag,
  Tags,
  Year,
} from "./styled";
import movieDetailsImage from "./movieDetails.jpg";
import {ContainerExtra} from "../../common/Container";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectMovies, selectStatus} from "../movieBrowserSlice";
import {useEffect, useState} from "react";
import {getMovieOverview} from "../movieDetailsAPI";

const MovieDetails = () => {


  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  console.log(status);
  console.log(movies);
  const [overview, setOverview] = useState(null); // dodaj stan na dane przeglądu
  const [error, setError] = useState(false); // dodaj stan na błąd

  const movieId = 550; // może być przekazany jako parametr jeśli komponent ma dynamiczne ID

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const fetchedOverview = await getMovieOverview(movieId);
        if (fetchedOverview) {
          setOverview(fetchedOverview);
        }
      } catch (err) {
        console.error("Błąd podczas pobierania przeglądu filmu:", err);
        setError(true); // ustaw stan błędu
      }
    };

    fetchOverview();
  }, [movieId]);

  if (error) {
    return <p>Wystąpił błąd podczas ładowania przeglądu filmu. Spróbuj ponownie później.</p>;
  }

  return (
    <ContainerExtra>
      <StyledMovieDetailsTile>
        <IconContainer>
          <Image src={movieDetailsImage} alt="Movie poster"/>
        </IconContainer>
        <Details>
          <Header>Movie Title: </Header>


          <Year></Year>
          <DetailInfo>
            <DetailInfoElement>
              <DetailInfoElementType>Production:&nbsp;</DetailInfoElementType>
              USA
            </DetailInfoElement>
            <DetailInfoElement>
              <DetailInfoElementType>Release date:&nbsp;</DetailInfoElementType>
              14.06.2020
            </DetailInfoElement>
          </DetailInfo>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Drama</Tag>
          </Tags>
          <Rate>
            <StyledStarIcon/>
            <RateGrade>8</RateGrade>
            <RateElement>/ 10</RateElement>
            <RateVotes>335 votes</RateVotes>
          </Rate>
        </Details>
        <MovieDescription>
          {overview ? overview : "Ładowanie przeglądu..."}
        </MovieDescription>
      </StyledMovieDetailsTile>

      {/*<Content status={moviesStatus} repositories={repositories}/>*/}
    </ContainerExtra>
  );
};

export default MovieDetails;