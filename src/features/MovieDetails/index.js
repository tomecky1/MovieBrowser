import {
  FlexContainer,
  StyledMovieDetailsTile,
  IconContainer,
  Image,
  Details,
  Header,
  Year,
  MovieDescriptionTile,
  Tags,
  Tag,
  Rate,
  RateElement,
  RateVotes,
  RateGrade,
  DetailInfo,
  DetailInfoElementType,
  DetailInfoElement,
  StyledStarIcon,
} from "./styled";
import movieDetailsImage from "./movieDetails.jpg"
import {CastAndCrew} from "../CastAndCrew/index"

const MovieDetails = () => {
  return (
    <FlexContainer>
      <StyledMovieDetailsTile>
        <IconContainer>
          <Image src={movieDetailsImage} alt="Movie poster" />
        </IconContainer>
        <Details>
          <Header>Movie Title: Example</Header>
          <Year>2024</Year>
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
            <StyledStarIcon />
            <RateGrade>8</RateGrade>
            <RateElement>/ 10</RateElement>
            <RateVotes>335 votes</RateVotes>
          </Rate>
        </Details>
        <MovieDescriptionTile>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </MovieDescriptionTile>
      </StyledMovieDetailsTile>
            <CastAndCrew />
    </FlexContainer>
    
  );
};

export default MovieDetails;

// <>

// <FlexContainer>
//   <StyledPersonWrapper>
//     <WrapperItem>
//       <ImageWrapper src={Crew} alt="pic" />
//       <WrapperActorName>Niki Caro</WrapperActorName>
//       <WrapperRole>Director</WrapperRole>
//     </WrapperItem>
//     <WrapperItem>
//       <ImageWrapper src={Crew} alt="pic" />
//       <WrapperActorName>Niki Caro</WrapperActorName>
//       <WrapperRole>Director</WrapperRole>
//     </WrapperItem>
//     <WrapperItem>
//       <ImageWrapper src={Crew} alt="pic" />
//       <WrapperActorName>Niki Caro</WrapperActorName>
//       <WrapperRole>Director</WrapperRole>
//     </WrapperItem>
//     <WrapperItem>
//       <ImageWrapper src={Crew} alt="pic" />
//       <WrapperActorName>Niki Caro</WrapperActorName>
//       <WrapperRole>Director</WrapperRole>
//     </WrapperItem>
//     <WrapperItem>
//       <ImageWrapper src={Crew} alt="pic" />
//       <WrapperActorName>Niki Caro</WrapperActorName>
//       <WrapperRole>Director</WrapperRole>
//     </WrapperItem>
//     <WrapperItem>
//       <ImageWrapper src={Crew} alt="pic" />
//       <WrapperActorName>Niki Caro</WrapperActorName>
//       <WrapperRole>Director</WrapperRole>
//     </WrapperItem>
//   </StyledPersonWrapper>
// </FlexContainer>
// </>
