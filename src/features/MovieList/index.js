import PopularMoviesPoster from "../../image/PopularMoviesPoster.png";
import {
  StyledMovieDetailsTileList,
  IconContainerList,
  MobileDetailsList,
  HeaderList,
  YearList,
  TagsList,
  TagList,
  RateList,
  StyledStarIcon,
  RateGradeList,
  RateVotesList,
  ImageList,
  FlexCont,
  Text
} from "./styled";

export const MovieList = () => {
  return (
    <FlexCont>
       <Text>Popular movies</Text>
      <StyledMovieDetailsTileList>
        <IconContainerList>
          <ImageList src={PopularMoviesPoster} alt="Movie poster" />
          <MobileDetailsList>
          <HeaderList>Movie Title: Example</HeaderList>
          <YearList>2024</YearList>
          <TagsList>
            <TagList>Action</TagList>
            <TagList>Adventure</TagList>
            <TagList>Drama</TagList>
          </TagsList>
          <RateList>
            <StyledStarIcon />
            <RateGradeList>8</RateGradeList>
            <RateVotesList>335 votes</RateVotesList>
          </RateList>
          </MobileDetailsList>
        </IconContainerList>
        <IconContainerList>
          <ImageList src={PopularMoviesPoster} alt="Movie poster" />
          <MobileDetailsList>
          <HeaderList>Movie Title: Example</HeaderList>
          <YearList>2024</YearList>
          <TagsList>
            <TagList>Action</TagList>
            <TagList>Adventure</TagList>
            <TagList>Drama</TagList>
          </TagsList>
          <RateList>
            <StyledStarIcon />
            <RateGradeList>8</RateGradeList>
            <RateVotesList>335 votes</RateVotesList>
          </RateList>
          </MobileDetailsList>
        </IconContainerList>
        <IconContainerList>
          <ImageList src={PopularMoviesPoster} alt="Movie poster" />
          <MobileDetailsList>
          <HeaderList>Movie Title: Example</HeaderList>
          <YearList>2024</YearList>
          <TagsList>
            <TagList>Action</TagList>
            <TagList>Adventure</TagList>
            <TagList>Drama</TagList>
          </TagsList>
          <RateList>
            <StyledStarIcon />
            <RateGradeList>8</RateGradeList>
            <RateVotesList>335 votes</RateVotesList>
          </RateList>
          </MobileDetailsList>
        </IconContainerList>
        <IconContainerList>
          <ImageList src={PopularMoviesPoster} alt="Movie poster" />
          <MobileDetailsList>
          <HeaderList>Movie Title: Example</HeaderList>
          <YearList>2024</YearList>
          <TagsList>
            <TagList>Action</TagList>
            <TagList>Adventure</TagList>
            <TagList>Drama</TagList>
          </TagsList>
          <RateList>
            <StyledStarIcon />
            <RateGradeList>8</RateGradeList>
            <RateVotesList>335 votes</RateVotesList>
          </RateList>
          </MobileDetailsList>
        </IconContainerList>
        <IconContainerList>
          <ImageList src={PopularMoviesPoster} alt="Movie poster" />
          <MobileDetailsList>
          <HeaderList>Movie Title: Example</HeaderList>
          <YearList>2024</YearList>
          <TagsList>
            <TagList>Action</TagList>
            <TagList>Adventure</TagList>
            <TagList>Drama</TagList>
          </TagsList>
          <RateList>
            <StyledStarIcon />
            <RateGradeList>8</RateGradeList>
            <RateVotesList>335 votes</RateVotesList>
          </RateList>
          </MobileDetailsList>
        </IconContainerList>
      </StyledMovieDetailsTileList>
    </FlexCont>
  );
};

{
  /* <FlexContainer>
<Text>Popular people</Text>
<StyledPersonWrapper>
  <WrapperItem>
    <ImageWrapper src={posterExample} alt="pic" />
    <WrapperActorName>Liu Yifei</WrapperActorName>
  </WrapperItem>
  </StyledPersonWrapper>
  </FlexContainer> */
}
