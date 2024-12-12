import { ContainerExtra } from "../../common/Container";
import movieDetailsImage from "./movieDetails.jpg";
import {
    StyledMovieDetailsTileList,
    IconContainerList,
    DetailsList,
    Header,
    YearList,
    TagsList,
    TagList,
    RateList,
    StyledStarIcon,
    RateGradeList,
    RateVotesList,
    ImageList,
} from "./styled";

export const MovieDetailsTile = () => {
    return (
        <ContainerExtra>
            <StyledMovieDetailsTileList>
                <IconContainerList>
                    <ImageList src={movieDetailsImage} alt="Movie poster" />
                </IconContainerList>
                <DetailsList>
                    <Header>Movie Title: Example</Header>
                    <YearList>2024</YearList>
                    <TagsList>
                        <TagList>Action</TagList>
                        <TagList>Drama</TagList>
                    </TagsList>
                    <RateList>
                        <StyledStarIcon />
                        <RateGradeList>8</RateGradeList>
                        <RateVotesList>335 votes</RateVotesList>
                    </RateList>
                </DetailsList>
            </StyledMovieDetailsTileList>
        </ContainerExtra>
    );
};