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
import {useEffect} from "react";

const MovieDetails = () => {


  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  console.log(status);
  if (status === 'error') {
    return <p>Failed to load movies. Please try again later.</p>;
  }
  if (!Array.isArray(movies)) {
    console.error('Movies should be an array:', movies);
    return null;
  }
  return (
    <ContainerExtra>
      <StyledMovieDetailsTile>
        <IconContainer>
          <Image src={movieDetailsImage} alt="Movie poster"/>
        </IconContainer>
        <Details>
          <Header>Movie Title: </Header>

          <div>
            {movies.map(movie => (
              <div key={movie.id}>{movie.title}</div>
            ))}
          </div>
          

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </MovieDescription>
      </StyledMovieDetailsTile>

      {/*<Content status={repositoriesStatus} repositories={repositories}/>*/}
    </ContainerExtra>
  );
};

export default MovieDetails;