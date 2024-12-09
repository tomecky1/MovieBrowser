import { Image } from "../MovieDetails/styled";
import { StyledMovieDetailsTileList } from "./styled";

export const MovieDetailsTile = () => {
    return (
        <ContainerExtra>
            <StyledMovieDetailsTileList>
                <IconContainer>
                    <Image src={movieDetailsImage} alt="Movie poster" />
                </IconContainer>
                <Details>
                    <Header>Movie Title: Example</Header>
                    <Year>2024</Year>
                    <DetailInfo>
                        <DetailInfoElement>
                            <DetailInfoElementType>Release date:&nbsp;</DetailInfoElementType>
                            2020
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
            </StyledMovieDetailsTileList>
        </ContainerExtra >
    );
};