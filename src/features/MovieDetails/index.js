import {
  StyledMovieDetailsTile,
  IconContainer,
  Image,
  Details,
  Header,
  Year,
  DetailContainer,
  DetailInfo,
  Label,
  MovieDescription,
  StarIcon,
  ContainerExtra,
} from "./styled";
import movieDetailsImage from "./movieDetails.jpg";
import starIcon from "../../icons/star.svg";

export const MovieDetails = () => {
  return (
    <ContainerExtra>
      <StyledMovieDetailsTile>
        <IconContainer>
          <Image src={movieDetailsImage} alt="Movie poster" />
        </IconContainer>
        <Details>
          <Header>Movie Title</Header>
          <Year>2024</Year>
          <DetailContainer>
            <DetailInfo>
              <Label>Production: </Label>USA
            </DetailInfo>
            <DetailInfo>
              <Label>Release date: </Label>December 1, 2024
            </DetailInfo>
            <DetailInfo>
              <Label>Genres: </Label>Action, Drama
            </DetailInfo>
            <DetailInfo>
              <Label>
                Rating: <StarIcon src={starIcon} alt="Star icon" /> 8.5 / 10
              </Label>
            </DetailInfo>
          </DetailContainer>
          <MovieDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MovieDescription>
        </Details>
      </StyledMovieDetailsTile>
    </ContainerExtra>
  );
};
