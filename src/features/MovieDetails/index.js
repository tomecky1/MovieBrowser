import {
  StyledMovieDetailsTile,
  IconContainer,
  Image,
  Details,
  Header,
  Year,
  MovieDescription,
  Tags,
  Tag,
  StarIcon,
  Rate,
  RateElement,
  RateVotes,
  RateGrade,
} from "./styled";
import movieDetailsImage from "./movieDetails.jpg";
import starIcon from "../../icons/star.svg";
import { ContainerExtra } from "../../common/Container";

export const MovieDetails = () => {
  return (
    <ContainerExtra>
      <StyledMovieDetailsTile>
        <IconContainer>
          <Image src={movieDetailsImage} alt="Movie poster" />
        </IconContainer>
        <Details>
          <Header>Movie Title: Example</Header>
          <Year>2024</Year>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
            </Tags>
            <Rate>
              <StarIcon src={starIcon} alt="Star icon" />
              <RateGrade>8</RateGrade>
              <RateElement>/ 10</RateElement>
              <RateVotes>335 votes</RateVotes>
            </Rate>
            
          
          <MovieDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MovieDescription>
        </Details>
      </StyledMovieDetailsTile>
    </ContainerExtra >
  );
};